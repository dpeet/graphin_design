import "./App.scss";

import React, { useEffect, useRef, useState } from "react";

import G6 from '@antv/g6';
// import Graphin from "@antv/graphin";
import SystemOverview from './SystemOverview'; // Import the 'SystemOverview' component
import graphData2 from "./graphData2";
import graphDataRaw from "./graphData";
import salesforceLogo from "./assets/salesforce-logo.png";

// TODO 30 Nodes, 6 sets of 5 combos
// TODO update graph layout controls to use functions based on number of nodes

function App() {
  const layout = {
    collideStrength: 1,
    // comboCollideStrength: 0,
    comboGravity: 1000,
    // comboSpacing: 2,
    depthRepulsiveForceScale: 8,
    gravity: 20,
    // maxPreventOverlapIteration: 100,
    // nodeSize: 100,
    nodeSpacing: 10,
    // nodeStrength: 100,
    linkDistance: 150,
    preventOverlap: true,
    // strictRadial: true,
    type: 'comboForce',
  }

  const generateHighComboGraphData = (targetNodes) => {
    const graphData = { nodes: [], combos: [], edges: [] };
    graphData.nodes.push({
      id: "salesforce", type: "image", img: salesforceLogo, size:[96,67.5]
    })
    let totalNodes = 1;
    
    for (let i = 0; totalNodes < targetNodes; i++) {
      const comboId = `combo${i}`;
      // Random number between 5 and 10, but not exceeding targetNodes
      const nodeCount = Math.min(Math.floor(Math.random() * 3) + 5, targetNodes - totalNodes); 
  
      // Add combo
      graphData.combos.push({
        id: comboId,
        // label: `Combo ${i}`,
        type: "rect",
        style: {
          fill: "#1abc9c19",
          stroke: "#1abc9c",
        },
      });
  
      // Add nodes
      for (let j = 0; j < nodeCount; j++) {
        const nodeId = `node${i}${j}`;
        graphData.nodes.push({
          id: nodeId,
          label: `Node ${i}-${j}`,
          comboId: comboId,
          size: [140, 40],
          type:"rect",
          style: { 
            endArrow: { 
                fill: "#434343", 
                path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
            }, 
            stroke: "#434343", 
        },
        });
        // Add edges

        const edgeOptions = ["read-low", "read-high", "readwrite-low", "readwrite-high"];
        graphData.edges.push({
          source: nodeId,
          target: "salesforce",
          type: edgeOptions[Math.floor(Math.random() * 4)],
          style: { 
            endArrow: { 
                fill: "#434343", 
                path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, 
                stroke: "#434343", 
            },
        });
      }
      totalNodes += nodeCount;
    }

    if (targetNodes === 75 ){
      console.log(graphData);
    }
  
    return graphData;
  };

  const graphRef = React.createRef(null);
  const textareaRef = useRef();
  const graphContainerRef = useRef(null);
  const [layoutOptions, setLayoutOptions] = useState({...layout});
  const [textAreaValue, setTextAreaValue] = useState(JSON.stringify(layoutOptions, null, 2));
  const [nodeCount, setNodeCount] = useState(25);
  const [graphData, setGraphData] = useState(graphDataRaw);
  const lowNodeCount = 7;
  const highNodeCount = 101;
  // let nodeCounts = [lowNodeCount, nodeCount, highNodeCount, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  let nodeCounts = [lowNodeCount, nodeCount, highNodeCount]
  let highComboNodeCounts = [3, 8, 13];

  const registerEdge = (edgeType) => {
    let permissions
    let volume
    // the options for edgeType are read-low, read-high, readwrite-low, readwrite-high.  The first word is the permission and the second word is the volume
    let edgeTypeArray = edgeType.split("-");
    if (edgeTypeArray[0] === "read") {
      permissions = "read"
    } else if (edgeTypeArray[0] === "readwrite"){
      permissions = "readwrite"
    } else {
      console.error("Invalid edgeType " + edgeType);
    }

    if (edgeTypeArray[1] === "low") {
      volume = "low"
    } else if (edgeTypeArray[1] === "high"){
      volume = "high"
    } else {
      console.error("Invalid edgeType " + edgeType);
    }

    G6.registerEdge(
      edgeType,
      {
        afterDraw(cfg, group) {
          // Get the first graphics shape of this type of edge, which is the edge's path
          const shape = group.get('children')[0];
          // The start point of the edge's path
          const startPoint = shape.getPoint(0);
          
          let circleCount = volume === "low" ? 1 : 2;
          let readColor = "#1890FF";
          let writeColor = "#fa541c";
          let radius = 5;

          // create an array called combinations. 
          let combinations = []
          // create elements in the combination array.  use the pair ["permission", "circleCountIndex"].  for example read-high would be [["read", 0], ["read", 1]]
          for (let i = 0; i < circleCount; i++){
            combinations.push(["read", i]);
          }
          if (permissions === "readwrite") {
            for (let i = 0; i < circleCount; i++){
              combinations.push(["readwrite", i]);
            }
          }
          // if permission is read, create circleCount number of circles using the ratio.  If permission is readwrite, create circleCount number of circles using the ratio and circleCount number using the inverse of the ratio
          combinations.map((combination) => {
            const [permission, circleCountIndex] = combination;
            const color = permission === "read" ? readColor : writeColor;
            const circle = group.addShape('circle', {
              attrs: {
                x: startPoint.x,
                y: startPoint.y,
                fill: color,
                r: radius,
              },
              name: 'circle-shape',
            });
            // add some randomness to .25 to make it not at the exact same time.  the range is .2 to .3
            let randomOffset = Math.random() * 0.1 + 0.2;
            circle.animate(
              (ratio) => {
                // multiply the circleCountIndex by 0.25 to get the offset
                // if permission is "read" then set ratio to 1 - ratio, else use ratio
                // If the permission is "read" and the ratio goes above 1, then subtract 1 from the ratio
                // If the permission is "readwrite" and the ratio goes below 1, then add 1 from the ratio
                const tmpPoint = shape.getPoint(((ratio) => {
                  if (permission === "read"){
                    ratio += (circleCountIndex*randomOffset);
                    return ratio > 1 ? ratio - 1 : ratio;
                  } else if (permission === "readwrite"){
                    ratio = 1 - ratio;
                    ratio -= (circleCountIndex*randomOffset);
                    return ratio < 0 ? ratio + 1 : ratio;
                  }
                })(ratio));
                return {
                  x: tmpPoint.x,
                  y: tmpPoint.y,
                };
              },
              {
                repeat: true,
                duration: 3000,
              }
            );
          });
        }
      },
      'quadratic',
    ); // Extend the built-in edge quadratic
  }
  registerEdge('read-low');
  registerEdge('read-high');
  registerEdge('readwrite-low');
  registerEdge('readwrite-high');

  const handleNodeCountChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 0) {
      let graphDataFiltered = {...graphDataRaw}; 
      console.log(graphDataRaw.nodes)
      graphDataFiltered.nodes =  graphDataRaw.nodes.slice(0, value);
      graphDataFiltered.edges = graphDataRaw.edges.filter(edge => {
        return graphDataFiltered.nodes.find(node => node.id === edge.source) && graphDataFiltered.nodes.find(node => node.id === edge.target);
      }, []);
      console.log('graphDataFiltered', graphDataFiltered);
      setGraphData({...graphDataFiltered});
      setNodeCount(value);
      // get graph instance and render it
      const { graph } = graphRef.current;
      graph.render();
    }
  };

  const handleInputChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleBlur = (event) => {
    try {
      setLayoutOptions(JSON.parse(event.target.value));
    } catch (error) {
      console.error("Invalid JSON", error);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (graphContainerRef.current) {
      // const rect = graphContainerRef.current.getBoundingClientRect();
      // const centerX = (rect.left + rect.right) / 2;
      // const centerY = (rect.top + rect.bottom) / 2;

      // Update the layout of the graph using centerX and centerY
      setLayoutOptions({
        // center: [ centerX, centerY],
        ...layoutOptions
      });
      const { graph } = graphRef.current;
      graph.render();
    }
    }, []);

  useEffect(() => {
    const { graph } = graphRef.current;
    if (graph) {
      graph.on("combo:mouseenter", (evt) => {
        const { item } = evt;
        if (item) {
          graph.setItemState(item, "active", true);
        }
      });

      graph.on("combo:mouseleave", (evt) => {
        const { item } = evt;
        if (item) {
          graph.setItemState(item, "active", false);
        }
      });

      graph.on("combo:click", (evt) => {
        const { item } = evt;
        if (item) {
          graph.setItemState(item, "selected", true);
        }
      });

      graph.on("canvas:click", () => {
        graph.getCombos().forEach((combo) => {
          graph.clearItemStates(combo);
        });
      });
    }

    // Clean up function to remove event listeners when component unmounts
    return () => {
      if (graph) {
        graph.off("combo:mouseenter");
        graph.off("combo:mouseleave");
        graph.off("combo:click");
        graph.off("canvas:click");
      }
    };
  }, [layoutOptions, graphRef]); // Re-run the effect when `graph` changes

  return (
    <div className="app">
      <div className="graph-controls card">
        <h2>Graph Controls</h2>
        <div className="controls">
          <div className="controls-header">Controls</div>
          <div className="controls-body">
              <label className="node-control">
              Number of Nodes (Max {graphDataRaw.nodes.length}): 
              <input type="number" value={nodeCount} onChange={handleNodeCountChange} min="0" max={graphDataRaw.nodes.length} />
            </label>
            <div className="controls-body-item">
              <input type="checkbox" id="hide-detected-apps" name="hide-detected-apps" />
              <label htmlFor="hide-detected-apps">Hide Detected Apps</label>
            </div>
            <textarea ref={textareaRef} value={textAreaValue} onChange={handleInputChange} onBlur={handleBlur}
            />
          </div>
          
          </div>
      </div>

      {highComboNodeCounts.map((combo => {
        let graphDataFiltered = {...graphData2};
        // filter combos to only the first x combos (using combo variable)
        graphDataFiltered.combos = graphData2.combos.slice(0, combo);
        // filter all nodes tha have a comboId that isn't in the graphDataFiltered.combos array or the id is "salesforce"
        graphDataFiltered.nodes = graphData2.nodes.filter(node => {
          return graphDataFiltered.combos.find(combo => combo.id === node.comboId) || node.id === "salesforce";
        }, []);
        // filter all edges that have a source or target that isn't in the graphDataFiltered.nodes array or the id is "salesforce"
        graphDataFiltered.edges = graphData2.edges.filter(edge => {
          return graphDataFiltered.nodes.find(node => node.id === edge.source) || graphDataFiltered.nodes.find(node => node.id === edge.target);
        }, []);
        let title = `App Overview with ${graphDataFiltered.nodes.length} nodes and ${combo} combos`;  
        console.log(graphDataFiltered);
        return (
          <SystemOverview 
            key={combo}
            title={title} 
            graphContainerRef={graphContainerRef} 
            graphDataFiltered={graphDataFiltered} 
            graphRef={graphRef} 
            layoutOptions={layoutOptions} 
          />
        );                                    
        }))}
      <div className="card" />

      {/* create 3 graphs using lowNodeCount, nodeCount, and highNodeCount to filter the graphData */}
      {nodeCounts.map((node => {
        let graphDataFiltered = {...graphDataRaw}; 
        let title = `App Overview with ${node} nodes`;  
        graphDataFiltered.nodes =  graphDataRaw.nodes.slice(0, node);
        graphDataFiltered.edges = graphDataRaw.edges.filter(edge => {
          return graphDataFiltered.nodes.find(node => node.id === edge.source) && graphDataFiltered.nodes.find(node => node.id === edge.target);
        }, []);
        // if (node === 25){
        //   console.log(graphDataFiltered);
        // }
        return (
          <SystemOverview 
            key={node}
            title={title} 
            graphContainerRef={graphContainerRef} 
            graphDataFiltered={graphDataFiltered} 
            graphRef={graphRef} 
            layoutOptions={layoutOptions} 
          />
        );                                    
        }))}
    </div>
  );
}

export default App;