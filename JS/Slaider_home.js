const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween:0,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
                1200:{
                    slidesPerView: 2,
                    spaceBetween:0
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween:0
                },
                768:{
                    slidesPerView: 1,
                    spaceBetween:0 
                },
                576:{
                    slidesPerView: 1,
                    spaceBetween:0 
                },
                320:{
                    slidesPerView: 1,
                    spaceBetween:0 
                },
            }
  });
