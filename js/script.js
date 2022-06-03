var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 90,
    effect: 'slide',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        425: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
  });

  var swiper = new Swiper('.swiper2', {
    loop: true,
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 100,
    centeredSlides: true,
    initialSlide: 1,
    
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    speed: 4000,
    pagination: {
        el: '.swiper-pagination',
      },
    });