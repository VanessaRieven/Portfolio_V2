$(document).ready(function() {

    //LOADERS______________________________________________________________________
    setTimeout(function(){ 
        $('.loading').fadeOut(1500);
    }, 6000);

    $('body').on('click', '.loading', function() {
        $(this).fadeOut(1000);
    })
    


    //SWIPE MOBILE______________________________________________________________________
    jquerySwipeHandler.handleSwipe("section", [
        jquerySwipeHandler.SWIPE_LEFT, 
        jquerySwipeHandler.SWIPE_RIGHT 
      ], function (direction) {
        console.log("swipe: ", direction);

        var checked = $('.page_inp:checked').val();
    
        if (direction == "SWIPE_RIGHT" ) {

            console.log('direita')
            if(checked == 1) {
                $('#section6').trigger('click');
            }
    
            if(checked == 2) {
                $('#section1').trigger('click');
            }
    
            if(checked == 3) {
                $('#section2').trigger('click');
            }
    
            if(checked == 4) {
                $('#section3').trigger('click');
            }  
    
            if(checked == 5) {
                $('#section4').trigger('click');
            }
    
            if(checked == 6) {
                $('#section5').trigger('click');
            }
        } else {
            console.log('esq')

            if(checked == 1) {
                $('#section2').trigger('click');
            }
    
            if(checked == 2) {
                $('#section3').trigger('click');
            }
    
            if(checked == 3) {
                $('#section4').trigger('click');
            }
    
            if(checked == 4) {
                $('#section5').trigger('click');
            }
    
            if(checked == 5) {
                $('#section6').trigger('click');
            }
                
            if(checked == 6) {
                $('#section1').trigger('click');
            }
        }
    });
      
    


    //EFEITOS PROJECTS/WEBDESIGN______________________________________________________________________
    
    $(".hover").mouseenter(
        function () {
            $(this).removeClass("hover");
        }
    );

    $(".hover").mouseleave(
        function () {
            $(this).addClass("hover");
        }
    );
  
    
    //COLORBOXES______________________________________________________________________
    $('.column a').colorbox({
        overlayClose: true,
        escKey: true,
        closeButton: true,
        fadeOut: true,
        arrowKey: true,
        maxHeight: '98%',
        maxWidth: '98%',
        rel: 'grupo1' //rel é o que vai buscar todas as imagens da mesma classe e usar as arrows
    });

    //COLORBOXES______________________________________________________________________
    $('.column2 a').colorbox({
        overlayClose: true,
        escKey: true,
        closeButton: true,
        fadeOut: true,
        arrowKey: true,
        maxHeight: '98%',
        maxWidth: '98%',
        rel: 'grupo2' //rel é o que vai buscar todas as imagens da mesma classe e usar as arrows
    });
});

