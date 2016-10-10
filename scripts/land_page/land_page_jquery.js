$(document).ready(function(){
  //Set the background of the register section with backstretch.
  $register_section = $('#register_section');
  $register_section.backstretch('../images/landpage1.jpg');
  
  //Set the floatl efect to the inputs.
  new Floatl(document.querySelectorAll('.floatl')[0]);
  new Floatl(document.querySelectorAll('.floatl')[1]);
  new Floatl(document.querySelectorAll('.floatl')[2]);
  new Floatl(document.querySelectorAll('.floatl')[3]);
  new Floatl(document.querySelectorAll('.floatl')[4]);
  new Floatl(document.querySelectorAll('.floatl')[5]);
});