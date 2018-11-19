
// var titolo = "nome-completo";
// var nome = "Artemisia verlotiorum Lamotte";
var activeChapterName ="par1";

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
});



// On every scroll event, check which element is on screen
var side = document.getElementById("mySidenav");
side.onscroll = function() {


  // On every scroll event, check se il livello acceso corrisponde al capitolo acceso

var d = map.getStyle().layers;
var c = d[d.length-1].id;
if(activeChapterName !== c && c.startsWith("liv")){
  map.removeLayer(c);
};



  var chapterNames = Object.keys(chapters);

  for (var i = 0; i < chapterNames.length; i++) {
      var chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
      }
  }
};




//  INIZIO FUNZIONE ACCENDI LIVELLO 1

function addCerchio(filtro1, filtro2, colore, nome){

var capitoli = Object.keys(chapters);

  map.addLayer({
        'id': nome,
        'type': 'circle',
        'source': 'segnalazioni',
        'layout': {
            'visibility': 'visible',
        },
        'paint': {
            'circle-radius': 3,
            'circle-color': colore
        },
    });

    map.setFilter( nome, ['==', filtro1, filtro2]);


// POPUP
    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: [nome] // replace this with the name of the layer
      });

      if (!features.length) {
        return;
      }

      var feature = features[0];

      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<div id=\'popup\' class=\'popup\' style=\'z-index: 10;\'>' +
                  '<ul class=\'list-group\'>' +
                  '<li class=\'list-group-item\'> Nome: ' + feature.properties['nome-completo'] + ' </li>' +
                  '<li class=\'list-group-item\'> Corotipo:  ' + feature.properties['corotipi'] + ' </li>' +
                  '<li class=\'list-group-item\'> Forma biologica:  ' + feature.properties['forma-bio-semp'] + ' </li>' +
                  '<li class=\'list-group-item\'> <a target="_blank" href="https://www.actaplantarum.org/galleria_flora/galleria1.php?lista=0&mode=1&cat=24&cid=73&aid='+feature.properties['link']+'">Actaplantarum</a></li></ul></div>')
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
       map.on('mouseenter', nome, function () {
           map.getCanvas().style.cursor = 'pointer';
       });

       // Change it back to a pointer when it leaves.
       map.on('mouseleave', nome, function () {
           map.getCanvas().style.cursor = '';
       });

// RIMUOVI LIVELLO PRECEDENTE
    var a = map.getStyle().layers;
    var b = a[a.length-2].id;
map.removeLayer(b);
};

//  FINE FUNZIONE ACCENDI LIVELLO 1



//  ATTIVA FUNZIONI QUANDO ID ATTIVO

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;

  if(activeChapterName.startsWith("liv-geo")){
    addCerchio(chapters[chapterName].filtro1, chapters[chapterName].filtro2, chapters[chapterName].colore, chapters[chapterName].nome);
  };
}


//  CHECK SE ELEMENT E' SU SCHERMO

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 100;
}
