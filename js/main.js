
var titolo = "nome-completo";
var nome = "Artemisia verlotiorum Lamotte";


mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvc2VpayIsImEiOiJjajQxbzYyamYwZ3BoMnFwYW14OWJ4YzFzIn0.ftiqjSyzdVDOaclBCDp4Gg';


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/matteoseik/cjon3rla12n182rp6govkw37a', //hosted style id
    center: [9.674504
, 45.695638], // starting position
    zoom: 13 // starting zoom
});




map.on('load', function() {
  map.addSource('segnalazioni', {
    type: 'geojson',
    data: './json/decimali.geojson'
});


  // map.addLayer({
  //       'id': 'prova',
  //       'type': 'circle',
  //       'source': 'segnalazioni',
  //       'layout': {
  //           'visibility': 'visible'
  //       },
  //       'paint': {
  //           'circle-radius': 3,
  //           'circle-color': 'red'
  //       },
  //   });
  //
  //   map.setFilter('prova', ['==', titolo, nome]);


  });



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
