$(document).ready(function() {

    setTimeout(function(){ 
        $('.loading').fadeOut(1500);
    }, 6000);

    $('body').on('click', '.loading', function() {
        $(this).fadeOut(1000);
    })

  /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
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
      
  
    // 3D Slider
    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $FillMode: 1,
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
        }
      };

      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

      /*#region responsive code begin*/

      var MAX_HEIGHT = 400;

      function ScaleSlider() {
          var containerElement = jssor_1_slider.$Elmt.parentNode;
          var containerWidth = containerElement.clientWidth;

          if (containerWidth) {
              var originalHeight = jssor_1_slider.$OriginalHeight();

              var containerHeight = containerElement.clientHeight || originalHeight;

              var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

              jssor_1_slider.$ScaleHeight(expectedHeight);
          }
          else {
              window.setTimeout(ScaleSlider, 30);
          }
      }

      ScaleSlider();

      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);

    /* Demo purposes only */
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );
         

  
});



