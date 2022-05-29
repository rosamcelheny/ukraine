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
})