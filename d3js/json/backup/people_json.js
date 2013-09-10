/* Base object */
/* Server response format */
var peopleData = {
        links : [
            {source: "Adam", target: "James", linkId: 1 },
            {source: "Addy", target: "James", linkId: 2 },
            {source: "George", target: "James", linkId: 3 },
            {source: "Hudson", target: "James", linkId: 4 },
            {source: "James", target: "George", linkId: 5 }
        ],
        linksData : {
            "1": {
                "imgPath": "images/person1.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation1",
                "strength": "Strength 1",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 1"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                    }
                ],
                "name": "Adam",
                "tabsData1": [
                    {
                        "prime": "Adam role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "2": {
                "imgPath": "images/person2.png",
                "relationColor": "#ff0000",
                "relationType": "has KOL Relation2",
                "strength": "Strength 2",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 2"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                    }
                ],
                "name": "Addy",
                "tabsData1": [
                    {
                        "prime": "Addy role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "3": {
                "imgPath": "images/person3.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation3",
                "strength": "Strength 3",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 3"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                    }
                ],
                "name": "George",
                "tabsData1": [
                    {
                        "prime": "George role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "4": {
                "imgPath": "images/person4.png",
                "relationColor": "#2288BB",
                "relationType": "has KOL Relation4",
                "strength": "Strength 4",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 4"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 4 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: Market Access - 4 Market Access"
                    }
                ],
                "name": "Hudson",
                "tabsData1": [
                    {
                        "prime": "Hudson role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "f0"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "5": {
                "imgPath": "images/person4.png",
                "relationColor": "#2288BB",
                "relationType": "has KOL Relation4",
                "strength": "Strength 4",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 4"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 4 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: Market Access - 4 Market Access"
                    }
                ],
                "name": "James",
                "tabsData1": [
                    {
                        "prime": "James role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            }
        }
    };

/* Update object */
/* For testing purpose only, on each request data format should be same as base object "peopleData" */
                        
/** edited by VISHAL **/
var peopleJson = {
    "Adam" : {
        links : [
            {source: "Alex", target: "Adam", linkId: 6 },
            {source: "Adam", target: "Alex", linkId: 7 },
            {source: "Alma", target: "Adam", linkId: 8 }
        ],
        linksData :     [
                            {
                                "linkid" : "6",
                                "imgPath": "images/person1.png",
                                "relationColor": "#555555",
                                "relationType": "has KOL Relation1",
                                "strength": "Strength 1",
                                "tabsData": [
                                    {
                                        "tabBodyText": "Association: 1"
                                    },
                                    {
                                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                                    },
                                    {
                                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                                    }
                                ],
                                "name": "Alex",
                                "tabsData1": [
                                    {
                                        "prime": "Alex role"
                                    },
                                    {
                                        "prime": "primary affliation"
                                    },
                                    {
                                        "prime": "fo"
                                    },
                                    {
                                        "prime": "c"
                                    },
                                    {
                                        "prime": "i"
                                    },
                                    {
                                        "prime": "f"
                                    }
                                ]
                            },
                            {
                                "linkid" : "7",
                                "imgPath": "images/person2.png",
                                "relationColor": "#ff0000",
                                "relationType": "has KOL Relation2",
                                "strength": "Strength 2",
                                "tabsData": [
                                    {
                                        "tabBodyText": "Association: 2"
                                    },
                                    {
                                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                                    },
                                    {
                                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                                    }
                                ],
                                "name": "Adam",
                                "tabsData1": [
                                    {
                                        "prime": "Adam role"
                                    },
                                    {
                                        "prime": "primary affliation"
                                    },
                                    {
                                        "prime": "fo"
                                    },
                                    {
                                        "prime": "c"
                                    },
                                    {
                                        "prime": "i"
                                    },
                                    {
                                        "prime": "f"
                                    }
                                ]
                            },
                            {   
                                "linkid" : "8",
                                "imgPath": "images/person3.png",
                                "relationColor": "#555555",
                                "relationType": "has KOL Relation3",
                                "strength": "Strength 3",
                                "tabsData": [
                                    {
                                        "tabBodyText": "Association: 3"
                                    },
                                    {
                                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                                    },
                                    {
                                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                                    }
                                ],
                                "name": "Alma",
                                "tabsData1": [
                                    {
                                        "prime": "Alma role"
                                    },
                                    {
                                        "prime": "primary affliation"
                                    },
                                    {
                                        "prime": "fo"
                                    },
                                    {
                                        "prime": "c"
                                    },
                                    {
                                        "prime": "i"
                                    },
                                    {
                                        "prime": "f"
                                    }
                                ]
                            }
                        ]    
    },

    "Addy" : {
        links : [
            {source: "Addy", target: "Barbie", linkId: 9 },
            {source: "Barbie", target: "Addy", linkId: 10 },
            {source: "Bailey", target: "Addy", linkId: 11 }
        ],
        linksData :     [
                            {
                                'linkid':'9',
                "imgPath": "images/person1.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation1",
                "strength": "Strength 1",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 1"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                    }
                ],
                "name": "Addy",
                "tabsData1": [
                    {
                        "prime": "Addy role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            {
                'linkid':'10',
                "imgPath": "images/person2.png",
                "relationColor": "#ff0000",
                "relationType": "has KOL Relation2",
                "strength": "Strength 2",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 2"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                    }
                ],
                "name": "Barbie",
                "tabsData1": [
                    {
                        "prime": "Barbie role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            {
                'linkid':'11',
                "imgPath": "images/person3.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation3",
                "strength": "Strength 3",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 3"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                    }
                ],
                "name": "Bailey",
                "tabsData1": [
                    {
                        "prime": "Bailey role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            }
                        ]
    },

    "George" : {
        links : [
            {source: "George", target: "Ricky", linkId: 12 },
            {source: "Retha", target: "George", linkId: 13 },
            {source: "Ricky", target: "George", linkId: 14 }
        ],
        linksData : {
            "12": {
                "imgPath": "images/person1.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation1",
                "strength": "Strength 1",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 1"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                    }
                ],
                "name": "George",
                "tabsData1": [
                    {
                        "prime": "George role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "13": {
                "imgPath": "images/person2.png",
                "relationColor": "#ff0000",
                "relationType": "has KOL Relation2",
                "strength": "Strength 2",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 2"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                    }
                ],
                "name": "Retha",
                "tabsData1": [
                    {
                        "prime": "Retha role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "14": {
                "imgPath": "images/person3.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation3",
                "strength": "Strength 3",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 3"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                    }
                ],
                "name": "Ricky",
                "tabsData1": [
                    {
                        "prime": "Ricky role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            }
        }
    },

    "Hudson" : {
        links : [
            {source: "Hudson", target: "Rocky", linkId: 15 },
            {source: "Rocky", target: "Hudson", linkId: 16 },
            {source: "Roger", target: "Hudson", linkId: 17 }
        ],
        linksData : {
            "15": {
                "imgPath": "images/person1.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation1",
                "strength": "Strength 1",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 1"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                    }
                ],
                "name": "Hudson",
                "tabsData1": [
                    {
                        "prime": "Hudson role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "16": {
                "imgPath": "images/person2.png",
                "relationColor": "#ff0000",
                "relationType": "has KOL Relation2",
                "strength": "Strength 2",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 2"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                    }
                ],
                "name": "Rocky",
                "tabsData1": [
                    {
                        "prime": "Rocky role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "17": {
                "imgPath": "images/person3.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation3",
                "strength": "Strength 3",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 3"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                    }
                ],
                "name": "Roger",
                "tabsData1": [
                    {
                        "prime": "Roger role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            }
        }
    },

    "James" : {
        links : [
            {source: "James", target: "Keth", linkId: 18 },
            {source: "John", target: "James", linkId: 19 },
            {source: "Keth", target: "James", linkId: 20 }
        ],
        linksData : {
            "18": {
                "imgPath": "images/person1.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation1",
                "strength": "Strength 1",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 1"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
                    }
                ],
                "name": "James",
                "tabsData1": [
                    {
                        "prime": "James role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "19": {
                "imgPath": "images/person2.png",
                "relationColor": "#ff0000",
                "relationType": "has KOL Relation2",
                "strength": "Strength 2",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 2"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 2 Market Access - Market Access"
                    }
                ],
                "name": "John",
                "tabsData1": [
                    {
                        "prime": "John role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            },
            "20": {
                "imgPath": "images/person3.png",
                "relationColor": "#555555",
                "relationType": "has KOL Relation3",
                "strength": "Strength 3",
                "tabsData": [
                    {
                        "tabBodyText": "Association: 3"
                    },
                    {
                        "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
                    },
                    {
                        "tabBodyText": "Aggregated Link Type: 3 Market Access - Market Access"
                    }
                ],
                "name": "Keth",
                "tabsData1": [
                    {
                        "prime": "Keth role"
                    },
                    {
                        "prime": "primary affliation"
                    },
                    {
                        "prime": "fo"
                    },
                    {
                        "prime": "c"
                    },
                    {
                        "prime": "i"
                    },
                    {
                        "prime": "f"
                    }
                ]
            }
        }
    }
};

/** By VISHAL **/
var my_data = {
  "links": [
    {
      "source": "Adam",
      "target": "James",
      "linkId": "1"
    },
    {
      "source": "Addy",
      "target": "James",
      "linkId": "2"
    },
    {
      "source": "George",
      "target": "James",
      "linkId": "3"
    },
    {
      "source": "Hudson",
      "target": "James",
      "linkId": "4"
    },
    {
      "source": "James",
      "target": "George",
      "linkId": "5"
    }
  ],
  "linksData": [
    {
      "linkid": "1",
      "imgPath": "images/person1.png",
      "relationColor": "#555555",
      "relationType": "has KOL Relation1",
      "strength": "Strength 1",
      "tabsData": [
        {
          "tabBodyText": "Association: 1"
        },
        {
          "tabBodyText": "Top Connecting Objects: 1 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
        },
        {
          "tabBodyText": "Aggregated Link Type 1 Market Access - Market Access"
        }
      ],
      "name": "Adam",
      "tabsData1": [
        {
          "prime": "Adam role"
        },
        {
          "prime": "primary affliation"
        },
        {
          "prime": "fo"
        },
        {
          "prime": "c"
        },
        {
          "prime": "1"
        },
        {
          "prime": "f"
        }
      ]
    },
    {
      "linkid": "2",
      "imgPath": "images/person2.png",
      "relationColor": "#555555",
      "relationType": "has KOL Relation2",
      "strength": "Strength 2",
      "tabsData": [
        {
          "tabBodyText": "Association: 2"
        },
        {
          "tabBodyText": "Top Connecting Objects: 2 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
        },
        {
          "tabBodyText": "Aggregated Link Type 2 Market Access - Market Access"
        }
      ],
      "name": "Addy",
      "tabsData1": [
        {
          "prime": "Adam role"
        },
        {
          "prime": "primary affliation"
        },
        {
          "prime": "fo"
        },
        {
          "prime": "c"
        },
        {
          "prime": "1"
        },
        {
          "prime": "f"
        }
      ]
    },
    {
      "linkid": "3",
      "imgPath": "images/person3.png",
      "relationColor": "#555555",
      "relationType": "has KOL Relation3",
      "strength": "Strength 3",
      "tabsData": [
        {
          "tabBodyText": "Association: 3"
        },
        {
          "tabBodyText": "Top Connecting Objects: 3 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
        },
        {
          "tabBodyText": "Aggregated Link Type 3 Market Access - Market Access"
        }
      ],
      "name": "George",
      "tabsData1": [
        {
          "prime": "Adam role"
        },
        {
          "prime": "primary affliation"
        },
        {
          "prime": "fo"
        },
        {
          "prime": "c"
        },
        {
          "prime": "1"
        },
        {
          "prime": "f"
        }
      ]
    },
    {
      "linkid": "4",
      "imgPath": "images/person4.png",
      "relationColor": "#2288BB",
      "relationType": "has KOL Relation4",
      "strength": "Strength 4",
      "tabsData": [
        {
          "tabBodyText": "Association: 4"
        },
        {
          "tabBodyText": "Top Connecting Objects: 4 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
        },
        {
          "tabBodyText": "Aggregated Link Type 4 Market Access - Market Access"
        }
      ],
      "name": "Hudson",
      "tabsData1": [
        {
          "prime": "Adam role"
        },
        {
          "prime": "primary affliation"
        },
        {
          "prime": "fo"
        },
        {
          "prime": "c"
        },
        {
          "prime": "1"
        },
        {
          "prime": "f"
        }
      ]
    },
    {
      "linkid": "5",
      "imgPath": "images/person4.png",
      "relationColor": "#2288BB",
      "relationType": "has KOL Relation4",
      "strength": "Strength 4",
      "tabsData": [
        {
          "tabBodyText": "Association: 5"
        },
        {
          "tabBodyText": "Top Connecting Objects: 5 European Medicines Agency (EMA), Committee for Medicinal Products for Human Use (CHMP)"
        },
        {
          "tabBodyText": "Aggregated Link Type 5 Market Access - Market Access"
        }
      ],
      "name": "James",
      "tabsData1": [
        {
          "prime": "Adam role"
        },
        {
          "prime": "primary affliation"
        },
        {
          "prime": "fo"
        },
        {
          "prime": "c"
        },
        {
          "prime": "1"
        },
        {
          "prime": "f"
        }
      ]
    }
  ]
}