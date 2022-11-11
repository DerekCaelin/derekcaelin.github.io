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
            id: 'mangrove-coast',
            alignment: 'right',
            hidden: false,
            title: 'Mangroves',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "The flat land along the coast is made from the sediment washed into the ocean by Amazon that have been pushed up along the coast of South America. That's where the Dutch and the British grew their sugar cane here because of the rich, fertile soil that has emerged from the Amazon. That's why they brought our ancestors to this place, because of that coast there.<br><br><center><iframe width='350' height='200' src='https://www.youtube.com/embed/0dGNTktx-Pk?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></center></iframe>",
            location: {
                center: [-59.21041, 8.09175],
                zoom: 7.22,
                pitch: 47.00,
                bearing: -156.80
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
            description: "Georgetown is particularly beset by flooding due to the engineering decisions that we continue to make about our coastline<br><br></center><iframe width='350' height='200' src='https://www.youtube.com/embed/yuWAun1mJjM?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
            location: {
                center: [-58.14961, 6.80326],
                zoom: 11.98,
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
            id: 'danzig-1',
            alignment: 'left',
            hidden: false,
            title: 'Danzig Collapse',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "At Danzig Beach, you can see this process in action as the concrete dropped and the sea flodded in.<br><br></center><iframe width='350' height='200' src='https://www.youtube.com/embed/ojVULdJRiAs?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay = 'true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>",
            location: {
                center: [-57.86458, 6.65785],
                zoom: 15.05,
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
        }
        
        
    ]
};
