AOS.init({
  duration:1000,
  once:true,
  disable:'mobile'
});

let swiper = new Swiper(".slide_characters", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop:true,
    breakpoints:{
      320:{
        slidesPerView: 1.1,
        spaceBetween: 19,
      },
      768:{
        slidesPerView: 2.2,
      },
      991:{
        slidesPerView: 2.8,
      },
      1200:{
        slidesPerView: 3.5,
      },
    },
    pagination: {
      clickable: true,
    },
  });