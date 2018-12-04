
let tastolegenda = document.querySelector('#openLegend');
tastolegenda.addEventListener("click", function(e){
if(tastolegenda.classList.contains("off")){

    document.getElementById("legend").style.right = "10px";
    tastolegenda.classList.remove("off");
    tastolegenda.classList.add("on");
    document.querySelector(".liv1").classList.add("liv1a");
    document.querySelector(".liv3").classList.add("liv3a");

} else if(tastolegenda.classList.contains("on")){

  document.getElementById("legend").style.right = "-250px";
  tastolegenda.classList.remove("on");
  tastolegenda.classList.add("off");
  document.querySelector(".liv1").classList.remove("liv1a");
  document.querySelector(".liv3").classList.remove("liv3a");
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
