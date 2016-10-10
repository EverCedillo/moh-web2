$(document).ready(function(){
  //Show and hide mobilemenu when clicking in the burger menu.
  $burger_menu = $('#burger_menu');
  $mobile_tabs_id = $('#mobile_tabs_id');
  $($burger_menu).click(function(){
    $mobile_tabs_id.slideToggle('fast');
  });
  
  //Set the background of the register section with backstretch.
  $register_section = $('#register_section');
  $register_section.backstretch('../images/Home1.jpg');
  
  //Set the floatl efect to the inputs.
  new Floatl(document.querySelectorAll('.floatl')[0]);
  new Floatl(document.querySelectorAll('.floatl')[1]);
  new Floatl(document.querySelectorAll('.floatl')[2]);
  new Floatl(document.querySelectorAll('.floatl')[3]);
  new Floatl(document.querySelectorAll('.floatl')[4]);
  new Floatl(document.querySelectorAll('.floatl')[5]);

  //Set the background of the mision and vision section with backstretch.
  $mision_and_vision_section = $('#mision_and_vision_section');
  $mision_and_vision_section.backstretch('../images/Home2.png');
  
  //Initialize the slider of the team section.
  $team_slider = $('#team_slider');
  $team_slider.slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  //Initialize the carousel of the team section for mobile screen sizes.
  $team_slider_phone = $('#team_slider_phone');
  $team_slider_phone.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  //Set the background of the left side of the review section with backstretch.
  $review_left_side_id = $('#review_left_side_id');
  $review_left_side_id.backstretch('../images/Home3.png');
  
  //Initialize the carousel of the review section.
  $reviews_carousel = $('#reviews_carousel');
  $reviews_carousel.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});