$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true, 
            items:4,
            autoplay:true,
            autoplayTimeout: 3000,
            autoplayHoverPause:true,
            margin: 15,
            // responsive:{
            //     0:{
            //         items:1,
            //         nav:true
            //     },
            //     600:{
            //         items:3,
            //         nav:false
            //     },
            //     1000:{
            //         items:5,
            //         nav:true,
            //         loop:false
            //     }
            // }
        }
    );
  });
    // Initialize a new plugin instance for all
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider();

    // Destroy all plugin instances created from the
    // e.g. $('input[type="range"]') elements.
    $('input[type="range"]').rangeslider('destroy');

    // Update all rangeslider instances for all
    // e.g. $('input[type="range"]') elements.
    // Usefull if you changed some attributes e.g. `min` or `max` etc.
    $('input[type="range"]').rangeslider('update', true);
