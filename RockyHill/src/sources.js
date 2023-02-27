var externalData = {
    sources: [
        {
            "name": 'nativeland',
            "type": 'vector',
            "url": 'mapbox://nativeland.cjh3mywgg04aaahpidhgio50e-9ctzy'
        },
    ],
    layers: [
        {
            "id": "native-land",
            "type": "symbol",
            "source": "nativeland",
            "source-layer": "Territories",
            "layout": {
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
            }
        }
    ]
};