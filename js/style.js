$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(document).ready(function(){
    $(".Blog").mouseenter(function(){
        $("#blog").css("display", "block");
    });
    $(".Blog").mouseleave(function(){
        $("#blog").css("display", "none");
    });
});

$(document).ready(function(){
    $(".Shortcodes").mouseenter(function(){
        $("#Shortcodes").css("display", "block");
    });
    $("#Shortcodes").mouseleave(function(){
        $("#Shortcodes").css("display", "none");
    });
});

$(document).ready(function(){
    $(".fa-shopping-cart").mouseenter(function(){
        $(".cart").css("display", "block");
    });
    $(".fa-shopping-cart").mouseleave(function(){
        $(".cart").css("display", "none");
    });
});