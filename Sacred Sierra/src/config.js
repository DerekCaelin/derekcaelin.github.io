


var config = {
   style: 'mapbox://styles/mapbox/satellite-v9',
   //style: 'mapbox://styles/derekcaelintm/cl750jezf000l14lozbesd9rn',
   // style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
   // style: 'mapbox://styles/mapbox/streets-v11',
    
    //mine
    accessToken: 'pk.eyJ1IjoiZGVyZWtjYWVsaW50bSIsImEiOiJja2dtcGp6ZTQwM3F3MnlwMTR1cHJya202In0.YeLrbEMIIvr3Ev0Nb4cs3A',
    
    //helper's
    //accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',

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
    bookmarks: true,
    chapterReturn: true,
    title: "Indigenous Women's Fellowship ",
    logo: '',
    subtitle: 'Our Future Forests-Amazonia Verde',
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
            description: 'The Amazon rainforest is one of the main carbon sinks in the world, it is also home to the richest biodiversity of all the ecosystems on the planet, however, it is in crisis. Man-made fires are bringing the Amazon to a crisis point that will ahve irreversible consequences for people, wildlife and the planet. ',
            location: {
                center: [-60.72327,  -7.61420],
                zoom: 3.37,
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
            id: 'Mission',
            alignment: 'center',
            hidden: false,
           // title: 'Montage',
           // image: 'images/long-banner.png',
           // caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
           description: 'Our Future Forests-Amazonia Verde is working with Indigenous Peoples and Local Communities to advance investments and incentives that will conserve up to 12 percent of the Amazon - about 73 million hectares (180 million acres) - by 2025.',
           location: {
                center: [-60.72327,  -7.61420],
                zoom: 3.37,
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
            id: 'photo montage',
            alignment: 'center',
            hidden: false,
            //title: 'Montage',
            image: 'images/long-banner.png',
            caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            //description: 'Our Future Forests-Amazonia Verde is working with Indigenous Peoples and Local Communities to advance investments and incentives that will conserve up to 12 percent of the Amazon - about 73 million hectares (180 million acres) - by 2025.',
            location: {
                center: [-60.72327,  -7.61420],
                zoom: 3.37,
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
            id: 'sacred-sierra',
            alignment: 'left',
            hidden: false,
            title: 'Sacred Sierra',
            //image: 'images/immaculata-casimero.png',
            //caption: 'Photo Credits: "Kanuku Mountains"/"Mangroves"/"Giant Amazon Water Lily"/"Forest and Savannah Grassland" - ©Pete Oxford/iLCP; "Konashen Women" - ©Piotr Naskrecki; "Giant Otter" - ©Conservation International/photo by John Martin; "Scarlet Macaw" © Conservation International/photo by Haroldo Castro',
            description: '<p style="font-size:18px;">"Working with my people over the years has made me aware of the concerns, issues, and struggles of my people, especially as it relates to mining activities that are being carried on our traditional lands which is causing devastating impacts on the environment and contributing to climate change, social and health issues." </p> <img src="images/immaculata-casimero.png"><p> "I am Immaculata Casimero, 38 years of age, an indigenous woman, who belongs to the Wapichan nation in Aishalton (Aishara Toon) village Guyana. Presently, I am employed as the communications officer with the South Rupununi District Council (SRDC), a local Indigenous Organisation that represents 21 communities within the Wapichan territory. Besides my job; I hold the positions as chairperson of the Aishara Toon Women&apos;s Association (AWA), a community based organization which is comprised of 15 women in the Wapichan village of Aishalton; and the Aishalton Primary School feeding programme which provides hot meals on a daily basis to over 177 students.</p> </p>My journey as a village leader began in 2015 when I was elected as a village councillor where I served in the capacity as Secretary of the Aishalton Village Council for 3 years.</p> <p> In January of 2020, I helped to organize the first Rupununi Indigenous Women’s Conference which brought together over eighty women to discuss and focus on gender, leadership, environmental issues, and empowerment. I am also a co-founder of Wapichan Women’s Movement (WWM) which is the women’s arm of the South Rupununi District Council. The Wapichan Women’s Movement aims toward improving women&apos;s livelihood through collective action, entrepreneurship and empowerment."</p>',
            location: {
                center: [-73.65023,  10.78513],
                zoom: 11.07,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
           // use3dTerrain: true, //set true for enabling 3D maps.
            rotateAnimation: true,
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

