$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true, 
            items:4,
            autoplay:true,
            autoplayTimeout: 3000,
            autoplayHoverPause:true,
            margin: 15,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:4,
                },
                1000:{
                    items:4,
                }
            }
        }
    );
  });

