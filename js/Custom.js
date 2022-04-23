$(document).ready(function () {
  //MainSlider
  var swiper = new Swiper('.MainSlider-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Categories Slider
  var swiper = new Swiper('.referencesSlider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
    slidesPerView: 'auto',
    spaceBetween: 5,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });



  function addWowDelay() {
    $('.container .wow').each(function (i) { d = i * 0.1; $(this).attr('data-wow-delay', d + "s"); });
  } addWowDelay();


  //spinner
  $(".spinner ").fadeOut("slow");
  // tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  //select2
  $('.select2').select2();
  //WOW js
  new WOW().init();
  //dropify
  $('.dropify').dropify();
});