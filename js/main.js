$(function () {
    $('.menu_icon').click(function () {
        $('.menu_left').slideToggle('show');
        $('.menu_right').removeAttr('style');
    });
  	$(window).resize(function() {      
      $('.menu_left').removeAttr('style');
  	});
});
$(function () {
    $('.menu_right_icon').click(function () {
        $('.menu_right').slideToggle('show');
        $('.menu_left').removeAttr('style');
    });
  	$(window).resize(function() {      
      $('.menu_right').removeAttr('style');
  	});
});
$(function () {
  $('.menu_item').click(function () {
      $('.menu_left').removeAttr('style');
      $('.menu_right').removeAttr('style');
  });
});
