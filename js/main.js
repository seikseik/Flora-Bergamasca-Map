

var activeChapterName ="par1";


mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvc2VpayIsImEiOiJjajQxbzYyamYwZ3BoMnFwYW14OWJ4YzFzIn0.ftiqjSyzdVDOaclBCDp4Gg';

if (!mapboxgl.supported()) {
    alert('Il tuo browser non supporta Mapbox GL');
} else { var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/matteoseik/cjon3rla12n182rp6govkw37a', //hosted style id
    center: [9.674504
, 45.695638], // starting position
    zoom: 13 // starting zoom
});
}



map.on('load', function() {
  map.addSource('segnalazioni', {
    type: 'geojson',
    data: './json/decimali.geojson'
  });
});



// On every scroll event, check which element is on screen
var side = document.getElementById("mySidenav");
side.onscroll = function() {

  // cambia il titolo del menu

      if (isElementOnScreenTitolo("primo")) {
        $("#ringTabDrop").text("Bergamo");
      }else if(isElementOnScreenTitolo("secondo")){
          $("#ringTabDrop").text("Geologia e clima");
      }

  // On every scroll event, check se il livello acceso corrisponde al capitolo acceso
  // altrimenti rimuove l'ultimo livello creato

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





function addPoligono(nome2, coordinate, colore2){
map.addLayer({
       'id': nome2,
       'type': 'fill',
       'source': {
           'type': 'geojson',
           'data': {
               'type': 'Feature',
               'geometry': {
                   'type': 'Polygon',
                   'coordinates': coordinate,
               }
           }
       },
       'layout': {},
       'paint': {
           'fill-color': colore2,
           'fill-opacity': 0.8
       }
   });
}



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
              'circle-radius': {
                  'base': 1.75,
                  'stops': [[12, 2], [22, 180]]
              },
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
                            '<ul>' +
                            '<li> Nome: ' + feature.properties['nome-completo'] + ' </li>' +
                            '<li> Corotipo:  ' + feature.properties['corotipi'] + ' </li>' +
                            '<li> Forma biologica:  ' + feature.properties['forma-bio-semp'] + ' </li>' +
                            '<li> <a target="_blank" href="https://www.actaplantarum.org/galleria_flora/galleria1.php?lista=0&mode=1&cat=24&cid=73&aid='+feature.properties['link']+'">Actaplantarum</a></li></ul></div>')
                  .setLngLat(feature.geometry.coordinates)
                  .addTo(map);

                  // remove popup
                  let listaP = document.getElementsByClassName("mapboxgl-popup");
                  if(popup.isOpen() && listaP.length > 1){
                    for (var i = listaP.length - 1; i >= 1; --i) {
                      listaP[i].parentNode.removeChild(listaP[i]);
                      }
                    }

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


};   //  FINE FUNZIONE ACCENDI LIVELLO 1







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

  if(activeChapterName.startsWith("liv-geo3")){
    addPoligono(chapters[chapterName].nome2,chapters[chapterName].coordinate, chapters[chapterName].colore2);
  };
}



//  CHECK SE ELEMENT E' SU SCHERMO

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 100;
}

function isElementOnScreenTitolo(id) {
  var element2 = document.getElementById(id);
  var bounds2 = element2.getBoundingClientRect();
  return bounds2.top < 100 && bounds2.bottom > 100;
}
