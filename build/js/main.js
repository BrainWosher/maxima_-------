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
// let widthEventsBlock = document.body.clientWidth - 192;
// (function() {
//     TweenMax.set('.events-skier', { left: widthEventsBlock, bottom: 36 });
//     setInterval(function() {
//         TweenMax.set('.events-skier', { left: widthEventsBlock, bottom: 36 });
//         TweenMax.to('.events-skier', 7, { left: -widthEventsBlock, bottom: -76 });
//     }, 5000);
// })();
let widthEventsBlock = document.body.clientWidth - 192;
(function() {
    TweenMax.set('.events-skier', {
        left: widthEventsBlock,
        bottom: 36
    });
    TweenMax.to('.events-skier', 7, {
        left: -widthEventsBlock,
        repeat: -1,
        repeatDelay: 1,
        bottom: -76
    });
})();
let widthWM = document.body.clientWidth - 277;
let man = '.walk-man';
const element = document.querySelector('.walk-man');

function right() {
    element.style.transform = "rotateY(0)";
    TweenMax.to(man, 4, {
        left: widthWM,
        ease: Power0.easeNone,
        onComplete: left
    });

};

right();
counters();

function left() {
    element.style.transform = "rotateY(-180deg)";
    TweenMax.to(man, 4, {
        left: 0,
        ease: Power0.easeNone,
        onComplete: right
    });
};

function counters() {
    let meters = $('.meters');
    let calories = $('.calories');
    let count;
    clearInterval(count);
    count = setInterval(function() {
        meters.text(parseInt(meters.text()) + 1);
        calories.text(Number(
                parseFloat(calories.text()) + 0.06)
            .toFixed(2));
    }, 1000);
};