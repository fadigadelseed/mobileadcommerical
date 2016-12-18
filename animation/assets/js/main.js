$(document).ready(function() {
  $('#ux').on('mouseenter', function () {
    $('#ux').addClass('rubberBand');
  }).on('mouseleave', function() {
    $('#ux').removeClass('rubberBand');
  });

const phoneLeft  = $('#phoneLeft');

  $(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    if(windowPos > 600){
      phoneLeft.addClass('slideInLeft');
    }
  });

});
