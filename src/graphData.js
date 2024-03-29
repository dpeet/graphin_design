import salesforceLogo from "./assets/salesforce-logo-padding.png";

const graphData = {
    combos: [
        {
            id: "sales",
            style: {
                fill: "#1abc9c19",
                stroke: "#1abc9c",
            },
            type: "rect",
        },{
            id: "marketing",
            style: {
                fill: "#3498db19",
                stroke: "#3498db",
            },
            type: "rect",
        }
    ],
    edges: [
        { 
            source: "1", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, 
                    stroke: "#434343", 
                },
            type:"read-high",
            target: "salesforce", 
        },
        { 
            source: "2", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            type:"read-high",
            target: "salesforce", 
        },
        { 
            source: "3", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            type:"readwrite-low",
            target: "salesforce", 
        },
        { 
            source: "4", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            type:"readwrite-low",
            target: "salesforce", 
        },
        { 
            source: "5", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            type:"readwrite-high",
            target: "salesforce", 
        },
        { 
            source: "6", 
            style: { 
                endArrow: { 
                    fill: "#434343", 
                    path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", 
                }, 
                stroke: "#434343", 
            },
            target: "salesforce", 
        }, // Additional edges pointing to "salesforce" node
        { source: "7", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "8", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "9", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "10", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "11", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "12", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "13", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "14", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "15", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "16", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "17", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "18", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "19", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "20", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "21", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "22", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "23", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "24", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "25", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "26", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "27", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "28", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "29", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "30", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "31", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "32", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "33", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "34", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "35", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "36", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "37", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "38", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "39", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "40", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "41", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "42", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "43", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "44", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "45", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "46", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "47", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "48", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "49", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "50", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "51", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "52", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "53", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "54", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "55", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "56", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "57", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "58", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "59", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "60", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "61", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", }, 
        { source: "62", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "63", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "64", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "65", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "66", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "67", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "68", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "69", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "70", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "71", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "72", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "73", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "74", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "75", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "76", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "77", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "78", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "79", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "80", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "81", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "82", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "83", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "84", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "85", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "86", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "87", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "88", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "89", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "90", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "91", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "92", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "93", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "94", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "95", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "96", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "97", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "98", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "99", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },
        { source: "100", style: { endArrow: { fill: "#434343", path: "M 0,-5 \n L 10,-5 \n L 10,5 \n L 0,5 Z", }, stroke: "#434343", }, target: "salesforce", },



    ],
    nodes: [
        { id: "salesforce", type: "image", img: salesforceLogo, size:[96,67.5] },
        { id: "1", label: "Sonar", type: "rect", size: [102,32] },
        { id: "2", type: "rect", label: "Marketo", size: [104, 33], comboId: "marketing", },
        { comboId: "sales", id: "3", type: "rect", label: "Salesloft", size: [104, 33] },
        { id:"4", type: "rect", label: "Pendo", size: [110, 33] },
        { comboId: "sales", id: "5", type: "rect", label: "Custom", size: [104, 33] },
        { comboId: "marketing", id: "6", type: "rect", label: "6Sense", size: [110, 33] },
        // Additional companies
        { id: "7", type: "rect", label: "Company 7", size: [110, 33] },
        { id: "8", type: "rect", label: "Company 8", size: [110, 33] },
        { id: "9", type: "rect", label: "Company 9", size: [110, 33] },
        { id: "10", type: "rect", label: "Company 10", size: [140, 40] },
        { id: "11", type: "rect", label: "Company 11", size: [140, 40] },
        { id: "12", type: "rect", label: "Company 12", size: [140, 40] },
        { id: "13", type: "rect", label: "Company 13", size: [110, 33] },
        { id: "14", type: "rect", label: "Company 14", size: [110, 33] },
        { id: "15", type: "rect", label: "Company 15", size: [110, 33] },
        { id: "16", type: "rect", label: "Company 16", size: [110, 33] },
        { id: "17", type: "rect", label: "Company 17", size: [110, 33] },
        { id: "18", type: "rect", label: "Company 18", size: [110, 33] },
        { id: "19", type: "rect", label: "Company 19", size: [110, 33] },
        { id: "20", type: "rect", label: "Company 20", size: [110, 33] },
        { id: "21", type: "rect", label: "Company 21", size: [110, 33] },
        { id: "22", type: "rect", label: "Company 22", size: [110, 33] },
        { id: "23", type: "rect", label: "Company 23", size: [110, 33] },
        { id: "24", type: "rect", label: "Company 24", size: [110, 33] },
        { id: "25", type: "rect", label: "Company 25", size: [110, 33] },
        { id: "26", type: "rect", label: "Company 26", size: [110, 33]},
        { id: "27", type: "rect", label: "Company 27", size: [110, 33] },
        { id: "28", type: "rect", label: "Company 28", size: [110, 33] },
        { id: "29", type: "rect", label: "Company 29", size: [110, 33] },
        { id: "30", type: "rect", label: "Company 30", size: [110, 33] },
        { id: "31", type: "rect", label: "Company 31", size: [110, 33] },
        { id: "32", type: "rect", label: "Company 32", size: [110, 33] },
        { id: "33", type: "rect", label: "Company 33", size: [110, 33] },
        { id: "34", type: "rect", label: "Company 34", size: [110, 33] },
        { id: "35", type: "rect", label: "Company 35", size: [110, 33] },
        { id: "36", type: "rect", label: "Company 36", size: [110, 33] },
        { id: "37", type: "rect", label: "Company 37", size: [110, 33] },
        { id: "38", type: "rect", label: "Company 38", size: [110, 33] },
        { id: "39", type: "rect", label: "Company 39", size: [110, 33] },
        { id: "40", type: "rect", label: "Company 40", size: [110, 33] },
        { id: "41", type: "rect", label: "Company 41", size: [110, 33] },
        { id: "42", type: "rect", label: "Company 42", size: [110, 33] },
        { id: "43", type: "rect", label: "Company 43", size: [110, 33] },
        { id: "44", type: "rect", label: "Company 44", size: [110, 33] },
        { id: "45", type: "rect", label: "Company 45", size: [110, 33] },
        { id: "46", type: "rect", label: "Company 46", size: [110, 33] },
        { id: "47", type: "rect", label: "Company 47", size: [110, 33] },
        { id: "48", type: "rect", label: "Company 48", size: [110, 33] },
        { id: "49", type: "rect", label: "Company 49", size: [110, 33] },
        { id: "50", type: "rect", label: "Company 50", size: [110, 33] },
        { id: "51", type: "rect", label: "Company 51", size: [110, 33] },
        { id: "52", type: "rect", label: "Company 52", size: [110, 33] },
        { id: "53", type: "rect", label: "Company 53", size: [110, 33] },
        { id: "54", type: "rect", label: "Company 54", size: [110, 33] },
        { id: "55", type: "rect", label: "Company 55", size: [110, 33] },
        { id: "56", type: "rect", label: "Company 56", size: [110, 33] },
        { id: "57", type: "rect", label: "Company 57", size: [110, 33] },
        { id: "58", type: "rect", label: "Company 58", size: [110, 33] },
        { id: "59", type: "rect", label: "Company 59", size: [110, 33] },
        { id: "60", type: "rect", label: "Company 60", size: [110, 33] },
        { id: "61", type: "rect", label: "Company 61", size: [110, 33] },
        { id: "62", type: "rect", label: "Company 62", size: [110, 33] },
        { id: "63", type: "rect", label: "Company 63", size: [110, 33] },
        { id: "64", type: "rect", label: "Company 64", size: [110, 33] },
        { id: "65", type: "rect", label: "Company 65", size: [110, 33] },
        { id: "66", type: "rect", label: "Company 66", size: [110, 33] },
        { id: "67", type: "rect", label: "Company 67", size: [110, 33] },
        { id: "68", type: "rect", label: "Company 68", size: [110, 33] },
        { id: "69", type: "rect", label: "Company 69", size: [110, 33] },
        { id: "70", type: "rect", label: "Company 70", size: [110, 33] },
        { id: "71", type: "rect", label: "Company 71", size: [110, 33] },
        { id: "72", type: "rect", label: "Company 72", size: [110, 33] },
        { id: "73", type: "rect", label: "Company 73", size: [110, 33] },
        { id: "74", type: "rect", label: "Company 74", size: [110, 33] },
        { id: "75", type: "rect", label: "Company 75", size: [110, 33] },
        { id: "76", type: "rect", label: "Company 76", size: [110, 33] },
        { id: "77", type: "rect", label: "Company 77", size: [110, 33] },
        { id: "78", type: "rect", label: "Company 78", size: [110, 33] },
        { id: "79", type: "rect", label: "Company 79", size: [110, 33] },
        { id: "80", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "81", type: "rect", label: "Company 81", size: [110, 33] },
        { id: "82", type: "rect", label: "Company 82", size: [110, 33] },
        { id: "83", type: "rect", label: "Company 83", size: [110, 33] },
        { id: "84", type: "rect", label: "Company 84", size: [110, 33] },
        { id: "85", type: "rect", label: "Company 85", size: [110, 33] },
        { id: "86", type: "rect", label: "Company 86", size: [110, 33] },
        { id: "87", type: "rect", label: "Company 87", size: [110, 33] },
        { id: "88", type: "rect", label: "Company 88", size: [110, 33] },
        { id: "89", type: "rect", label: "Company 89", size: [110, 33] },
        { id: "90", type: "rect", label: "Company 90", size: [110, 33] },
        { id: "91", type: "rect", label: "Company 91", size: [110, 33] },
        { id: "92", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "93", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "94", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "95", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "96", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "97", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "98", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "99", type: "rect", label: "Company 80", size: [110, 33] },
        { id: "100", type: "rect", label: "Company 80", size: [110, 33] },



    ]
};


export default graphData;