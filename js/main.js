


mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvc2VpayIsImEiOiJjajQxbzYyamYwZ3BoMnFwYW14OWJ4YzFzIn0.ftiqjSyzdVDOaclBCDp4Gg';


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/matteoseik/cjnsxmwc23cmb2slpa6lqrsse', //hosted style id
    center: [9.674504
, 45.695638], // starting position
    zoom: 13 // starting zoom
});



var titolo = "nome-completo";
var nome = "Artemisia verlotiorum Lamotte";




map.on('load', function() {
  map.addSource('segnalazioni', {
    type: 'geojson',
    data: './json/decimali.geojson'
});

  map.addLayer({
        'id': 'prova',
        'type': 'circle',
        'source': 'segnalazioni',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 3,
            'circle-color': 'red'
        },
    });

    // map.setFilter('prova', ['==', titolo, nome]);

  });




var chapters = {
  'par1': {
      bearing: 27,
      center: [9.663388242592475, 45.70322207904454],
      zoom: 13,
      pitch: 30
  },
  'par2': {
      duration: 5000,
      center: [9.63958919379263, 45.70906309335106],
      bearing: 0,
      zoom: 13.5,
      pitch: 20
  },
  'par3': {
      duration: 5000,
      center: [9.619577301514795, 45.71923272349616],
      zoom: 13.5,
      // speed: 0.6,
      pitch: 20
  },
  'par4': {
      duration: 5000,
      center: [9.626645125608746, 45.69971401304966],
      zoom: 13.5
  },
  'par5': {
      duration: 5000,
      center: [9.667469200116699, 45.72584639715879],
      zoom: 13,
      pitch: 20,

  }
};


//potrei provare ad aggiungere capitoli all'ogetto chapters per tutti i file,
//solo che anzi che chiamare funzione flyto dovrebbe accendere un livello con stesso nome capitolo

var side = document.getElementById("mySidenav");

// On every scroll event, check which element is on screen
side.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};

// imposta primo capitolo attivo e se corrisponde a quello sullo schermo lancia funzione flyTo
// potrei sostituire par1 con variabile che trova primo id nell'html caricato
// creare funzione turnOn(nomeLayer) che parte solo se i capitoli hanno proprietà specifica
// i chapter con layer hanno proprietà che poi dovranno essere inserite nel addLayer di mapbox

//var primoIdCapitolo;


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
  return bounds.top < window.innerHeight && bounds.bottom > 100;
}
