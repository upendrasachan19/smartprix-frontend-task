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