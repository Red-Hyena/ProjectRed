$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            720:{
                items:3
            },
            960:{
                items:5,
                loop: false
            }
        }
    })
})