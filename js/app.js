
let tastolegenda = document.querySelector('#openLegend');
tastolegenda.addEventListener("click", function(e){
if(tastolegenda.classList.contains("off")){
    document.getElementById("legend").style.right = "-230px";
    tastolegenda.classList.remove("off");
    tastolegenda.classList.add("on");
} else if(tastolegenda.classList.contains("on")){
  document.getElementById("legend").style.right = "10px";
  tastolegenda.classList.remove("on");
  tastolegenda.classList.add("off");
}
})



function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("ring-size-tabs").style.width = "500px";
    document.getElementById("ring-size-tabs").style.left = "0px";

    document.getElementById("apri").style.left = "500px";
    document.getElementById("triangolo").classList.add("attivo");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ring-size-tabs").style.width = "0px";
    document.getElementById("ring-size-tabs").style.left = "-120px";

    document.getElementById("apri").style.left = "0px";
    document.getElementById("triangolo").classList.remove("attivo");
}



$("#ring_contents li a").click(function(){
  $("#ringTabDrop").text($(this).text());

});


$(document).ready(function () {
         $("#features").load("./bergamo.html");
   });
