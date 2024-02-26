import Graphin from '@antv/graphin';

const SystemOverview = ({ title, graphContainerRef, graphDataFiltered, graphRef, layoutOptions }) => {
  const numNode = graphDataFiltered.nodes.length;

  let layoutOpts = {...layoutOptions}
  // vary layoutOpts.linkDistance based on numNode.  ie 150 for 10 nodes, 100 for 50 nodes, 50 for 100+ nodes
  // layoutOpts.linkDistance = Math.max(50, Math.min(150, 2000 / numNode)); 
  // layoutOpts.nodeSpacing = (d) => {
  //   // d is a node
  //   if (d.id === 'salesforce') {
  //     return 100;
  //   }
  //   return 10;
  // };

  return (
    <div className="system-overview card" key={title}> 
        <h2>{title}</h2>
        {/* <p> {layoutOpts.linkDistance.toFixed(1)} - layoutOpts.linkDistance = Math.max(50, Math.min(150, 2000 / numNode)); </p> */}
        <div className="graph-container" ref={graphContainerRef}>
          <Graphin
            animate
            animateCfg={{ easing: 'easePolyInOut' }}
            containerId="app-graph"
            data={graphDataFiltered}
            fitView
            fitViewPadding={24}
            // groupByTypes: false
            ref={graphRef}
            modes={{
              default: [
                'drag-canvas',
                { sensitivity: 1.5, type: 'zoom-canvas' },
                { onlyChangeComboSize: true, type: 'drag-node' },
                'drag-combo'
              ]
            }}
            layout={{ ...layoutOpts }}
            defaultCombo={{
              type:"rect",
            }}
            defaultNode={{
              type: "rect",
              style: { fill: "#DEE9FF", stroke: "#5B8FF9" }
            }}
            defaultEdge={{
              type: 'read-low',
              // style: { lineWidth: 2, stroke: '#bae7ff' },
              style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            }}
          />
        </div>
      </div>
  )
};

export default SystemOverview;