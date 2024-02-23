import Graphin from '@antv/graphin';

const SystemOverview = ({ title, graphContainerRef, graphDataFiltered, graphRef, layoutOptions }) => (
  <div className="system-overview card" key={title}> 
    <h2>{title}</h2>
    <div className="graph-container" ref={graphContainerRef}>
      <Graphin
        animate
        animateCfg={{ easing: 'easePolyInOut' }}
        containerId="app-graph"
        data={graphDataFiltered}
        fitView
        fitViewPadding={24}
        ref={graphRef}
        modes={{
          default: [
            'drag-canvas',
            { sensitivity: 1.5, type: 'zoom-canvas' },
            { onlyChangeComboSize: true, type: 'drag-node' },
            'drag-combo'
          ]
        }}
        layout={{ ...layoutOptions }}
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
);

export default SystemOverview;