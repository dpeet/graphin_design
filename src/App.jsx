import "./App.scss";

import React, { useEffect, useRef, useState } from "react";

import G6 from '@antv/g6';
import Graphin from "@antv/graphin";
import graphDataRaw from "./graphData";

// TODO 30 Nodes, 6 sets of 5 combos
// TODO update graph layout controls to use functions based on number of nodes

function App() {
  const layout = {
    collideStrength: 1,
    // comboCollideStrength: 0,
    comboGravity: 100,
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
  const graphRef = React.createRef(null);
  const cardRef = useRef(null);
  const textareaRef = useRef();
  const graphContainerRef = useRef(null);
  const [layoutOptions, setLayoutOptions] = useState({...layout});
  const [textAreaValue, setTextAreaValue] = useState(JSON.stringify(layoutOptions, null, 2));
  const [nodeCount, setNodeCount] = useState(25);
  const [graphData, setGraphData] = useState(graphDataRaw);
  const [lowNodeCount, setLowNodeCount] = useState(7);
  const [highNodeCount, setHighNodeCount] = useState(101);
  const lowNodeCount = 7;
  const highNodeCount = 101;
  let nodeCounts = [lowNodeCount, nodeCount, highNodeCount, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100]

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
      {/* create 3 graphs using lowNodeCount, nodeCount, and highNodeCount to filter the graphData */}
      {nodeCounts.map((node => {
        let graphDataFiltered = {...graphDataRaw};   
        graphDataFiltered.nodes =  graphDataRaw.nodes.slice(0, node);
        graphDataFiltered.edges = graphDataRaw.edges.filter(edge => {
          return graphDataFiltered.nodes.find(node => node.id === edge.source) && graphDataFiltered.nodes.find(node => node.id === edge.target);
        }, []);
        return (
          <div className="system-overview card" key={node}> 
            <h2> System Overview - {node}</h2>
            <div className="graph-container" ref={graphContainerRef}>
              <Graphin
                animate
                animateCfg={ {
                  easing: 'easePolyInOut', // String, the easing function
                }}
                containerId="app-graph"
                // containerStyle={{margin: "24px"}}
                data={graphDataFiltered}
                // fitCenter
                fitView
                fitViewPadding={24}
                ref={graphRef}
                modes={ {
                  default: [ 'drag-canvas', {
                    sensitivity: 1.5,
                    type: 'zoom-canvas'
                  }, {
                    onlyChangeComboSize: true,
                    type: 'drag-node'
                  }, 'drag-combo' ]
                } }
                layout={ {
                  // linkDistance: Math.min((graphData.nodes.length - 1) * 25, 500),
                  ...layoutOptions,
                } }
                defaultNode={{
                  type: "rect",
                  style: {
                    fill: "#DEE9FF",
                    stroke: "#5B8FF9",
                  }
                }}
                // defaultEdge={{
                //   type: "quadratic"
                // }}
                defaultEdge={{
                  type: 'read-low',
                  style: {
                    lineWidth: 2,
                    stroke: '#bae7ff',
                  },
                  }}
              ></Graphin>
            </div>
          </div>
        );                                    
        }))}
    </div>
  );
}

export default App;