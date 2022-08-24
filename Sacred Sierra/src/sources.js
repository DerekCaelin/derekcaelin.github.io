var externalData = {
    sources: [
        {
            "name": 'anei',
            "type": 'vector',
            //"url": 'mapbox://nativeland.cjh3mywgg04aaahpidhgio50e-9ctzy'
            //"url":  'derekcaelintm.cl76olf201tia27lci2g29dsn-2q9xt'
            "url": 'mapbox://styles/derekcaelintm/cl76ixj59001m14o52vab3xvr?&access_token=pk.eyJ1IjoiZGVyZWtjYWVsaW50bSIsImEiOiJja2dtcGp6ZTQwM3F3MnlwMTR1cHJya202In0.YeLrbEMIIvr3Ev0Nb4cs3A'
        },
    ],
    layers: [
        {
            "id": "anei-locations",
            "type": "circle",
            "source": "anei",
            //2022_Revision_coordenadasnew.csv
            //"source-layer": "2022_Revision_coordenadasnew-642l92"
            "source-layer": "composite",
            "layout": {
                
            },
            "paint": {
                "circle-opacity": 0
            }
        }
    ]
};