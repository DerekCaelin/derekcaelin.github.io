var externalData = {
    sources: [
        {
            "name": 'anei-locations',
            "type": 'vector',
            //"url": 'mapbox://nativeland.cjh3mywgg04aaahpidhgio50e-9ctzy'
            "url":  'derekcaelintm.cl76olf201tia27lci2g29dsn-2q9xt'
        },
    ],
    layers: [
        {
            "id": "anei-1",
            "type": "vector",
            "source": "composite",
            //2022_Revision_coordenadasnew.csv
            "source-layer": "anei-1"

         /*   "layout": {
                "text-field": ["to-string", ["get", "Name"]],
                "text-font": ["Open Sans SemiBold", "Arial Unicode MS Regular"],
                "text-size": 10,
                "text-padding": 0
            },
            "paint": {
                "text-color": "#ffffff",
                "text-halo-color": "hsl(0, 99%, 1%)",
                "text-halo-width": 1,
                "text-opacity": 0
            }*/
        }
    ]
};