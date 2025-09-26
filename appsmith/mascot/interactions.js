$(function () {
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
