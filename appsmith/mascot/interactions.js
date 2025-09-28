$(function () {
  //Sounds
  var connecting = new Audio("sounds/connecting.wav");
  var connected = new Audio();
  var voice = new Audio("sounds/voice.wav");
  connecting.loop = true;
  $("#states a").click(function () {
    connecting.pause();
    voice.pause();
    connected.play();
    connected = new Audio();
  });
  $("#connecting").click(function () {
    connecting.currentTime = 0;
    connecting.play();
    connected = new Audio("sounds/connected.wav");
  });
  $("#speaking").click(function () {
    voice.currentTime = 0;
    voice.play();
  });

  $("nav a").click(function () {
    $(this).parent().find(".selected").removeClass("selected");
    $(this).addClass("selected");
    $("body").removeClass();
    $("nav .selected").each(function (i, e) {
      $("body").addClass($(e).attr("id"));
    });
  });
});
