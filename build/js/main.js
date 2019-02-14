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
    TweenMax.set('.events-skier', { left: widthEventsBlock, bottom: 36 });
    TweenMax.to('.events-skier', 7, {
        left: -widthEventsBlock,
        repeat: -1,
        repeatDelay: 1,
        bottom: -76
    });
})();
let widthWM = document.body.clientWidth - 154;
let man = '.walk-man';
const element = document.querySelector('.walk-man');
const style = getComputedStyle(element);
const left = style.left;
console.log(left);
(function() {
    setInterval(function() {
        TweenMax.to(man, 7, { left: widthWM });
        if (left === widthWM) {
            TweenMax.set(man, { transform: rotateY('180deg') });
            TweenMax.to(man, 7, { left: -widthWM });
        } else if (left === 0) {
            TweenMax.set(man, { transform: rotateY('-180deg') });
            TweenMax.to(man, 7, { left: widthWM });
        } else {
            console.log('что-то не так');
        }
        //     }, 5000);
    })
})();