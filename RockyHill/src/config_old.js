var config = {
    style: 'mapbox://styles/derekcaelintm/cl95y3x24004d15s1eolj5aah',
    accessToken: 'pk.eyJ1IjoiZGVyZWtjYWVsaW50bSIsImEiOiJja2dtcGp6ZTQwM3F3MnlwMTR1cHJya202In0.YeLrbEMIIvr3Ev0Nb4cs3A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: true,
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: false,
    title: "The Muddy Business of Adaptation",
    logo: '',
    //subtitle: 'History and Vision',
    byline: 'Conservation International',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: Damian Fernandes, with support from Derek Caelin.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'before',
            alignment: 'left',
            hidden: false,
            //title: 'Introduction',
            image: 'images/mudbanks_move.gif',
            //caption: 'An illustration of a stone barrier along an urban center, exposed to the ocean. Image by Amy West.',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Scroll down to begin the story.",
            location: {
                center: [-59.87144, 5.03799],
                zoom: 5.78,
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
                    layer: 'highlands-raster',
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
            id: 'before-2',
            alignment: 'center',
            hidden: false,
            //title: 'Introduction',
            image: 'images/Before.jpg',
            caption: 'An illustration of a stone barrier along an urban center, exposed to the ocean. Image by Amy West.',
            
            description: "For coastal cities in Guyana, the sea is a hostile force. As the waves batter our sea walls and flood our streets, we see that a changing world may damage our cities beyond repair. Some project that the city of Georgetown could be washed away by the 2030s.",
            location: {
                center: [-58.25171, 7.14767],
                zoom: 6.44,
                pitch: 30.5,
                bearing: -54.4,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
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
            id: 'after',
            alignment: 'center',
            hidden: false,
            //title: 'Introduction',
            image: 'images/After.jpg',
            caption: 'An illustration of an urban center where the road is protected by a barrier of mangroves. Birds are flying through the air. Image by Amy West.',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "But what if the same forces that are battering our cities can be used to help them grow?  What if we can find a harness nature to grow out into the ocean rather than just be trapped, defending and retreating? ",
            location: {
                center: [-58.25171, 7.14767],
                zoom: 7,
                pitch: 30.5,
                bearing: -54.4,
                duration: 20000
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                 {
                //     layer: 'layer-name',
                //     opacity: 1,
                 //    duration: 10000
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
            id: 'guyana-overview',
            alignment: 'left',
            hidden: false,
            //title: 'Introduction',
           // image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "In an ancient, and often forgotten, corner of South America lies Guyana, the 'land of many waters'. Boasting some of the oldest and youngest landscapes on the planet, nature is at the center of who we are as Guyanese. With the country's economy now emerging as one of the fastest growing in the world, Guyana is charting a new path towards to sustainable and climate resilient development. The coutry is extraordinarily well-positioned to demonstrate nature-based solutions in humanity’s race towards coastal climate adaptation. With over 250 million tons of Amazonian sediment passing off its Atlantic coast, we are designing blended “green” (mangroves) and “gray” (sea walls) solutions to protect, and grow, its coast. To understand how this approach would work in Guyana, we should take a broader look at the regional landscape. ",
            location: {
                center: [-60.98300, 5.74974],
                zoom: 6.05,
                pitch: 42.50,
                bearing: -29.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: false,
            mapInteractive: false,
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
            id: 'highlands1',
            alignment: 'left',
            hidden: false,
            //title: 'The Highlands',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Guyana sits on the 2 billion year old Guiana Sheild, the oldest mountain range in the western hemispehere. Known for its strange table top mountains, that sit above the clouds like islands in the sky, this landscape is home to isolated and unique species found nowehere else on the planet. The age and mystery of the landscape has inpired countless myths, books and movies like 'The Lost World' by Arthur Conan Doyle and Diney's 'Up'. To some of Guyana's indigenous people, thes mountains are spiritual places, steeped in stories of creation, life and water.",
            location: {
                center: [-59.55538, 6.33443],
                zoom: 6.48,
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
                {
                     layer: 'highlands-raster',
                     opacity: 1,
                     duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'highlands-raster',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'admin-0-boundary-disputed',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'admin-0-boundary',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'admin-1-boundary',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'admin-0-boundary-bg',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'admin-1-boundary-bg',
                    opacity: 0,
                    duration: 3000
                }
            ]
        },
        {
            id: 'rivers-1',
            alignment: 'left',
            hidden: false,
            //title: "Guyana's Rivers",
       
            description: "These rivers connect Guyana's ancient mountains to its coast; one of the planet's youngest landscapes still emerging from the Atlantic. These rivers transport sediment to our coast, where it is swept up into a natural land-forming phenomenon that we are ony now beginning to understand.",
            location: {
                center: [-59.55538, 6.33443],
                zoom: 6.48,
                pitch: 0,
                bearing:  0,
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
            id: 'rivers-2',
            alignment: 'left',
            hidden: false,
            //title: 'The Amazon',
            //image: 'images/guyana_highlands.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "The Amazon delivers over 1.1 billion tons of suspended sediment and 270 million tons of dissolved organic matter into the Atlantic Ocean every year. This enormous plume of mud, which can be seen from space, kickstarts a giant “earth-engine” that has powered the creation of Guyana’s coast for millions of years.",
            location: {
                center: [-62.79744, -3.18111],
                zoom: 4.95,
                pitch: 0,
                bearing: 0,
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
            id: 'mud2',
            alignment: 'center',
            hidden: false,
            //title: 'Seawalls',
            image: 'images/mudbanks_move.gif',
            //caption: 'Restored black mangrove forest, Guyana. Image credit, NAREI',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'NAREI',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "The flat land along the coast is made from the sediment washed into the ocean by Amazon that have been pushed up along the coast of South America. That's why the Dutch and the British grew their sugar cane here; because of the rich, fertile soil that has emerged from the Amazon. That's why they brought our ancestors to this place. ",
            location: {
                center: [-55.82815, 2.63535],
                zoom: 6,
                pitch: 0,
                bearing: 0,
                duration: 3000
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
            id: 'danzig-7',
            alignment: 'left',
            hidden: false,
            //title: 'Danzig Collapse',
            //image: '',
            //caption: 'S',
            //website: '',
           // author: '',
            //legend: '',
            description: "<video controls loop autoplay muted width='100%'><source src='movies/land-aggregation.mp4' type='video/mp4'></video><p>Even as coastlines around the world are disappearing due to erosion and sea level rise, we see land in French Guiana appear out of the ocean, pulled and helped out by mangroves.</p><p>The same phenomenon can be cultivated in Guyana.</p><p>We have the opportunity to put these practices into place. As our coastline erodes, it is vital to learn the lessons of regrowth and apply them.</p>",
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
