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
        if ($(windown
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

      var dOAnimation = function () {
        if ($(this).scrollTop() >= dO) {
          $(".lower-dock").children().find("#upper-icon-DO").show();
          $(".upper-dock").children().find("#upper-icon-DO").hide();
        } else if ($(this).scrollTop() <= dO) {
          $(".lower-dock").children().find("#upper-icon-DO").hide();
          $(".upper-dock").children().find("#upper-icon-DO").show();
        }
      }
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
