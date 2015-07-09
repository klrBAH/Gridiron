//When scrolling down the page
//I want hide the smaller icons on the top and show the small icons on the 

$(function () {
  //Hide all of the small icons on the footer
  $(".lower-dock").find(".lower-icon").hide();

  //When scrolling do the page I want the respective imgs to hide on the
  //top-dock and show on the lower-dock

  //A certian precent is pass a the height of the div hide the icon at the top
  //and show the icon at the bottom
  $(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    //Scroll Animation
    if ($(windowWidth <= 549)) {
      if ($(this).scrollTop() >= 436) {
        dOAnimationShow();
      } else {
        dOAnimationHide();
      }
      if ($(this).scrollTop() >= 1040) {
        gRAnimationShow();
      } else {
        gRAnimationHide();
      }
      if ($(this).scrollTop() >= 1892) {
        g1AnimationShow();
      } else {
        g1AnimationHide();
      }
      if ($(this).scrollTop() >= 2648) {
        g2AnimationShow();
      } else {
        g2AnimationHide();
      }
      if ($(this).scrollTop() >= 3412) {
        g3AnimationShow();
      } else {
        g3AnimationHide();
      }
      if ($(this).scrollTop() >= 4220) {
        g4AnimationShow();
      } else {
        g4AnimationHide();
      }
      if ($(this).scrollTop() >= 4916) {
        g5AnimationShow();
      } else {
        g5AnimationHide();
      }
      if ($(this).scrollTop() >= 5680) {
        g6AnimationShow();
      } else {
        g6AnimationHide();
      }
      if ($(this).scrollTop() >= 6428) {
        g7AnimationShow();
      } else {
        g7AnimationHide();
      }
      if ($(this).scrollTop() >= 7184) {
        eVAnimationShow();
      } else {
        eVAnimationHide();
      }
      if ($(this).scrollTop() >= 7184) {
        eVAnimationShow();
      } else {
        eVAnimationHide();
      }
      if ($(this).scrollTop() >= 7228) {
        iNAnimationShow();
      } else {
        iNAnimationHide();
      }
    }

    //Fade related icons in and out on scroll
  });
});

var dOAnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-DO").show();
  $(".upper-dock").children().find("#upper-icon-DO").hide();
}
var dOAnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-DO").hide();
  $(".upper-dock").children().find("#upper-icon-DO").show();
}
var gRAnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-Gr").show();
  $(".upper-dock").children().find("#upper-icon-Gr").hide();
  $("#topic-G1").find(".related-icon").fadeIn();
}
var gRAnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-Gr").hide();
  $(".upper-dock").children().find("#upper-icon-Gr").show();
  $("#topic-G1").find(".related-icon").fadeOut();
}
var g1AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G1").show();
  $(".upper-dock").children().find("#upper-icon-G1").hide();
  $("#topic-G2").find(".related-icon").fadeIn();
}
var g1AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G1").hide();
  $(".upper-dock").children().find("#upper-icon-G1").show();
  $("#topic-G2").find(".related-icon").fadeOut();
}
var g2AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G2").show();
  $(".upper-dock").children().find("#upper-icon-G2").hide();
  $("#topic-G3").find(".related-icon").fadeIn();
}
var g2AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G2").hide();
  $(".upper-dock").children().find("#upper-icon-G2").show();
  $("#topic-G3").find(".related-icon").fadeOut();
}
var g3AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G3").show();
  $(".upper-dock").children().find("#upper-icon-G3").hide();
  $("#topic-G4").find(".related-icon").fadeIn();
}
var g3AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G3").hide();
  $(".upper-dock").children().find("#upper-icon-G3").show();
  $("#topic-G4").find(".related-icon").fadeOut();
}
var g4AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G4").show();
  $(".upper-dock").children().find("#upper-icon-G4").hide();
  $("#topic-G5").find(".related-icon").fadeIn();
}
var g4AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G4").hide();
  $(".upper-dock").children().find("#upper-icon-G4").show();
  $("#topic-G5").find(".related-icon").fadeOut();
}
var g5AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G5").show();
  $(".upper-dock").children().find("#upper-icon-G5").hide();
  $("#topic-G6").find(".related-icon").fadeIn();
}
var g5AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G5").hide();
  $(".upper-dock").children().find("#upper-icon-G5").show();
  $("#topic-G6").find(".related-icon").fadeOut();
}
var g6AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G6").show();
  $(".upper-dock").children().find("#upper-icon-G6").hide();
  $("#topic-G7").find(".related-icon").fadeIn();
}
var g6AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G6").hide();
  $(".upper-dock").children().find("#upper-icon-G6").show();
  $("#topic-G7").find(".related-icon").fadeOut();
}
var g7AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G7").show();
  $(".upper-dock").children().find("#upper-icon-G7").hide();
  $("#topic-Ev").find(".related-icon").fadeIn();
}
var g7AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G7").hide();
  $(".upper-dock").children().find("#upper-icon-G7").show();
  $("#topic-Ev").find(".related-icon").fadeOut();
}
var eVAnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-Ev").show();
  $(".upper-dock").children().find("#upper-icon-Ev").hide();
}
var eVAnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-Ev").hide();
  $(".upper-dock").children().find("#upper-icon-Ev").show();
}
var iNAnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-In").show();
  $(".upper-dock").children().find("#upper-icon-In").hide();
}
var iNAnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-In").hide();
  $(".upper-dock").children().find("#upper-icon-In").show();
}
