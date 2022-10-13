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
            description: "filler text: if we don't kind of take a step back and understand what else is going on in the landscape, so sometimes even kind of show the boundaries, allow them to get a sense of place, and then remove them and start to talk about why the landscape really is or what the other interesting part about this particular view is that this deforestation is happening in Brazil",
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
           description: "in Brazil, you can kind of see this herringbone pattern that kind of really stands out as a choice for us over here, but it's kind of dark green. And for Guyana, is this the path we want to choose?",
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
            id: 'immaculata-iwf',
            alignment: 'left',
            hidden: false,
            //title: 'IWF Project',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: "IWF Project: Through this programme I would like to continue advocating for protection of the main headwaters of the South Rupununi, because of the ecosystems, habitats, important sites and culturally sensitive areas are located within the area. I plan to hold workshops and raise awareness on environmental laws, so that indigenous women can increase their knowledge about the importance of the environment and protecting the headwaters of South Rupununi. ",
            location: {
                center: [-59.33160,  2.47234],
                zoom: 14.44,
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
            id: 'caroline-jacobs',
            alignment: 'left',
            hidden: false,
            title: 'Caroline Jacbos',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: '<p style="font-size:18px;">"My life long goal is to uphold and maintain the traditional knowledge and culture of my people that has contributed to the conservation and preservation of our intact ecosystems for the wellbeing of our people." </p> <img src="images/caroline-jacobs.png"><p> My Name is Caroline Jacobs, a Makushi woman born in Surama Village, North Rupununi, Region # 9, Guyana.</p> <p>Growing up in the remote village of Surama I have witnessed and experienced the struggles of my fellow indigenous women in making their voices heard during the decision making process of our community development. Being cognizance of the fact that our women folks have a massive amount of knowledge regarding the social and environmental wellbeing of our community I stand strong to represent and help them. My aspiration is to become an Indigenous Woman Advocate who can act as a representative for the unheard voices of the community."</p>',
            location: {
                center: [-59.21541,  3.99821],
                zoom: 10.11,
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
            id: 'caroline-iwf',
            alignment: 'left',
            hidden: false,
            //title: 'Caroline Jacbos',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: 'IWF project: This project aims to document and record the traditional leadership knowledge of our council of elders within four geographic communities focusing on the women. The main idea is to document traditional knowledge on how the core values of people were applied and implemented years ago and how this influenced them to maintain a healthy environment up to today. The Surama Women’s Organic Garden will be used to cultivate and share the knowledge of medicinal herbs. The vital lessons  learnt from the elders will be shared with the youths and with other groups for replication where necessary. ',
            location: {
                center: [-59.07930,  4.12659],
                zoom: 14.44,
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
