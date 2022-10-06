


var config = {
   //style: 'mapbox://styles/mapbox/satellite-v9',
   //style: 'mapbox://styles/derekcaelintm/cl750jezf000l14lozbesd9rn',
   style: 'mapbox://styles/derekcaelintm/cl76ixj59001m14o52vab3xvr',
   // style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
   // style: 'mapbox://styles/mapbox/streets-v11',
    
    //mine
    accessToken: 'pk.eyJ1IjoiZGVyZWtjYWVsaW50bSIsImEiOiJja2dtcGp6ZTQwM3F3MnlwMTR1cHJya202In0.YeLrbEMIIvr3Ev0Nb4cs3A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe', //(projection must be "globe" for )
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: false,
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    spinGlobe: true,
    bookmarks: true,
    chapterReturn: true,
    //title: "Sacred Sierra",
    //logo: 'images/logo.png',
    //subtitle: 'Protecting the Heart of the World',
    //byline: 'ANEI',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'first',
            alignment: 'left',
            hidden: false,
            //title: 'Sacred Sierra: Protecting the Heart of the World',
            //image: 'images/cosmovision.jpeg',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: '<h1>Sacred Sierra:<br> Protecting the Heart of the world</h1><br><img src="images/cosmovision.jpeg"</img><p>Desde el principio del universo todos los seres que habitamos en este planeta tenemos la misión en que las culturas tenemos que vivir en armonía, paz y equilibrio con la naturaleza con el fin de lograr un bienestar general. Cosmovisión Arhuaca ANEI guarda nuestros principios culturales, dejados a nosotros los hermanos mayores por nuestros padres Kaku Serankwa y Arwawiku desde el inicio cuando todo era pensamiento, hoy todos estos principios son nuestra Ley de Origen. Que significa armonizar nuestras energías con todos los elementos de nuestra madre tierra Seynekun, quien representa lo femenino, la fertilidad de la cual tomamos los fluidos para equilibrarnos haciendo nuestros rituales que conectan con lo material y lo espiritual el mundo visible e invisible y ese camino es el que representa la unión de todos los seres vivos hacia el camino de la verdad Tanuriwun para trascender cumpliendo con nuestro Kunsamu hasta después de la muerte.</p><p>Nuestra cosmovisión como comunidades indígenas es ser guardianes del universo y velar por su protección.</p>',
            location: {
                center: [-73.44454,   8.03112],
                zoom: 2.31,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: true,
            mapInteractive: true,
           // callback: 'browseMap',
            onChapterEnter: [
                {
                    layer: 'anei-locations',
                    opacity: 0
                 },
                 {
                    layer: 'ari',
                    opacity: 0
                 },
                 {
                    layer: 'anei-cienaga',
                    opacity: 0
                 },
                 {
                    layer: 'linea-negra-provectada',
                    opacity: 0
                 },
                 {
                    layer: 'parques-naturales',
                    opacity: 0
                 },
                 {
                    layer: 'rios',
                    opacity: 0
                 },
                 
                     {
                        layer: 'drenaje-doble',
                       opacity: 0,
                       
                     }
            ],
            onChapterExit: [
                {
                   
                }
            ]
        },
        {
            id: 'slide1',
            alignment: 'full',
            hidden: false,
            title: 'Heart of the World',
            image: 'images/slide1.jpg',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            //description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.<br><iframe width="100%" height="315" src="https://www.youtube.com/embed/IhYYBcc2lEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-73.54431,  10.32452],
                zoom: 9.39,
                pitch: 58.00,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                   
                 }
            ],
            onChapterExit: [
                {
                   
                }
            ]
        },
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Heart of the World',
            image: 'images/woman1.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.<br><iframe width="100%" height="315" src="https://www.youtube.com/embed/IhYYBcc2lEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-73.54431,  10.32452],
                zoom: 9.39,
                pitch: 58.00,
                bearing: 0,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            spinGlobe: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                {
                   
                 }
            ],
            onChapterExit: [
                {
                   
                }
            ]
        },
        {
            id: 'resguardo-indigena',
            alignment: 'right',
            hidden: false,
            title: 'Resguardo Indigena',
            //image: 'images/woman1.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.<br><iframe width="100%" height="315" src="https://www.youtube.com/embed/IhYYBcc2lEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-72.96832, 10.23731],
                zoom: 8.47,
                pitch: 45.00,
                bearing: -11.20,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                
                    {
                        layer: 'ari',
                       opacity: 1,
                       
                     }
                 
            ],
            onChapterExit: [
                
                    {
                        layer: 'ari',
                       opacity: 0
                     }
                
            ]
        },
        {
            id: 'rios',
            alignment: 'left',
            hidden: false,
            title: 'Rios',
            //image: 'images/woman1.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.',
            location: {
                center: [-73.57919, 10.24514],
                zoom: 8.59,
                pitch: 34.06,
                bearing: 34.44,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                
                    {
                        layer: 'rios',
                       opacity: 1,
                       
                     },
                     {
                        layer: 'drenaje-doble',
                       opacity: 1,
                       
                     }
                 
            ],
            onChapterExit: [
                
                    {
                        layer: 'rios',
                       opacity: 0
                     }
                     ,
                     {
                        layer: 'drenaje-doble',
                       opacity: 0,
                       
                     }
                
            ]
        }, 
        {
            id: 'linea-negra-provectada',
            alignment: 'left',
            hidden: false,
            title: 'Linea Negra Provectada',
            //image: 'images/woman1.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.',
            location: {
                center: [-73.83273, 11.16352],
                zoom: 8.55,
                pitch: 54,
                bearing: 138.40,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                
                    {
                        layer: 'linea-negra-provectada',
                        opacity: 1,
                       
                     }
                 
            ],
            onChapterExit: [
                
                    {
                        layer: 'linea-negra-provectada',
                       opacity: 0
                     }
                
            ]
        }, 
        {
            id: 'parques-naturales',
            alignment: 'left',
            hidden: false,
            title: 'Parques Naturales',
            //image: 'images/woman1.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
           // author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'The Sierra Nevada de Santa Maria is home to more than 50.000 inhabitants among four indigenous communities, direct descendants of the ancient Tayrona culture. This landscapes is a place of worship - no less worthy of veneration than a temple, church, or mosque. As guardians of the earth, they believe it is their duty to protect natural resources and show an ecological alternative to industrialized societies. To the indigenous communities of this Sierra, this landscape is the literal, beating heart of the world.',
            location: {
                center: [-73.79043, 10.98062],
                zoom: 8.8,
                pitch: 0,
                bearing: 0,
                speed: 0.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                
                    {
                        layer: 'parques-naturales',
                       opacity: 1,
                       
                     }
                 
            ],
            onChapterExit: [
                
                    {
                        layer: 'parques-naturales',
                       opacity: 0
                     }
                
            ]
        },
        {
            id: 'Mission',
            alignment: 'left',
            hidden: false,
           // title: 'Montage',
           // image: 'images/long-banner.png',
           // caption: '',
           description: 'ANEI was established in 1995 and is the organizaton of native agro-ecological farmers in the coffeelands of Sierra Nevada de Santa Marta. It is led by Aurora Izquierdo, the first Arhuaca native woman to earn a degree in agronomy. Currently, ANEI sources from over 500 farming families and this Fairtrade cooperative is Colombia’s largest exporter of organic coffee.',
           location: {
                center: [-73.29813,  9.94819],
                zoom: 8.92,
                pitch: 35.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'anei-locations',
                   opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'anei-locations',
                   opacity: 0
                 }
            ]
        }
    ]
};

