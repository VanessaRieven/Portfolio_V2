$(document).ready(function() {

    setTimeout(function(){ 
        $('.loading').fadeOut(1500);
    }, 6000);

    $('body').on('click', '.loading', function() {
        $(this).fadeOut(1000);
    })



    $('.loading').fadeOut(500);

      
});



