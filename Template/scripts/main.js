$(document).ready(function() {
  $(".ui.calendar").calendar({
    type: "date"
  });
  let formData = {};

  $("#save-btn").on("click", function() {
    formData.name = $("input[name=name]").val();
    formData.lastname = $("input[name=lastname]").val();
    formData.email = $("input[name=email]").val();
    formData.date = $("input[name=date]").val();
    formData.rules = $("input[name=rules]:checked").val();
    formData.job = $("input[name=developer]:checked").attr("data-content");

    // console.table(formData);
  });

  //close
  let toggle = false;
  $(".burger-menu").on("click", function() {
    if (toggle) {
      $(".menu")
        .removeClass("show-menu")
        .addClass("hide-menu");
      $(".menu-open")
        .removeClass("fa-times")
        .addClass("fa-bars");
      $(".list-menu svg").css({ position: "absolute" });
      toggle = false;
    } else {
      $(".menu")
        .removeClass("hide-menu")
        .addClass("show-menu");
      $(".menu-open")
        .removeClass("fa-bars")
        .addClass("fa-times");
      $(".list-menu svg").css({ position: "static" });
      toggle = true;
    }
  });
});
