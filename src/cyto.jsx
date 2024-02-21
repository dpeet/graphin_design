// import { useEffect } from 'react';
// import cytoscape from 'cytoscape';
// import cola from 'cytoscape-cola';

// cytoscape.use(cola);

// function App() {
//   useEffect(() => {
//     const cy = cytoscape({
//       container: document.getElementById('cy'),

//       elements: [
//         { group: 'nodes', data: { id: 'Salesforce' } },
//         { group: 'nodes', data: { id: 'Product' } },
//         { group: 'nodes', data: { id: 'Amplitude', parent: 'Product' } },
//         { group: 'nodes', data: { id: 'Pendo', parent: 'Product' } },
//         { group: 'nodes', data: { id: 'Marketing' } },
//         { group: 'nodes', data: { id: 'Hubspot', parent: 'Marketing' } },
//         { group: 'nodes', data: { id: 'Pendo', parent: 'Marketing' } },
//         { group: 'nodes', data: { id: '6sense', parent: 'Marketing' } },
//         { group: 'nodes', data: { id: 'Sales' } },
//         { group: 'nodes', data: { id: 'Salesloft', parent: 'Sales' } },
//         { group: 'nodes', data: { id: 'Dealhub', parent: 'Sales' } },

//         { group: 'edges', data: { id: 'Product2Salesforce', source: 'Product', target: 'Salesforce' } },
//         { group: 'edges', data: { id: 'Marketing2Salesforce', source: 'Marketing', target: 'Salesforce' } },
//         { group: 'edges', data: { id: 'Sales2Salesforce', source: 'Sales', target: 'Salesforce' } },






        
//         // { group: 'nodes', data: { id: 'n2' } },
//         // { group: 'nodes', data: { id: 'n3' } },
//         // { group: 'nodes', data: { id: 'n4', parent: 'n37' } },
//         // { group: 'nodes', data: { id: 'n5' } },
//         // { group: 'nodes', data: { id: 'n6' } },
//         // { group: 'nodes', data: { id: 'n7', parent: 'n37' } },
//         // { group: 'nodes', data: { id: 'n8', parent: 'n37' } },
//         // { group: 'nodes', data: { id: 'n9', parent: 'n37' } },
//         // { group: 'nodes', data: { id: 'n10', parent: 'n38' } },
//         // { group: 'nodes', data: { id: 'n11', parent: 'n38' } },
//         // { group: 'nodes', data: { id: 'n12' } },
//         // { group: 'nodes', data: { id: 'n13' } },
//         // { group: 'nodes', data: { id: 'n14' } },
//         // { group: 'nodes', data: { id: 'n15' } },
//         // { group: 'nodes', data: { id: 'n16' } },
//         // { group: 'nodes', data: { id: 'n17' } },
//         // { group: 'nodes', data: { id: 'n18' } },
//         // { group: 'nodes', data: { id: 'n19' } },
//         // { group: 'nodes', data: { id: 'n20' } },
//         // { group: 'nodes', data: { id: 'n21' } },
//         // { group: 'nodes', data: { id: 'n22' } },
//         // { group: 'nodes', data: { id: 'n23' } },
//         // { group: 'nodes', data: { id: 'n24', parent: 'n39' } },
//         // { group: 'nodes', data: { id: 'n25', parent: 'n39' } },
//         // { group: 'nodes', data: { id: 'n26', parent: 'n42' } },
//         // { group: 'nodes', data: { id: 'n27', parent: 'n42' } },
//         // { group: 'nodes', data: { id: 'n28', parent: 'n42' } },
//         // { group: 'nodes', data: { id: 'n29', parent: 'n40' } },
//         // { group: 'nodes', data: { id: 'n30', parent: 'n40' } },
//         // { group: 'nodes', data: { id: 'n31', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n32', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n33', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n34', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n35', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n36', parent: 'n41' } },
//         // { group: 'nodes', data: { id: 'n37' } },
//         // { group: 'nodes', data: { id: 'n38' } },
//         // { group: 'nodes', data: { id: 'n39', parent: 'n43' } },
//         // { group: 'nodes', data: { id: 'n40', parent: 'n42' } },
//         // { group: 'nodes', data: { id: 'n41', parent: 'n42' } },
//         // { group: 'nodes', data: { id: 'n42', parent: 'n43' } },
//         // { group: 'nodes', data: { id: 'n43' } },
//         // { group: 'nodes', data: { id: 'n44', parent: 'n38' } },
//         // { group: 'nodes', data: { id: 'n45', parent: 'n38' } },
//         // { group: 'nodes', data: { id: 'n46', parent: 'n38' } },
//         // { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } },
//         // { group: 'edges', data: { id: 'e1', source: 'n1', target: 'n2' } },
//         // { group: 'edges', data: { id: 'e2', source: 'n2', target: 'n3' } },
//         // { group: 'edges', data: { id: 'e3', source: 'n0', target: 'n3' } },
//         // { group: 'edges', data: { id: 'e4', source: 'n1', target: 'n4' } },
//         // { group: 'edges', data: { id: 'e5', source: 'n2', target: 'n4' } },
//         // { group: 'edges', data: { id: 'e6', source: 'n4', target: 'n5' } },
//         // { group: 'edges', data: { id: 'e7', source: 'n5', target: 'n6' } },
//         // { group: 'edges', data: { id: 'e8', source: 'n4', target: 'n6' } },
//         // { group: 'edges', data: { id: 'e9', source: 'n4', target: 'n7' } },
//         // { group: 'edges', data: { id: 'e10', source: 'n7', target: 'n8' } },
//         // { group: 'edges', data: { id: 'e11', source: 'n8', target: 'n9' } },
//         // { group: 'edges', data: { id: 'e12', source: 'n7', target: 'n9' } },
//         // { group: 'edges', data: { id: 'e13', source: 'n13', target: 'n14' } },
//         // { group: 'edges', data: { id: 'e14', source: 'n12', target: 'n14' } },
//         // { group: 'edges', data: { id: 'e15', source: 'n14', target: 'n15' } },
//         // { group: 'edges', data: { id: 'e16', source: 'n14', target: 'n16' } },
//         // { group: 'edges', data: { id: 'e17', source: 'n15', target: 'n17' } },
//         // { group: 'edges', data: { id: 'e18', source: 'n17', target: 'n18' } },
//         // { group: 'edges', data: { id: 'e19', source: 'n18', target: 'n19' } },
//         // { group: 'edges', data: { id: 'e20', source: 'n17', target: 'n20' } },
//         // { group: 'edges', data: { id: 'e21', source: 'n19', target: 'n20' } },
//         // { group: 'edges', data: { id: 'e22', source: 'n16', target: 'n20' } },
//         // { group: 'edges', data: { id: 'e23', source: 'n20', target: 'n21' } },
//         // { group: 'edges', data: { id: 'e24', source: 'n22', target: 'n24' } },
//         // { group: 'edges', data: { id: 'e25', source: 'n23', target: 'n24' } },
//         // { group: 'edges', data: { id: 'e26', source: 'n24', target: 'n25' } },
//         // { group: 'edges', data: { id: 'e27', source: 'n26', target: 'n38' } },
//         // { group: 'edges', data: { id: 'e28', source: 'n26', target: 'n37' } },
//         // { group: 'edges', data: { id: 'e29', source: 'n26', target: 'n39' } },
//         // { group: 'edges', data: { id: 'e30', source: 'n26', target: 'n27' } },
//         // { group: 'edges', data: { id: 'e31', source: 'n26', target: 'n28' } },
//         // { group: 'edges', data: { id: 'e32', source: 'n26', target: 'n40' } },
//         // { group: 'edges', data: { id: 'e33', source: 'n21', target: 'n31' } },
//         // { group: 'edges', data: { id: 'e34', source: 'n21', target: 'n32' } },
//         // { group: 'edges', data: { id: 'e35', source: 'n31', target: 'n33' } },
//         // { group: 'edges', data: { id: 'e36', source: 'n31', target: 'n34' } },
//         // { group: 'edges', data: { id: 'e37', source: 'n33', target: 'n34' } },
//         // { group: 'edges', data: { id: 'e38', source: 'n32', target: 'n35' } },
//         // { group: 'edges', data: { id: 'e39', source: 'n32', target: 'n36' } },
//         // { group: 'edges', data: { id: 'e40', source: 'n16', target: 'n40' } },
//         ],

//       style: [
//         {
//           selector: 'node',
//           style: {
//             'background-color': '#666',
//             'label': 'data(id)'
//           }
//         },
//         {
//           selector: 'node.marketing',
//           style: {
//             'background-color': 'red',
//           }
//         },
//         {
//           selector: 'node.sales',
//           style: {
//             'background-color': 'blue',
//           }
//         },
//         {
//           selector: 'edge',
//           style: {
//             'width': 3,
//             'line-color': '#ccc',
//             'target-arrow-color': '#ccc',
//             'target-arrow-shape': 'triangle'
//           }
//         }
//       ],

//       layout: {
//         name: 'cola',
//         nodeDimensionsIncludeLabels: true
//       }
//     });

//     cy.on('layoutstop', function() {
//       const salesforceNode = cy.$id('Salesforce');
//       cy.center(salesforceNode);
//       cy.fit();
//     });
    
//   }, []);

//   return <div id="cy" style={{ width: '600px', height: '400px' }} />;
// }

// export default App;
