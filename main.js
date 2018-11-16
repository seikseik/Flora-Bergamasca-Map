$(document).ready(function () {

         $("#features").load("./bergamo.html");

   });



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
      id: 'decimali',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://matteoseik.0a0kmzav'
      },
      'source-layer': 'decimali',
    });
  });


var chapters = {
  'par1': {
      bearing: 27,
      center: [-0.15591514, 51.51830379],
      zoom: 15.5,
      pitch: 20
  },
  'par2': {
      duration: 6000,
      center: [-0.07571203, 51.51424049],
      bearing: 150,
      zoom: 15,
      pitch: 0
  },
  'par3': {
      bearing: 90,
      center: [-0.08533793, 51.50438536],
      zoom: 13,
      speed: 0.6,
      pitch: 40
  },
  'par4': {
      bearing: 90,
      center: [0.05991101, 51.48752939],
      zoom: 12.3
  },
  'par5': {
      bearing: 45,
      center: [-0.18335806, 51.49439521],
      zoom: 15.3,
      pitch: 20,
      speed: 0.5
  }
};


var side = document.getElementById("mySidenav");

// On every scroll event, check which element is on screen
side.onscroll = function() {
  console.log("ciao");
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};

var activeChapterName = 'par1';
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
  // return bounds.top <= 0;
}
