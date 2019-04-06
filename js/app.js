// TUTORIAL ONLOAD

let b = document.querySelector(".step");
let d = document.querySelector(".skip");
let countX = 0;

var isshow=0;
$(document).ready(function() {
  if(window.innerWidth > 760){
    var isshow = localStorage.getItem('isshow');
    if (isshow== null) {
        localStorage.setItem('isshow', 1);
        document.querySelector(".tutorial").style.display = "block";
      }
    }
});


function openPopover(id){
  $(id).popover('show');
  countX= 1;

   $("#map").on('click', function () {
     let a = document.querySelectorAll(".popover");
      $(a).popover('dispose');
    });
    $(".popover").on('click', function () {
      let a = document.querySelectorAll(".popover");
       $(a).popover('dispose');
     });
}



d.addEventListener("click", function(){
  $(".tutorial").fadeOut("fast");
  let a = document.querySelectorAll(".popover");
   $(a).popover('dispose');
});

b.addEventListener("click",function(){
    openPopover("#myButton");
    openPopover("#openLegend");
    openPopover("#apri");
});



let info = document.querySelector('#openInfo');

info.addEventListener("click", function(e){
  document.querySelector(".tutorial").style.display = "block";
});


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




var open = false;
function openNav(){
  if(open == false){
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("ring-size-tabs").style.width = "500px";
    document.getElementById("ring-size-tabs").style.left = "0px";
    document.getElementById("apri").style.left = "500px";
    document.getElementById("apri").style.width = "56px";
    document.getElementById("apri").style.height = "56px";
    document.getElementById("triangolo").classList.add("attivo")
    document.getElementById("ring_contents").classList.remove("show");

    $("#apriTex").hide();

    open = true;
  } else if( open = true){
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("apri").style.width = "70px";
    document.getElementById("apri").style.height = "70px";
    document.getElementById("ring-size-tabs").style.width = "0px";
    document.getElementById("ring-size-tabs").style.left = "-110px";
    document.getElementById("apri").style.left = "0px";
    document.getElementById("triangolo").classList.remove("attivo");

    $("#apriTex").show(500);
    deleteClose();

    open = false;
  }
}




$("#ring_contents li a").click(function(){
  $("#ringTabDrop").text($(this).text());
});

$(document).ready(function () {
         $("#features").load("./bergamo.html");
   });
