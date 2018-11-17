$(document).ready(function () {
         $("#features").load("./bergamo.html");
   });



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

    map.setFilter('prova', ['==', titolo, nome]);

  });



function cambianome(){
  titolo = "ciaone"
  console.log("ciao");
  console.log(nome);
}



window.addEventListener("click", function(){

  map.addLayer({
          'id': 'prova2',
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

      map.setFilter('prova2', ['==', "nome-completo", "Chenopodium album L."]);

    map.style._layers.prova.visibility="none";
});


// var titolo = "nome-completo";
// var nome = "Artemisia verlotiorum Lamotte"

// map.on('load', function() {
//     map.addLayer({
//       id: 'decimali',
//       type: 'circle',
//       source: {
//         type: 'vector',
//         url: 'mapbox://matteoseik.0a0kmzav'
//       },
//       'source-layer': 'decimali',
//     });
//   });



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



 // cambianome();


  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}


function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
