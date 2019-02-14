$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        navigation: {
            nextEl: ' .swiper-button-next-1',
            prevEl: ' .swiper-button-prev-1'
        },
        // Default parameters
        spaceBetween: 30,
    });
});
// TweenMax.to('.events-skier', 5 ,{left:0});
(function(){
    TweenMax.set('.events-skier', {left: 1000, bottom: 46});
    setInterval(function(){
        TweenMax.set('.events-skier', {left: 1000, bottom: 46});
        TweenMax.to('.events-skier', 5, {left: -1000, bottom: -46});
    },5000);
})();