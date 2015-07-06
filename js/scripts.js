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

    //Create varibles for the specific div height
    var dO = $('#topic-DO').height();
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

    //Create a switch statement for all of the slide conditions
    if ($(this).scrollTop() >= dO) {
      $(".lower-dock").children().find("#upper-icon-DO").show();
      $(".upper-dock").children().find("#upper-icon-DO").hide();
    } else if ($(this).scrollTop() <= dO) {
      $(".lower-dock").children().find("#upper-icon-DO").hide();
      $(".upper-dock").children().find("#upper-icon-DO").show();
    }
  });
});
