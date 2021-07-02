$(document).ready(function() {

  $(".myProjectsButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#myProjects").offset().top - 0
    }, 400);
  });
  
  $('.nav a').on('click', function(){
      $('.navbar-toggle').click()
  });

});
