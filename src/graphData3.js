const graphData3 = {
    "nodes": [
        {
            "id": "salesforce",
            "type": "image",
            "img": "/src/assets/salesforce-logo-padding.png",
            "size": [
                96,
                67.5
            ]
        },{
            "id": "Churnzero",
            "type": "image",
            "img": "/src/assets/Churnzero.png",
            "comboId": "CS",
            "size": [125, 36]
        },{
            "id": "Crossbeam",
            "type": "image",
            "img": "/src/assets/Crossbeam.png",
            "comboId": "Sales",
            "size": [109, 36]
        },{
            "id": "Fivetran",
            "type": "image",
            "img": "/src/assets/Fivetran.png",
            "comboId": "RevOps",
            "size": [103, 36]
        },{
            "id": "Hightouch",
            "type": "image",
            "img": "/src/assets/Hightouch.png",
            "comboId": "RevOps",
            "size": [136, 36]
        },{
            "id": "Hubspot",
            "type": "image",
            "img": "/src/assets/Hubspot.png",
            "comboId": "Marketing",
            "size": [105, 36]
        },{
            "id": "Maxio",
            "type": "image",
            "img": "/src/assets/Maxio.png",
            "comboId": "Finance",
            "size": [114, 36]
        },{
            "id":"Pendo",
            "type":"image",
            "img":"/src/assets/Pendo.png",
            "comboId":"Product",
            "size":[107,36]
        },{
            "id":"Salesloft",
            "type":"image",
            "img":"/src/assets/Salesloft.png",
            "comboId":"Sales",
            "size":[109,36]
        },{
            "id":"Superhuman",
            "type":"image",
            "img":"/src/assets/Superhuman.png",
            "comboId":"Sales",
            "size":[180,36]
        },{
            "id":"Zapier",
            "type":"image",
            "img":"/src/assets/Zapier.png",
            "comboId":"RevOps",
            "size":[94,36]
        }

    ],
    "combos": [
        {
            "id": "Product",
            "type": "rect",
            "style": {
                "fill": "#fa7a7019",
                "stroke": "#fa7a70"
            }
        },
        {
            "id": "Marketing",
            "type": "rect",
            "style": {
                "fill": "#da90fc19",
                "stroke": "#da90fc"
            }
        },
        {
            "id": "Finance",
            "type": "rect",
            "style": {
                "fill": "#fcf09019",
                "stroke": "#fcf090"
            }
        },
        {
            "id": "Sales",
            "type": "rect",
            "style": {
                "fill": "#65b87819",
                "stroke": "#65b878"
            }
        },
        {
            "id": "CS",
            "type": "rect",
            "style": {
                "fill": "#fadb8719",
                "stroke": "#fadb87"
            }
        },
        {
            "id": "RevOps",
            "type": "rect",
            "style": {
                "fill": "#d9d9d919",
                "stroke": "#d9d9d9"
            }
        },
    ],
    "edges": [
        {
            "source": "Churnzero",
            "target": "salesforce",
            "type": "readwrite-low",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Crossbeam",
            "target": "salesforce",
            "type": "readwrite-low",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Fivetran",
            "target": "salesforce",
            "type": "read-high",
            "style": { // read
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z"
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Hightouch",
            "target": "salesforce",
            "type": "read-low",
            "style": { // read
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z"
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Hubspot",
            "target": "salesforce",
            "type": "readwrite-high",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Maxio",
            "target": "salesforce",
            "type": "readwrite-low",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Pendo",
            "target": "salesforce",
            "type": "readwrite-high",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Salesloft",
            "target": "salesforce",
            "type": "readwrite-high",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Superhuman",
            "target": "salesforce",
            "type": "readwrite-low",
            "style": { // readwrite
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,0 L 15,-5 L 15,5 Z",
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                },
                "stroke": "#434343"
            }
        },{
            "source": "Zapier",
            "target": "salesforce",
            "type": "read-low",
            "style": { // read
                "endArrow": {
                    "fill": "#434343",
                    "path": "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z"
                },
                "startArrow":{
                    fill: "#434343", 
                    path: "M 0,0 L 15,-5 L 15,5 Z", 
                    stroke: "#434343",
                },
                "stroke": "#434343"
            }
        }
    ]
}

export default graphData3;