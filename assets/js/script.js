//Smooth scroll en navegador
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 10, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});

$('#tarjeta').click(function () {
  $('#exampleModal').modal('show');
});

$('#tarjeta2').click(function () {
  $('#exampleModal2').modal('show');
});

$('#tarjeta3').click(function () {
  $('#exampleModal3').modal('show');
});

$('#tarjeta4').click(function () {
  $('#exampleModal4').modal('show');
});
