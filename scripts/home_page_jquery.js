$(document).ready(function(){
  $burger_menu = $('#burger_menu');
  $mobile_tabs_id = $('#mobile_tabs_id');
  $($burger_menu).click(function(){
    $mobile_tabs_id.slideToggle('fast');
  });
  
  $register_section = $('#register_section');
  $register_section.backstretch('../images/Home1.jpg');
  
  // When using jQuery, you can pass in a jQuery object
  new Floatl(document.querySelectorAll('.floatl')[0]);
  new Floatl(document.querySelectorAll('.floatl')[1]);
  new Floatl(document.querySelectorAll('.floatl')[2]);
  new Floatl(document.querySelectorAll('.floatl')[3]);
  new Floatl(document.querySelectorAll('.floatl')[4]);
  new Floatl(document.querySelectorAll('.floatl')[5]);

  $mision_and_vision_section = $('#mision_and_vision_section');
  $mision_and_vision_section.backstretch('../images/Home2.png');
  
  $('#team_slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  $('#team_slider_phone').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  $('#review_left_side_id').backstretch('../images/Home3.png');
  
  $('#reviews_carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});