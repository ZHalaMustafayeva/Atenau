
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        center: true,
        margin: 10,
        nav: true,
        dots: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(window).bind('scroll', function () {

        var navHeight = $('nav').height()
        if ($(window).scrollTop() > navHeight) {
            $('.logo').addClass('fixed');
        }
        else {
            $('.logo').removeClass('fixed');
        }
    });
    $('.humb').click(function () {
        $('.humb').toggleClass('active-humb');
        if ($('.humb').hasClass('active-humb')) {


            $('.mobile-nav').css({
                transform: 'translateY(0)',
                transition: '.5s'
            });
        }
        else {



            $('.mobile-nav').css({
                transform: 'translateY(-200%)',
                transition: '.5s'
            });

        }
    })
    $('.open2').click(function () {
        $('.custom-dropdown2').slideToggle();
    })
    $('.open1').click(function () {
        $('.custom-dropdown1').slideToggle();
    })
  

    var offset = $('.heading').offset();
    $('.owl-carousel .owl-stage').css({
        "transform": ` translate3d(${offset.left}px, 0px, 0px)`
    })

});