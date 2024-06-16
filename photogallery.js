var Slider = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
       
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 6,
          spaceBetween: 10
        },
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: Slider,
    },
  });