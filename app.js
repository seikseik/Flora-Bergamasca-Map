

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



function bergamo(){
  $("#contenuto").load("./bergamo.html");
}
