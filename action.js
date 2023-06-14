$(document).ready(function () {
  setInterval(function () {
    $(".slidercontainer > div:first")
      .css({
        transform: "scale(1)",
        transition: "ease-out 2s",
        opacity: ".5",
      })
      .next()
      .css({
        transform: "scale(1.02)",
        transition: "ease-out 2s",
        opacity: "1",
      })
      .end()
      .appendTo(".slidercontainer");
  }, 7000);

  $("#arrow").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $(document).height(),
      },
      2000
    );
  });

  $("form").on("keyup keypress", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });

  $("#buttons").click(function () {
    //e.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://192.168.10.16/hot/getemail.php",
      data: { email: $("#tolower3").val(), room: $("#roomno").val() }, //,
      //success: function(data){
      //	$('#loginhidden').click();
      //}
    });
    $("#loginhidden").click();
  });

  $("#tolower").keyup(function () {
    this.value = this.value.toLowerCase();
  });
  $("#tolower2").keyup(function () {
    this.value = this.value.toLowerCase();
  });
  $("#tolower3").keyup(function () {
    this.value = this.value.toLowerCase();
  });
  $("#byroom").click(function () {
    $(".loginroom").css({ display: "block" });
    $(".loginaccescode").css({ display: "none" });
    $("#room").prop("checked", true);
    $("#acces").prop("checked", false);
  });
  $("#byacces").click(function () {
    $(".loginroom").css({ display: "none" });
    $(".loginaccescode").css({ display: "block" });
    $("#acces").prop("checked", true);
    $("#room").prop("checked", false);
  });
  $("#room").click(function () {
    $(".loginroom").css({ display: "block" });
    $(".loginaccescode").css({ display: "none" });
    $("#room").prop("checked", true);
    $("#acces").prop("checked", false);
  });
  $("#acces").click(function () {
    $(".loginroom").css({ display: "none" });
    $(".loginaccescode").css({ display: "block" });
    $("#acces").prop("checked", true);
    $("#room").prop("checked", false);
  });
  $(".blur").click(function () {
    $(".blur").css({ display: "none" });
    $("#termtext").css({ display: "none" });
  });
  $("#termlink").click(function () {
    $(".blur").css({ display: "block" });
    $("#termtext").css({ display: "block" });
  });
});
