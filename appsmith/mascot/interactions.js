$(function () {
  //Sounds
  var connecting = new Audio("sounds/connecting.wav");
  var voice = new Audio("sounds/voice.wav");
  connecting.loop = true;
  $("#states a").click(function () {
    connecting.pause();
    voice.pause();
  });
  $("#connecting").click(function () {
    connecting.currentTime = 0;
    connecting.play();
  });
  $("#speaking").click(function () {
    voice.currentTime = 0;
    voice.play();
  });

  $("nav a").click(function () {
    $(this).parent().find(".selected").removeClass("selected");
    $(this).addClass("selected");
    var variant = $(this).attr("id");
    $("#mascot-bounding-box").removeClass();
    $("nav .selected").each(function (i, e) {
      $("#mascot-bounding-box").addClass($(e).attr("id"));
    });
  });
});
