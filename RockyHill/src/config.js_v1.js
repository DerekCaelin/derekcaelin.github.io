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
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            //image: 'images/overview-map.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: "filler text: if we don't kind of take a step back and understand what else is going on in the landscape, so sometimes even kind of show the boundaries, allow them to get a sense of place, and then remove them and start to talk about what the landscape really is.",
            location: {
                center: [-58.82264, 4.09495],
                zoom: 5.66,
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
            id: 'deforestation-choice',
            alignment: 'right',
            hidden: false,
            title: 'Deforestation is a choice.',
           // image: 'images/long-banner.png',
           // caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
           description: "We look at Brzail to see a choice for Guyana. In Brazil, you can kind of see this herringbone pattern of deforestation. For us over here, but it's dark green forest. Which is the path we want to choose?",
           location: {
                center: [-59.34351, 1.45006],
                zoom: 6.49,
                pitch: 0,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bartica',
            alignment: 'right',
            hidden: false,
            title: 'Bartica',
            //image: 'images/long-banner.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "Most people in Ghana don't really know about the story of this river, but they know about a small town here called Bartica. This is where that river finally hits. It's all the tributaries come in from the Guyana side of the story.",
            location: {
                center: [-58.65802, 6.37643],
                zoom: 12.06,
                pitch: 41.50,
                bearing: -96.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pollution',
            alignment: 'left',
            hidden: false,
            title: 'Mining',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "But as you can see, the color change happened a long time before it hit. So like, you have this right on the border, this again on the border. But both kind of signal in a warning as this is in your future if you don't get it right. Conversely, you have the opportunity to apply this by making different choices. So like the deforestation agriculture story in Brazil, and the large scale kind of irresponsible mining in the Venezuelan part of this story.",
            location: {
                center: [-61.77681, 6.42177],
                zoom: 13.71,
                pitch: 39.53,
                bearing: 26.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'brazil',
            alignment: 'left',
            hidden: false,
            title: 'Savanah and fragmented forest',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "In Brazil, they moving from the savanna and kind of breaking, fragmenting forests, creating these open spaces. So the forest gaps in between are shrinking, because every year there's a fire. It just eats away at the edges, and eventually, the green disappears and the system flips.",
            location: {
                center: [-61.24512,  2.78822],
                zoom: 11.08,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'brazil-2',
            alignment: 'left',
            hidden: false,
            //title: 'Savanah and fragmented forest',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "It's looking much less like a forested landscape than, say, a savanna landscape.",
            location: {
                center: [-60.99273,  2.73031],
                zoom: 10.10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice',
            alignment: 'right',
            hidden: false,
            title: 'Rice',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "So, this let me show you the Brazil side. So you see this is This is rice happening on the Brazilian side, and this is the Guyana side. So this is this is what natural savannas look like tropical savannas. And this is Brazil trying to cultivate them with with like fertilizers and stuff. Now they're able to do it only on these areas, these low areas closer to the river is on a kind of a slope downwards from this space.",
            location: {
                center: [-59.53744,  3.600449],
                zoom: 10.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice-2',
            alignment: 'right',
            hidden: false,
            //title: 'Rice 2',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "In Guyana, we always looked at Brazil and so that they could grow rice in there and Sivanna that we should do. But there's one problem, like it doesn't make sense unless it's heavily subsidized by the agricultural industry.",
            location: {
                center: [-59.68925, 3.70693],
                zoom: 13.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice-3',
            alignment: 'right',
            hidden: false,
            //title: 'Rice 2',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "On Ghana side of things, ut is natural tropical savanah. Here we see the watersheds come quite close to each other, and flow in different directions. That is occurrs all over this landscape. So water flows in one part to Brazil to the left, and right to Ghana.",
            location: {
                center: [-59.42566, 3.71049],
                zoom: 11.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rice 4',
            alignment: 'right',
            hidden: false,
            //title: 'Caroline Jacbos',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "So trying to grow rice, the way Brazil is doing it in this space is kind of a biological bomb. So we look across we see Brazil is doing it, but we fail to recognize this floods is slow. And if we put any fertilizer, it's just going to liquefy onto the landscape and cause more problems.",
            location: {
                center: [-59.51788,  3.68975],
                zoom: 10.76,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
