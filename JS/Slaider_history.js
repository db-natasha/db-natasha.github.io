const swiper = new Swiper('.swiper', {
    loop: true,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
    slidesPerView: 3,
    spaceBetween:35, 
    breakpoints: {
        1200: {
            spaceBetween:30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween:30
        },
        768:{
            slidesPerView: 2,
            spaceBetween:29
        },
        576:{
            slidesPerView: 1,
            spaceBetween:20
        },
        320:{
            slidesPerView: 1,
            spaceBetween:20 
        },
    }
});
