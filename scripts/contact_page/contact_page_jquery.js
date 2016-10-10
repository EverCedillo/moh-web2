$(document).ready(function(){
  //Set the background of the register section with backstretch.
  $contact_section = $('#contact_section');
  $contact_section.backstretch('../images/landpage1.jpg');
  
  //Set the floatl efect to the inputs.
  new Floatl(document.querySelectorAll('.floatl')[0]);
  new Floatl(document.querySelectorAll('.floatl')[1]);
  new Floatl(document.querySelectorAll('.floatl')[2]);
});