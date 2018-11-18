


function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("ring-size-tabs").style.width = "500px";
    document.getElementById("ring-size-tabs").style.left = "0px";

    document.getElementById("apri").style.left = "500px";
    document.getElementById("triangolo").classList.add("attivo");
    // setTimeout(function(){document.getElementById("ring-size-tabs").style.position ="fixed";},200);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ring-size-tabs").style.width = "0px";
    document.getElementById("ring-size-tabs").style.left = "-100px";

    document.getElementById("apri").style.left = "0px";
    document.getElementById("triangolo").classList.remove("attivo");
    // document.getElementById("ring-size-tabs").style.position ="relative";
}



$("#ring_contents li a").click(function(){
  $("#ringTabDrop").text($(this).text());
});


$(document).ready(function () {
         $("#features").load("./bergamo.html");
   });

let lista = document.querySelector(".dropdown-menu");
// aggiungi link all'inizio della pagina quando cambi capitolo
lista.addEventListener("click", function(event){
 $("#features").load("./"+event.target.id+".html");
});
