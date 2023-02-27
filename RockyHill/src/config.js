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
                    layer: 'landuse',
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
            //caption: 'An illustration of a stone barrier along an urban center, exposed to the ocean. Image by Amy West.',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
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
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "We brought the plans to various citizen groups for their feedback. First, we spoke to representatives from Walk-Bike Rocky Hill, who submitted a proposal for a bike lanes to the town in 2020.",
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
            //image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Finally, we came to the teen council and asked for feedback from our town’s young people. ",
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
            title: 'Connect the town',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Participants agreed that the critical function of biking infrastructure (and sidewalks) is to make it possible for bicyclists to navigate from their homes to important facilities: town buildings, religious buildings, parks, and grocery stores.",
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
                    layer: 'landuse',
                    opacity: .75
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
            id: 'key locations + original',
            alignment: 'left',
            hidden: false,
            title: 'A good first step',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "We believe all of the roads presented by the town should have bike lanes. Many of these lanes are important arteries connecting to town locations.",
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
                    layer: 'landuse',
                    opacity: .75
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
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
            id: 'However',
            alignment: 'left',
            hidden: false,
            title: 'Further connections',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "However, feedback from residents also suggested that additional infrastructure was needed. Here is the full list of roads identified by residents as important for bike lanes..",
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
                    layer: 'landuse',
                    opacity: .75
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
                    opacity: 1
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
            id: 'Brook Street',
            alignment: 'left',
            hidden: false,
            title: 'Brook Street',
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
                    layer: 'landuse',
                    opacity: .75
                },
                {
                    layer: 'possibleBikeFacilities',
                    opacity: 1
                },
                {
                    layer: 'Bikeway',
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
            id: 'Brook Street 2',
            alignment: 'right',
            hidden: true,
            title: 'Brook Street',
            // image: 'images/streetpoint.png',
            caption: '',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
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
                    layer: 'landuse',
                    opacity: .75
                },
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
                {
                    layer: 'feedback1',
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
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "<iframe width='400' height='275' src='https://www.youtube.com/embed/NUBukNqYlnQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> Luis Moreira describes how the interaction might be improved.",
            location: {
                center: [-72.67768, 41.64465],
                zoom: 18.94,
                pitch: 0,
                bearing: 0,
                duration: 60000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'landuse',
                    opacity: .75
                },
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
                {
                    layer: 'feedback1',
                    opacity: 0
                }
            ]
        }
    ]
};
