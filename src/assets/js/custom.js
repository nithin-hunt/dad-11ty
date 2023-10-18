(function ($) {

"use strict";

  $(window).on("load", function (event) {
    event.preventDefault();
    $("#loader").fadeOut(2000);
  });

  $(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $(".navbar").toggleClass("nav-mob");
      $(".navbar-brand").toggleClass("d-none");
    });
    $(".nav-link").click(function(){
      $(".navbar").toggleClass("nav-mob");
      $(".navbar-brand").toggleClass("d-none");
    });
  })

  // MENU
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });
  
  // CUSTOM LINK
  $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);


