
// var titolo = "nome-completo";
// var nome = "Artemisia verlotiorum Lamotte";


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



function addCerchio(filtro1, filtro2, colore, nome){
  map.addLayer({
        'id': nome,
        'type': 'circle',
        'source': 'segnalazioni',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'circle-radius': 3,
            'circle-color': colore
        },
    });

    map.setFilter( nome, ['==', filtro1, filtro2]);

    //rimuovi visibility altri livelli
};



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



var activeChapterName ="par1";


function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);


addCerchio(chapters[chapterName].filtro1, chapters[chapterName].filtro2, chapters[chapterName].colore, chapters[chapterName].nome);


  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}



function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 100;
}
