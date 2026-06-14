$(document).ready(function () {
  // GET & SET METHODS
  $("#show-name").click(function () {
    $("#output").text($("#student-name").text());
  });

  $("#change-name").click(function () {
    $("#student-name").text("Nischal Poudel");
    $("#output").text("Name Changed Successfully!");
  });

  $("#show-bio").click(function () {
    $("#output").text($("#student-bio").text());
  });

  $("#get-input").click(function () {
    $("#output").text($("#nickname-input").val());
  });

  $("#set-input").click(function () {
    $("#nickname-input").val("jQuery Pro");
    $("#output").text("Input Set Successfully!");
  });

  // CSS CLASS MANIPULATION
  $("#highlight-card").click(function () {
    $("#profile-card").addClass("highlighted");
  });

  $("#remove-highlight").click(function () {
    $("#profile-card").removeClass("highlighted");
  });

  $("#toggle-dark").click(function () {
    $("#profile-card").toggleClass("dark-mode");
  });

  $("#toggle-rounded").click(function () {
    $("#profile-photo").toggleClass("rounded");
  });

  // CSS METHOD
  $("#red-bg").click(function () {
    $("#profile-card").css("background", "#e74c3c");
  });

  $("#reset-bg").click(function () {
    $("#profile-card").css("background", "white");
  });

  //Visual EFFECTS
  $("#hide-photo").click(function () {
    $("#profile-photo").hide("slow");
  });

  $("#show-photo").click(function () {
    $("#profile-photo").show("slow");
  });

  $("#toggle-bio").click(function () {
    $("#student-bio").toggle();
  });

  // FADE EFFECTS
  $("#fade-out").click(function () {
    $("#profile-card").fadeOut();
  });

  $("#fade-in").click(function () {
    $("#profile-card").fadeIn();
  });

  $("#fade-half").click(function () {
    $("#profile-card").fadeTo("slow", 0.5);
  });

  // SLIDE EFFECTS
  $("#slide-up").click(function () {
    $("#skills-list").slideUp();
  });

  $("#slide-down").click(function () {
    $("#skills-list").slideDown();
  });

  $("#slide-toggle").click(function () {
    $("#skills-list").slideToggle();
  });

  // ANIMATE METHOD
  $("#animate-card").click(function () {
    $("#profile-card")
      .animate({ marginLeft: "200px" }, 1000)
      .animate({ marginLeft: "0px" }, 1000);
  });

  // EVENT HANDLING
  $("#profile-photo").mouseenter(function () {
    $(this).addClass("shadow");
  });

  $("#profile-photo").mouseleave(function () {
    $(this).removeClass("shadow");
  });

  $("#nickname-input").keypress(function (event) {
    $("#output").text("Pressed Key: " + event.key);
  });
});
