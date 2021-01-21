$(document).ready(function() {

    //LOADERS______________________________________________________________________
    setTimeout(function(){ 
        $('.loading').fadeOut(1500);
    }, 6000);

    $('body').on('click touchstart', '.loading', function() {
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
        } else if (direction == "SWIPE_LEFT" ) {
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
  
    //MODALS______________________________________________________________________
   
    $('body').on('click touchstart', 'figure', function(){
        $('#modal').removeAttr('class').addClass('one');
        var data = $(this).attr('data-id')
        if (data == 1) {
            $('.modal-bg').css('background-color', '#efefef');
            $('.modal-bg').html(`
                <img src="img/projeto1/01-min.jpg">
                <img src="img/projeto1/02-min.png">
                <img src="img/projeto1/04-min.png">
                <img src="img/projeto1/05-min.png">
                <img src="img/projeto1/06-min.png">
                <img src="img/projeto1/07-min.png">
                <img src="img/projeto1/08.gif">
                <img src="img/projeto1/09-min.png">
                <img src="img/projeto1/10-min.jpg">
                <img src="img/projeto1/11-min.jpg">
                <img src="img/projeto1/12-min.png">
                <img src="img/projeto1/13-min.jpg">
            `)
        }

        if (data == 2) {
            $('.modal-bg').css('background-color', '#606060');
            $('.modal-bg').html(`
              
                <img src="img/projeto2/001-min.jpg">
                <img src="img/projeto2/002-min.jpg">
                <img src="img/projeto2/003-min.jpg">
                <img src="img/projeto2/004-min.jpg">
                <img src="img/projeto2/005-min.jpg">
                <img src="img/projeto2/006-min.jpg">
                <img src="img/projeto2/007-min.jpg">
                <img src="img/projeto2/008-min.jpg">
                <img src="img/projeto2/009-min.jpg">
                <img src="img/projeto2/010-min.jpg">
               
            `)
        }

        if (data == 3) {
            $('.modal-bg').css('background-color', '#ccc');
            $('.modal-bg').html(`
                <p>
                    Project Alias, was a project for our one year course in Game Design at Restart. Our group of four had to do a small demonstration in the end of the year of a game we created during our course. In 6 months this is the compilation of all we could do in terms of art and animation. 
                    We decided after a lot of changes and experiments in other styles, 2D and 3D, to do a game in Pixel Art. 
                    The trailer was made by Vanessa Rieven in her first year in the Animation and Games Art course at University of Sunderland. It shows more or less how the game was planned to be.
                    (credits of the song belongs to Position Music - Shadow Dance)
                </p>
                <img src="img/projeto3/02-min.png">
                <img src="img/projeto3/03-min.png">
                <img src="img/projeto3/04-min.png">
                <img src="img/projeto3/05-min.png">
                <video class="video" controls>
                    <source src="videos/alias.mp4" type="video/mp4">
                </video>
            `)
        }
      
    })
      
    $('body').on('click touchstend', '#modal',function(){
        $(this).addClass('out');
    });

 
    $('body').on('touchstart', '.column a, .column2 a', function() {
        $(this).trigger('click');
    });
    
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



