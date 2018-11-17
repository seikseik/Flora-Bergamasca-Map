

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("apri").style.left = "500px";
    // document.getElementById("apri").onlick = "closeNav()";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("apri").style.left = "0px";
}



$("#ring_contents li a").click(function(){
  $("#ringTabDrop").text($(this).text());
});



function bergamo(){
  $("#contenuto").load("./bergamo.html");
}

// potrei aggiungere a tutti gli elementi della lista un event click e poi usare This.html per aggiungere poi $("#contenuto").load("./ +this.html+ .html");
