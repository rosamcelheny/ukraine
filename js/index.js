console.log("js running!");

$("#about-button").click(function() {
  $("#about").toggle();
  console.log("clicked!");
})

$(".calendar").click(function() {
  $("#about").hide();
});

$(".close-button").click(function() {
  $("#about").hide();
});

window.onresize = function() {
    document.body.height = window.innerHeight;
    console.log(window.innerHeight);
}
window.onresize();