$(document).ready(function () {
    $(".work-btn").click(function(){
        $(".work-btn").removeClass("active");
        $(this).addClass("active");
    });

    $(".header-btn").click(function(){
        $(".header-btn").removeClass("active");
        $(this).addClass("active");
    })

    $(".tab-title").click(function(){
        $(".tab-title").removeClass("active");
        $(".tab-block").removeClass("active");
        $(".tab-content").slideUp();
        $(this).addClass("active");
        $(this).parent().addClass("active");
        $(this).next().slideDown();
    })

    // slider
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,   
        autoplay: true,   
    })

    // stars
    $(".my-rating").starRating({
        initialRating: 5,
        strokeColor: '#FDBC64',
        strokeWidth: 10,
        starSize: 25
      
    });
    

    $(".burger-menu").click(function(){
        $(".burger-menu").toggleClass("active");
        $(".nav").toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("hiden");
    })

});
