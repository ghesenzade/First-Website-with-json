// import Swiper from 'swiper/swiper-bundle.mjs';
// import 'swiper/swiper-bundle.css';
//     var swiper = new Swiper('.swiper', {
//         effect: 'cube',
//         grabCursor: true,
//         cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//         },
//         pagination: {
//         el: '.swiper-pagination',
//         },
// });

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});