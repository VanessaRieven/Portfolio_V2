// var  Swipe  = (function () {
//     function  Swipe(element) {
//         this.xDown  =  null;
//         this.yDown  =  null;
//         this.element  =  typeof (element) ===  'string'  ?  document.querySelector(element) :  element;
//         this.element.addEventListener('touchstart', function (evt) {
//             this.xDown  =  evt.touches[0].clientX;
//             this.yDown  =  evt.touches[0].clientY;
//         }.bind(this), false);
//     }

//     Swipe.prototype.onLeft  =  function (callback) {
//         this.onLeft  =  callback;
//         return this;
//     };
//     Swipe.prototype.onRight  =  function (callback) {
//         this.onRight  =  callback;
//         return this;
//     };
//     Swipe.prototype.onUp  =  function (callback) {
//         this.onUp  =  callback;
//         return this;
//     };
//     Swipe.prototype.onDown  =  function (callback) {
//         this.onDown  =  callback;
//         return this;
//     };

//     Swipe.prototype.handleTouchMove  =  function (evt) {
//         if (!this.xDown  ||  !this.yDown) {
//             return;
//         }
//         var  xUp  =  evt.touches[0].clientX;
//         var  yUp  =  evt.touches[0].clientY; 
//         this.xDiff  = this.xDown  -  xUp;
//         this.yDiff  = this.yDown  -  yUp;

//         if (Math.abs(this.xDiff) !==  0) {
//             if (this.xDiff  >  2) {
//                 typeof (this.onLeft) ===  "function"  && this.onLeft();
//             } else  if (this.xDiff  <  -2) {
//                 typeof (this.onRight) ===  "function"  && this.onRight();
//             }
//         }

//         if (Math.abs(this.yDiff) !==  0) {
//             if (this.yDiff  >  2) {
//                 typeof (this.onUp) ===  "function"  && this.onUp();
//             } else  if (this.yDiff  <  -2) {
//                 typeof (this.onDown) ===  "function"  && this.onDown();
//             }
//         }
//         // Reset values.
//         this.xDown  =  null;
//         this.yDown  =  null;
//     };

//     Swipe.prototype.run  =  function () {
//         this.element.addEventListener('touchmove', function (evt) {
//             this.handleTouchMove(evt);
//         }.bind(this), false);
//     };

//     return  Swipe;
// }());

// var swiper = new Swipe('section');

// swiper.onLeft(function() {

//     var checked = $('.page_inp:checked').val();
//     console.log($('.page_inp:checked').val())
 
//     if(checked == 1) {
//         $('#section2').trigger('click');
//     }

//     if(checked == 2) {
//         $('#section3').trigger('click');
//     }
        

//     if(checked == 3) {
//         $('#section4').trigger('click');
//     }
        

//     if(checked == 4) {
//         $('#section5').trigger('click');
//     }
        

//     if(checked == 5) {
//         $('#section6').trigger('click');
//     }
        

//     if(checked == 6) {
//         $('#section1').trigger('click');
//     }
        
// });

// swiper.run();

$(document).ready(function() {

    jquerySwipeHandler.handleSwipe("section", [
        jquerySwipeHandler.SWIPE_LEFT, 
        jquerySwipeHandler.SWIPE_RIGHT, 
        jquerySwipeHandler.SWIPE_DOWN, 
        jquerySwipeHandler.SWIPE_UP, 
        jquerySwipeHandler.CLICK
      ], function (direction) {
        console.log("swipe: ", direction);
        var checked = $('.page_inp:checked').val();
        console.log($('.page_inp:checked').val())
    
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
      });
      
    


    setTimeout(function(){ 
        $('.loading').fadeOut(1500);
    }, 6000);

    $('body').on('click', '.loading', function() {
        $(this).fadeOut(1000);
    })

    /* Demo purposes only */
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

      
   