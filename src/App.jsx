import "./App.scss";

import React, { useEffect, useRef, useState } from "react";

import G6 from '@antv/g6';
// import Graphin from "@antv/graphin";
import SystemOverview from './SystemOverview'; // Import the 'SystemOverview' component
import graphData2 from "./graphData2";
import graphDataRaw from "./graphData";

function App() {

  let layout = {
    // collideStrength: .6,
    // comboGravity: 1000,
    depthRepulsiveForceScale: 5,
    // depthAttractiveForceScale: 1,
    // comboSpacing: 50,
    // gravity: 100,
    // nodeSpacing: 40,
    linkDistance: 200,
    // nodeStrength: 50,
    // comboPadding: 1,
    // comboCollideStrength: .75,
    // nodeStrength: 1000,
    // edgeStrength: .75,
    // nodeCollideStrength: 1,
    // comboSpacing: 50,
    // maxIterations: 10000,
    
    preventOverlap: true,
    type: 'comboForce',
  }

  const graphRef = React.createRef(null);
  const textareaRef = useRef();
  const [layoutOptions, setLayoutOptions] = useState({...layout});
  const [textAreaValue, setTextAreaValue] = useState(JSON.stringify(layoutOptions, null, 2));
  const [nodeCount, setNodeCount] = useState(25);
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
      <div className="graph-controls card" style={{width:"320px"}}>
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
        return (
          <SystemOverview 
            key={combo}
            title={title} 
            graphDataFiltered={graphDataFiltered} 
            graphRef={graphRef} 
            layoutOptions={layoutOptions} 
          />
        );                                    
        }))}
      <div className="card" style={{width:"320px"}}/>

      {/* create 3 graphs using lowNodeCount, nodeCount, and highNodeCount to filter the graphData */}
      {nodeCounts.map((node => {
        let graphDataFiltered = {...graphDataRaw}; 
        let title = `App Overview with ${node} nodes`;  
        graphDataFiltered.nodes =  graphDataRaw.nodes.slice(0, node);
        graphDataFiltered.edges = graphDataRaw.edges.filter(edge => {
          return graphDataFiltered.nodes.find(node => node.id === edge.source) && graphDataFiltered.nodes.find(node => node.id === edge.target);
        }, []);
        return (
          <SystemOverview 
            key={node}
            title={title} 
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