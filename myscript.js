"use strict"

const swiper = new Swiper('.swiper', {
    loop: false,
    spaceBetween: 30,

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        450: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },

});