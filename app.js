

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("apri").style.left = "400px";
    // document.getElementById("apri").onlick = "closeNav()";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("apri").style.left = "0px";
}



$("#ring_contents li a").click(function(){
  $("#ringTabDrop").text('Ring size Format: ' + $(this).text());
});



// raccogli in una variabili gli elementi del menu, aggiungi evento al click -> se click togli classe
//active da uno e aggiungila a quello cliccato, accendi href collegato e spegni precedente.


// var x = document.getElementById("prova")

function bergamo(){
  $("#prova").load("./prova2.html");
}
