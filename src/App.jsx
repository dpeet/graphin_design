import "./App.scss";

import React, { useEffect, useRef, useState } from "react";

import G6 from '@antv/g6';
import Graphin from "@antv/graphin";
import graphDataRaw from "./graphData";

// TODO 30 Nodes, 6 sets of 5 combos

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
  let nodeCounts = [lowNodeCount, nodeCount, highNodeCount, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  function registerEdge(edgeType, direction, duration, color, poly) {
    G6.registerEdge(
      edgeType,
      {
        afterDraw(cfg, group) {
          const shape = group.get('children')[0];
          const startPoint = shape.getPoint(0);
          let polyshape
          let sideLength = 16;

          if (poly === "circle"){
            polyshape = group.addShape(poly, {
              attrs: {
                x: startPoint.x,
                y: startPoint.y,
                fill: color,
                r: 8,
              },
              name: 'circle-shape',
            });
          } else if (poly === "rect"){
            polyshape = group.addShape('polygon', {
              attrs: {
                // x: startPoint.x,
                // y: startPoint.y,
                points: [
                  [startPoint.x, startPoint.y], // top-left point
                  [startPoint.x, startPoint.y + sideLength], // bottom-left point
                  [startPoint.x + sideLength, startPoint.y + sideLength], // bottom-right point
                  [startPoint.x + sideLength, startPoint.y], // top-right point
                ],
                // width: 10,
                // height: 10,
                fill: color,
              },
              name: 'rect-shape',
            });

          }
            
          polyshape.animate(
            (ratio) => {
              // if direction is 1, set ratio to 1 - ratio, else use ratio
              const r = direction ? 1 - ratio : ratio;
              const tmpPoint = shape.getPoint(r);
              let halfSideLength = sideLength / 2;

              let points = [
                  [tmpPoint.x - halfSideLength, tmpPoint.y - halfSideLength], // top-left point
                  [tmpPoint.x - halfSideLength, tmpPoint.y + halfSideLength], // bottom-left point
                  [tmpPoint.x + halfSideLength, tmpPoint.y + halfSideLength], // bottom-right point
                  [tmpPoint.x + halfSideLength, tmpPoint.y - halfSideLength], // top-right point
              ];
              return {
                x: tmpPoint.x,
                y: tmpPoint.y,
                points: points,
              };
            },
            {
              repeat: true,
              duration: duration,
            },
          );

          if (direction) {
            let polyshape2
            if (poly === "circle"){
              polyshape2 = group.addShape(poly, {
                attrs: {
                  x: startPoint.x,
                  y: startPoint.y,
                  fill: color,
                  r: 8,
                },
                name: 'circle-shape',
              });
            } else if (poly === "rect"){
              polyshape2 = group.addShape('polygon', {
                attrs: {
                  // x: startPoint.x,
                  // y: startPoint.y,
                  points: [
                    [startPoint.x, startPoint.y], // top-left point
                    [startPoint.x, startPoint.y + sideLength], // bottom-left point
                    [startPoint.x + sideLength, startPoint.y + sideLength], // bottom-right point
                    [startPoint.x + sideLength, startPoint.y], // top-right point
                  ],
                  // width: 10,
                  // height: 10,
                  fill: color,
                },
                name: 'rect-shape',
              });
            }
            polyshape2.animate(
              (ratio) => {
                // if direction is 1, set ratio to 1 - ratio, else use ratio
                const r = direction ? ratio: 1 - ratio;
                const tmpPoint = shape.getPoint(r);
                let halfSideLength = sideLength / 2;

                let points = [
                    [tmpPoint.x - halfSideLength, tmpPoint.y - halfSideLength], // top-left point
                    [tmpPoint.x - halfSideLength, tmpPoint.y + halfSideLength], // bottom-left point
                    [tmpPoint.x + halfSideLength, tmpPoint.y + halfSideLength], // bottom-right point
                    [tmpPoint.x + halfSideLength, tmpPoint.y - halfSideLength], // top-right point
                ];
                return {
                  x: tmpPoint.x,
                  y: tmpPoint.y,
                  points: points,
                };
              },
              {
                repeat: true,
                duration: duration,
              },
            );
          }

        },
      },
      'quadratic',
    );
  }

  registerEdge('circle-running-slow-start', 0, 3000, '#fa541cCC', "circle");
  registerEdge('circle-running-fast-start', 0, 1000, '#fa541cCC', "circle");
  registerEdge('circle-running-slow-end', 1, 3000, '#1890FFCC', "rect");
  registerEdge('circle-running-fast-end', 1, 1000, '#1890FFCC', "rect");

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
            // style={{
            //     width: '100%',
            //     minHeight: '400px'
            //   }} 
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
                  type: 'quadratic',
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