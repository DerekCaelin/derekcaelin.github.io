var config = {
    style: 'mapbox://styles/derekcaelintm/cl750jezf000l14lozbesd9rn',
    accessToken: 'pk.eyJ1IjoiZGVyZWtjYWVsaW50bSIsImEiOiJja2dtcGp6ZTQwM3F3MnlwMTR1cHJya202In0.YeLrbEMIIvr3Ev0Nb4cs3A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: true,
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: false,
    title: "A Safer Rocky Hill",
    logo: '',
    subtitle: 'Proposed Rocky Hill Bikeway',
    byline: 'Sustainable Rocky Hill',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'From interviews with Rocky Hill residents',
    chapters: [
        {
            id: 'before',
            alignment: 'left',
            hidden: false,
            //title: 'Introduction',
            //image: 'images/mudbanks_move.gif',
            //caption: 'An illustration of a stone barrier along an urban center, exposed to the ocean. Image by Amy West.',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "<p>Rocky Hill is a green and beautiful town. We’ve worked hard to make our roads safe for all residents. On February 1, 2023, the town shared a list of Possible Bicycle Facilities: a list of roads that are potentially suitable for bike lanes.</p> <p> Sustainable Rocky Hill was asked to provide feedback and suggest priority roads.</p>",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },             
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Possible Bike Facilities',
            alignment: 'center',
            hidden: false,
            //title: 'Introduction',
            image: 'images/big-map-scan.jpeg',
            //caption: 'An illustration of a stone barrier along an urban center, exposed to the ocean. Image by Amy West.',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "On February 1, 2023, the town shared a list of Possible Bicycle Facilities: a list of roads that are potentially suitable for bike lanes. Sustainable Rocky Hill was asked to provide feedback and suggest priority roads.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                   {
                       layer: 'possibleBikeFacilities',
                       opacity: 1
                   }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'empty view 1',
            alignment: 'left',
            hidden: true,
            //title: 'Introduction',
            image: 'images/big-map-scan.jpeg',
            description: "",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'walkbike',
            alignment: 'left',
            hidden: false,
            title: 'Walk Bike Feedback',
            image: 'images/feedback1zoom.jpg',
            caption: '',
            description: "We brought the plans to various citizen groups for their feedback. First, we spoke to representatives from Walk-Bike Rocky Hill, who submitted a proposal for bike lanes to the town in 2020.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                   {
                       layer: 'feedback1',
                       opacity: 1
                    },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'feedback1',
                    opacity: 0
                }
            ]
        },
        
        {
            id: 'street-project',
            alignment: 'right',
            hidden: false,
            title: 'Community Feedback',
            image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "We also spoke to participants at the Senior / Community center, who attended an in-person feedback session.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'feedback1',
                    opacity: 0
                },
                {
                    layer: 'feedback2',
                    opacity: 1
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'feedback1',
                    opacity: 0
                },
                {
                    layer: 'feedback2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'teens',
            alignment: 'left',
            hidden: false,
            title: 'Teens',
            image: 'images/teens.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Finally, we came to the Teen Council and asked for feedback from our town’s young people, who in this session were from the south and western sides of town.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'feedback1',
                    opacity: 0
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'feedback1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'summary',
            alignment: 'center',
            hidden: false,
            //title: 'Teens',
           // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "We’ve compiled their views into the following feedback.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'feedback1',
                    opacity: 0
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'feedback1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'key locations',
            alignment: 'left',
            hidden: false,
            title: 'Bike Routes Should Connect to Key Town Infrastructure',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Participants agreed that the critical function of biking infrastructure (and sidewalks) is to make it possible for bicyclists to navigate from their homes to important facilities: places to buy food, town buildings, schools, parks, and cultural buildings.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 1
                },
                
            ],
            onChapterExit: [
                {
                    //layer: 'feedback1',
                   // opacity: 0
                }
            ]
        },
        {
            id: 'key locations-2',
            alignment: 'right',
            hidden: false,
            caption: '',
            description: "In particular, the east side of town hosts the town campus, multiple parks, grocery stores, religous buildings, and schools.",
            location: {
                center: [-72.62991, 41.66600],
                zoom: 13.62,
                pitch: 32,
                bearing: -27.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-east-road',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-road',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
            ]
        },
        {
            id: 'feedback-3',
            alignment: 'left',
            hidden: false,
            // title: 'Bike Routes Should Connect to Key Town Infrastructure',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "Residents believe a bike path should connect the east and west sides of town, so that residents of the west side have access to infrastructure on the east. While everyone agreed that an east-west connection was vital, different residents focused on Elm Street, West Street, and Brook Street.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-west-arteries',
                    opacity: 1
                }

            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-west-arteries',
                    opacity: 0
                }

            ]
        },
        {
            id: 'feedback-4',
            alignment: 'right',
            hidden: false,
            // title: 'Bike Routes Should Connect to Key Town Infrastructure',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "All participants in our listening session pointed out the importance of connecting to the Century Hills area. A third of the town, including many of its young residents, live in this area, but lack access to the downtown save by car and an infrequent bus.",
            location: {
                center: [-72.69061, 41.63732],
                zoom: 15.34,
                pitch: 18.84,
                bearing: 132,
                duration: 6000,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-west-arteries',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-west-arteries',
                    opacity: 0
                }

            ]
        },
        {
            id: 'Recommendations',
            alignment: 'center',
            hidden: false,
           // title: 'Bike Routes Should Connect to Key Town Infrastructure',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "Based off these interviews, we recommend the following areas be considered for bike lanes.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                }
               
            ]
        },
        
        {
            id: 'Brook Street',
            alignment: 'left',
            hidden: false,
            title: 'Guard and Reserve Memorial Bridge',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "One area highlighted by residents as in need of town attention was Cromwell avenue where it crosses the highway and connects to Brook street. This area lacks both bike infrastucture and sidewalks, making it dangerous. At the same time, the street is a critical passway connecting 6,000 people in the Century Hills neighborhood to the east end of town.",
            location: {
                center: [-72.67737, 41.64255],
                zoom: 16.53,
                pitch: 56.00,
                bearing: 36.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [              
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Brook Street 2',
            alignment: 'right',
            hidden: true,
            title: 'Brook Street',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "<iframe width='400' height='275' src='https://www.youtube.com/embed/NUBukNqYlnQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> Luis Moreira describes how the interaction might be improved.",
            location: {
                center: [-72.67675, 41.64158],
                zoom: 18.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Brook Street 3',
            alignment: 'right',
            hidden: false,
            title: 'Brook Street',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "<iframe width='400' height='275' src='https://www.youtube.com/embed/NUBukNqYlnQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> Luis Moreira describes how the interaction might be improved.",
            location: {
                center: [-72.66859, 41.64446],
                zoom: 14.44,
                pitch: 56.13,
                bearing: 72.80,
                duration: 60000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Brook Street-4',
            alignment: 'left',
            hidden: false,
            title: 'Brook Street',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "For a west-east artery, Brooks Street connects a population center in Century Hills to the east end of town and multiple parks.",
            location: {
                center: [-72.65930, 41.64126],
                zoom: 14.35,
                pitch: 0,
                bearing: -8.80,
                duration: 6000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'Bikeway',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1

                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                },

            ]
        },
        {
            id: 'East Side',
            alignment: 'left',
            hidden: false,
            title: 'East Side',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "Finally, we believe a road connecting the east-west artery to parks, the town campus, and the school would be most useful. A path winding through Old Forge Road, Dividend Road, Pratt Street, Riverside, and Parsonage street would meet that goal.",
            location: {
                center: [-72.64482, 41.65113],
                zoom: 14.48,
                pitch: 52.84,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-east-west-arteries',
                    opacity: 0              
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                }

                
            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                }
            ]
        },

        {
            id: 'Summary',
            alignment: 'right',
            hidden: false,
            caption: '',
            title: 'Summary',
            description: "While it is important to link the entire town with bike route, the identified streets would be a good step toward linking the eastern and western parts of town, and allowing people in a high-density neighborhood to access town infrastructure, including parks, the town campus, and schools.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: .9
                },
                {
                    layer: 'priority-route',
                    opacity: 1
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: .9
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 1
                },


            ],
            onChapterExit: [
                {
                    layer: 'rocky-hill-parks',
                    opacity: 0
                },
                {
                    layer: 'priority-route',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-schools',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-town-campus',
                    opacity: 0
                },
                {
                    layer: 'rocky-hill-groceries-',
                    opacity: 0
                },
            ]
        },

        {
            id: 'key locations + original',
            alignment: 'left',
            hidden: false,
            title: 'A good first step',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "We believe all of the roads presented by the town should have bike lanes. Many of these lanes are important arteries connecting to town locations.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 13,
                pitch: 0,
                bearing: 0,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 0
                }
                
            ]
        },
        {
            id: 'Rocky Hill Bike Way',
            alignment: 'left',
            hidden: false,
            title: 'Further connections',
            // image: 'images/streetpoint.png',
            caption: '',
            description: "However, feedback from residents also suggested that additional infrastructure was needed. In the long term, we believe a web of bike lines roads should connect all the town. We have proposed a long term plan called the <a href="https://www.google.com/maps/d/u/0/viewer?mid=1F28TEuvdAk-rDRs7PFudtHMzlYSSR5-x&ll=41.66105554034413%2C-72.6553339&z=13">Rocky Hill Bike Way</a>.",
            location: {
                center: [-72.66415, 41.65905],
                zoom: 12.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Bikeway',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Bikeway',
                    opacity: 0
                }
            ]
        },
    ]
};
