import Graphin from '@antv/graphin';

const SystemOverview = ({ title, graphDataFiltered, graphRef, layoutOptions }) => {
  const numNode = graphDataFiltered.nodes.length;

  let layoutOpts = {...layoutOptions}

  if (layoutOpts.linkDistance) {
    // Math.max(min, Math.min(max, result));
    layoutOpts.linkDistance = Math.max(200, Math.min(300, 225+numNode/2));
  }
  let printLinkDistance = null
  if (layoutOpts.linkDistance) {
    printLinkDistance = layoutOpts.linkDistance.toFixed(1);
  }
  // console.log(layoutOpts.linkDistance);

  layoutOpts.nodeSpacing = (d) => {
    // d is a node
    // console.log(d)
    if(d.comboId){
      // console.log(d)
      return 10;
    }
    return 40;
  };

  return (
    <div className="system-overview card" key={title}> 
        <h2>{title}</h2>
        {/* <p> {printLinkDistance} </p> */}
        <div className="graph-container">
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
            layout={{...layoutOpts,}}
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