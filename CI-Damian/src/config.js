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
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: "Guyana Storymap",
    logo: '',
    subtitle: 'Stories of Guyana',
    byline: 'Conservation International',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'guyana-overview',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "In an ancient, and often forgotten, corner of South America lies Guyana, the 'land of many waters'. Boasting some of the oldest and youngest landscapes on the planet, nature is at the center of who we are as Guyanese. With the country's economy now emmerging as one of the fastest growing in the world, Guyana is charting a new path towards to sustainable and climate resilient development. The coutry is extraordinarily well-positioned to demonstrate nature-based solutions in humanity’s race towards coastal climate adaptation. With over 250 million tons of Amazonian sediment passing off its Atlantic coast, we are designing blended “green” (mangroves) and “gray” (sea walls) solutions to protect, and grow, its coast. To understand how this approach would work in Guyana, we should take a broader look at the regional landscape. ",
            location: {
                center: [-58, 4.25187],
                zoom: 6,
                pitch: 0,
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
            id: 'highlands1',
            alignment: 'left',
            hidden: false,
            title: 'The Highlands',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Guyana sits on the 2 billion year old Guiana Sheild, the oldest mountain range in the western hemispehere. Known for its strange table top mountains, that sit above the clouds like islands in the sky, this landscape is home to isolated and unique species found nowehere else on the planet. The age and mystery of the landscape has inpired countless myths, books and movies like 'The Lost World' by Arthur Conan Doyle and Diney's 'Up'. To some of Guyana's inidgenous people, thes mountains are spiritual places, steeped in stories of creation, life and water.",
            location: {
                center: [-59.55538, 6.33443],
                zoom: 6.48,
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
            id: 'highlands2',
            alignment: 'full',
            hidden: false,
            title: 'The Highlands',
            image: 'images/guyana_highlands.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "These are the 2-billion-year-old highlands are still growing, forming some of the most dramatic terrThese rivers connect Guyana's ancient mountains to its coast; one of the planet's youngest landscapes still emerging from the Atlantic. These rivers transport sediment to our coast, where it is swept up into a natural land-forming phenomenon that we are ony now beginning to understand. The Amazon delivers over 1.1 billion tons of suspended sediment and 270 million tons of dissolved organic matter into the Atlantic Ocean every year. This enormous plume of mud, which can be seen from space, kickstarts a giant 'earth-engine' that has powered the creation of Guyana’s coast for millions of years.ain in all of Guyana. There's a lot of stories to tell on this landscape that connect much bigger geological moments in time.",
            location: {
                center: [-59.91014, 6.91520],
                zoom: 7.43,
                pitch: 64.00,
                speed: 0.5,
                bearing:  -99.20
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
            id: 'mud1',
            alignment: 'right',
            hidden: false,
            //title: 'Seawalls',
            image: 'images/restoredforest.jpg',
            caption: 'Restored black mangrove forest, Guyana. Image credit, NAREI',
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
            description: "The flat land along the coast is made from the sediment washed into the ocean by Amazon that have been pushed up along the coast of South America. That's where the Dutch and the British grew their sugar cane here because of the rich, fertile soil that has emerged from the Amazon. That's why they brought our ancestors to this place, because of that coast there. ",
            location: {
                center: [-55.82815, 2.63535],
                zoom: 6,
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
            id: 'mangrove-coast',
            alignment: 'right',
            hidden: false,
            title: 'Mangroves',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Mangroves and other salt-loving vegetation play a vital role in retaining this sediment and building out soil. They grow out onto these exposed mudflats, expanding farther into the ocean. This is how Guyana’s Low Coastal Plain was formed and why Guyana’s most fertile soils are found here.<br><br><center><iframe width='100%' height='200' src='https://www.youtube.com/embed/0dGNTktx-Pk?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></center></iframe>",
            location: {
                center: [-60.11765, 8.60239],
                zoom: 16.11,
                pitch: 0,
                speed: 0.2,
                bearing: -168.60
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
            alignment: 'right',
            hidden: false,
            title: 'Colonial Legacy',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "In Guyana, however, our unique colonial history resulted in the large-scale construction of sea walls and dams directly along the coast, forever changing the behaviour of coastal currents and interrupting this natural earth engine.",
            location: {
                center: [-58.51004, 7.35951],
                zoom: 14.15,
                pitch: 0,
                speed: 0.5,
                bearing: -168.60
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
            id: 'concrete',
            alignment: 'left',
            hidden: false,
            title: 'Concrete',
            image: 'images/concrete.gif',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Hard coastal structures such as concrete seawalls cause wave energy to be reflected, creating more turbulence and much higher wave heights along these human-engineered shores, and ultimately making it difficult for mudflats to form and remain.",
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
            //title: 'Concrete',
            //image: 'images/concrete.gif',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
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
            id: 'Georgetown',
            alignment: 'left',
            hidden: false,
            title: 'Georgetown',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "Georgetown is particularly beset by flooding due to the engineering decisions that we continue to make about our coastline<br><br></center><iframe width='100%' height='200' src='https://www.youtube.com/embed/yuWAun1mJjM?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
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
            title: 'Danzig Collapse',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "At Danzig Beach, you can see this process in action as the concrete dropped and the sea flodded in.<br><br></center><iframe width='100%' height='200' src='https://www.youtube.com/embed/ojVULdJRiAs?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
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
        }
        
        
    ]
};
