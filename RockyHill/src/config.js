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
        },
        {
            id: 'mangrove-coast2',
            alignment: 'right',
            hidden: false,
            //title: 'Mangroves',
            //image: 'movies/mangroves-stopping-waves.mp4',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "<video controls loop autoplay muted width='100%'><source src='movies/mangroves-stopping-waves.mp4' type='video/mp4'></video> <p>Along our coastline, Mangroves protect the inland by reducing the force of the ocean waves pounding against the shore.</p>",
            location: {
                center: [-52.22495, 4.84870],
                zoom: 11.74,
                pitch: 0.00,
                bearing: 0.00,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
       /* {
            id: 'mud1',
            alignment: 'right',
            hidden: false,
            //title: 'Seawalls',
            //image: 'images/restoredforest.jpg',
            //caption: 'Restored black mangrove forest, Guyana. Image credit, NAREI',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'NAREI',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Imagine yourself relaxing somewhere along the 280 miles of Guyana’s seawalls. Many of us choose to face inwards, away from the muddy water that, at first glance, seems dirty. But this water holds a fascinating secret, one that has shaped our past and may now hold the key to a prosperous future on this coast.",
            location: {
                center: [-57.99961, 6.78160],
                zoom: 16.13,
                pitch: 0,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
       */
        
        {
            id: 'mangrove-coast',
            alignment: 'right',
            hidden: false,
            description: "<p>Mangroves and other salt-loving vegetation play a vital role in retaining this sediment and building out soil. They grow out onto these exposed mudflats, expanding farther into the ocean. This is how Guyana’s Low Coastal Plain was formed and why Guyana’s most fertile soils are found here.</p><center><iframe width='100%' height='200' src='https://www.youtube.com/embed/0dGNTktx-Pk?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></center></iframe>",
            location: {
                center: [-59.43067, 8.21821],
                zoom: 14.544,
                pitch: 15.5,
                bearing: -148.00,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
    
        {
            id: 'colonial-legacy',
            alignment: 'left',
            hidden: false,
            //title: 'Colonial Legacy',
            //image: 'images/old-map.jpg',
            //caption: 'Source image caption',
            //website: '',
           // author: '',
            //legend: '',
            description: "In Guyana, however, our unique colonial history resulted in the reshaping of the coast. Large-scale construction of sea walls and dams directly along the coast, forever changing the behaviour of coastal currents and interrupting this natural earth engine.",
            location: {
                center: [-58.28516, 6.75542],
                zoom: 8.94,
                pitch: 14.78,
                bearing: -134.79
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'old-map',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [
                {
                     layer: 'old-map',
                     opacity: 0,
                     duration: 3000
                }
            ]
        },


        {
            id: 'concrete',
            alignment: 'left',
            hidden: false,
            //title: 'Concrete',
            image: '',
            //caption: 'Source image caption',
            //website: '',
           // author: '',
            //legend: '',
            description:"<video controls loop autoplay muted width='100%'><source src='movies/concrete.mp4' type='video/mp4'></source></video><p>Hard coastal structures such as concrete seawalls cause wave energy to be reflected, creating more turbulence and much higher wave heights along these human-engineered shores, and ultimately making it difficult for mudflats to form and remain.</p>",
            location: {
                center: [-58.21107, 6.82913],
                zoom: 15.97,
                pitch: 0,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'modern-troubles',
            alignment: 'left',
            hidden: false,
            //title: '',
            //image: '',
            //caption: '',
            //website: '',
           // author: '',
            //legend: '',
            description: "These same locations are where mangroves are missing today, and erosion troubles the coast. ",
            location: {
                center: [-58.21107, 6.82913],
                zoom: 15.97,
                pitch: 0,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'different-methods',
            alignment: 'center',
            hidden: false,
            //title: '',
            //image: '',
            //caption: '',
            //website: '',
           // author: '',
            //legend: '',
            description: "<image src='images/wave-dampen.png' alt='mangrove trees dramatically reduce the amplitude of waves.' width='100%'><p>By removing the mangroves and replacing them with concrete structures, the colonial powers set in motion the story of coastal erosion we see playing out today.</p><image src='images/wave-reflection.png' alt='concrete barriers increase the strength of waves and eroding forces.' width='100%'> ",
            location: {
                center: [-58.21107, 6.82913],
                zoom: 16.5,
                pitch: 0,
                duration: 20000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'Georgetown',
            alignment: 'left',
            hidden: false,
            //title: 'Georgetown',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "<p>Georgetown is particularly beset by flooding due to the engineering decisions that we continue to make about our coastline.</p><iframe width='100%' height='200' src='https://www.youtube.com/embed/yuWAun1mJjM?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
            location: {
                center: [-58.14961, 6.80326],
                zoom: 11.98,
                pitch: 0,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'danzig-1',
            alignment: 'left',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "<video controls loop autoplay muted width='100%'><source src='movies/danzig-timelapse.mp4' type='video/mp4' ></video><p>The biggest breaches, however, have occured between the villages of Danzig and Fairfield. With the unexpected loss of a very thin strip of mangroves, the colonial era seawall was battered by high tides, eventually failing. Without the wall, and long devoid of mangroves, notihng could stop the ocean from sweeping across the coastal plain.</p>",
            location: {
                center: [-57.86458, 6.65785],
                zoom: 15.05,
                pitch: 0,
                speed: 0.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

       /* {
            id: 'danzig-4',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "<p>Deep erosion in one spot along the former seawall forced the new sea defence to be built slightly inland, accidentally setting the stage for a demonstration of the power the mangrove-powered earth engine.</p><p>The results were devestating.</p><br><iframe width='100%'  height='300' src='https://www.youtube.com/embed/ojVULdJRiAs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
            location: {
                center: [-57.83390, 6.63358],
                zoom: 14.41,
                pitch: 67.50,
                bearing: -62.40,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
*/
        {
            id: 'danzig-2',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "<p>Millions of dollars were lost in damage to land and livelihoods.</p><iframe width='100%' height='300' src='https://www.youtube.com/embed/FWlSXmXRVzg'  title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
            location: {
                center: [-57.84776, 6.64562],
                zoom: 14.41,
                pitch: 67.50,
                bearing: -62.40,
                duration: 30000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'danzig-3',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "<p>After multiple attempts and huge investments, the breach was sealed using traditional 'grey' engineeering, involving stone and concrete structures.</p><video controls loop autoplay muted width='100%'><source src='movies/danzig-wall.mp4' type='video/mp4' ></video>",
            location: {
                center: [-57.86075, 6.65932],
                zoom: 14.41,
                pitch: 64.50,
                bearing: 45.60,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
       

        {
            id: 'danzig-5',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "The erosion at Danzig that led to the breach was, in fact, the herald of an approaching submerged mudbank, and an opportunity to not just defend the coast, but to pull new land from the sea.",
            location: {
                center: [-57.86075, 6.65932],
                zoom: 14.41,
                pitch: 64.50,
                bearing: 45.60,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'danzig-6',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "We can restart the powerful earth engine that made our coast in the first place, putting nature to work as we build a resilient future. By combining traditional “grey” sea defences (concrete walls, sea dams, jetties, etc.) with “green” nature-based approaches (mud, mangroves, saltmarshes, etc.), Guyana can once again gain the advantage in its battle with the sea. We can go beyond simply defending our lands and families from the ocean and begin to extend outwards.</center>",
            location: {
                center: [-57.86075, 6.65932],
                zoom: 15,
                pitch: 64.50,
                bearing: 45.60,
                duration: 20000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'solutions-1',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            image: 'images/engineering-guidelines-1.jpg',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "At Danzig, and other places affected by this issue, we can bring back the Mangroves as a barrier protecting the inland.",
            location: {
                center: [-57.85330, 6.65887],
                zoom: 13.21,
                pitch: 32.43,
                bearing: -176.80,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        {
            id: 'solutions-2',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            image: 'images/engineering-guidelines-2.bmp',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "In the early days, the Mangroves will need to be protected by engineering solutions, such as bamboo fences",
            location: {
                center: [-57.85330, 6.65887],
                zoom: 13.21,
                pitch: 32.43,
                bearing: -176.80,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        /*
        {
            id: 'solutions-3',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            image: 'images/engineering-guildelines-3.bmp',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "This solution can be extended along the coast to urban centers like Georgetown. ",
            location: {
                center: [-58.12561, 6.82825],
                zoom: 13.21,
                pitch: 32.43,
                bearing: -176.80,
                duration: 10000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'solutions-4',
            alignment: 'left',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: 'images/georgetown-mud.PNG',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "Over time, we can build onto the developing mudbanks to further protect our homes.",
            location: {
                center: [-58.08485, 6.82006],
                zoom: 12.86,
                pitch: 0,
                bearing: 4.8,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'georgetown-mud',
                     opacity: 1,
                     duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'georgetown-mud',
                    opacity: 0,
                    duration: 3000
               }
            ]
        },*/
        {
            id: 'finish',
            alignment: 'center',
            hidden: false,
            //title: 'Danzig Collapse',
            image: 'images/After.jpg',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "The way in front of us is clear, if we want to leave behind the practices of our colonial past and adopt solutions that are fitted to this land that we love.",
            location: {
                center: [-59.16827, 7.30921],
                zoom: 7.05,
                pitch: 47.00,
                bearing: 137.60,
                duration: 30000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
