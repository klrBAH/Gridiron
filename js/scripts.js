//When scrolling down the page
//I want hide the smaller icons on the top and show the small icons on the 

$(function () {
  //Hide all of the small icons on the footer
  $(".lower-dock").find(".lower-icon").hide()

  //When scrolling do the page I want the respective imgs to hide on the
  //top-dock and show on the lower-dock

  //A certian precent is pass a the height of the div hide the icon at the top
  //and show the icon at the bottom
  $(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    //First Animation
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
    //Create varibles for the specific div height
    /*var dO = $('#topic-DO').height();
    var gR = $('#topic-Gr').height();
    var g1 = $('#topic-G1').height();
    var g2 = $('#topic-G2').height();
    var g3 = $('#topic-G3').height();
    var g4 = $('#topic-G4').height();
    var g5 = $('#topic-G5').height();
    var g6 = $('#topic-G6').height();
    var g7 = $('#topic-G7').height();
    var eV = $('#topic-Ev').height();
    var iN = $('#topic-In').height();

    //Create if else statements for all of the scroll conditions

    function testScroll(ev) {

      if (window.pageYOffset > 400) alert('User has scrolled at least 400 px!');
    }

    window.onscroll = testScroll
      /*scrollShowHide(dO, "DO");
      scrollShowHide(gR, "Gr");
      scrollShowHide(g1, "G1");
      scrollShowHide(g2, "G2");
      scrollShowHide(g3, "G3");
      scrollShowHide(g4, "G4");
      scrollShowHide(g5, "G5");
      scrollShowHide(g6, "G6");
      scrollShowHide(g7, "G7");
      scrollShowHide(eV, "Ev");
      scrollShowHide(iN, "In");*/

    //    if ($(this).scrollTop() >= dO) {
    //      $(".lower-dock").children().find("#upper-icon-DO").show();
    //      $(".upper-dock").children().find("#upper-icon-DO").hide();
    //    } else if ($(this).scrollTop() <= dO) {
    //      $(".lower-dock").children().find("#upper-icon-DO").hide();
    //      $(".upper-dock").children().find("#upper-icon-DO").show();
    //    }
    //
    //    if ($(this).scrollTop() >= dO) {
    //      $(".lower-dock").children().find("#upper-icon-DO").show();
    //      $(".upper-dock").children().find("#upper-icon-DO").hide();
    //    } else if ($(this).scrollTop() <= dO) {
    //      $(".lower-dock").children().find("#upper-icon-DO").hide();
    //      $(".upper-dock").children().find("#upper-icon-DO").show();
    //    }*/


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
}
var gRAnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-Gr").hide();
  $(".upper-dock").children().find("#upper-icon-Gr").show();
}
var g1AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G1").show();
  $(".upper-dock").children().find("#upper-icon-G1").hide();
}
var g1AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G1").hide();
  $(".upper-dock").children().find("#upper-icon-G1").show();
}
var g2AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G2").show();
  $(".upper-dock").children().find("#upper-icon-G2").hide();
}
var g2AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G2").hide();
  $(".upper-dock").children().find("#upper-icon-G2").show();
}
var g3AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G3").show();
  $(".upper-dock").children().find("#upper-icon-G3").hide();
}
var g3AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G3").hide();
  $(".upper-dock").children().find("#upper-icon-G3").show();
}
var g4AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G4").show();
  $(".upper-dock").children().find("#upper-icon-G4").hide();
}
var g4AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G4").hide();
  $(".upper-dock").children().find("#upper-icon-G4").show();
}
var g5AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G5").show();
  $(".upper-dock").children().find("#upper-icon-G5").hide();
}
var g5AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G5").hide();
  $(".upper-dock").children().find("#upper-icon-G5").show();
}
var g6AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G6").show();
  $(".upper-dock").children().find("#upper-icon-G6").hide();
}
var g6AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G6").hide();
  $(".upper-dock").children().find("#upper-icon-G6").show();
}
var g7AnimationShow = function () {
  $(".lower-dock").children().find("#upper-icon-G7").show();
  $(".upper-dock").children().find("#upper-icon-G7").hide();
}
var g7AnimationHide = function () {
  $(".lower-dock").children().find("#upper-icon-G7").hide();
  $(".upper-dock").children().find("#upper-icon-G7").show();
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
