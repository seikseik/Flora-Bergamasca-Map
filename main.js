mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvc2VpayIsImEiOiJjajQxbzYyamYwZ3BoMnFwYW14OWJ4YzFzIn0.ftiqjSyzdVDOaclBCDp4Gg';


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/matteoseik/cjncubnsr0ylz2skfivlu76on', //hosted style id
    center: [9.674504
, 45.695638], // starting position
    zoom: 13 // starting zoom
});

map.on('load', function() {
    map.addLayer({
      id: 'tutte',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://matteoseik.0a0kmzav'
      },
      'source-layer': 'decimali',
    });
  });
