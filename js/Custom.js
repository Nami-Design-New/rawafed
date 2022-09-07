$(document).ready(function () {
  //MainSlider

    var swiper = new Swiper(".MainSlider-container", {
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      effect: "fade",
      speed: 500,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  //Categories Slider
  var swiper = new Swiper(".referencesSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
  //Categories Slider
  var swiper = new Swiper(".workerCvSlider", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // countries slider
  var countriesSlider = new Swiper(".countriesSlider", {
    navigation: {
      nextEl: ".countriesSliderNext",
      prevEl: ".countriesSliderPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      type: "fraction",
    },
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
  });
  $(".countriesSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  // testimonials
  var swiper = new Swiper(".testimonialsSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
    observer: true,
    observeParents: true,
  });

    // services slider
    var servicesSlider = new Swiper(".servicesSlider", {
      navigation: {
        nextEl: ".servicesSliderNext",
        prevEl: ".servicesSliderPrev",
      },
      pagination: {
        el: ".servicesSlidePagination",
        type: "fraction",
      },
      loop: true,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
    });
    $(".servicesSlider").hover(
      function () {
        this.swiper.autoplay.stop();
      },
      function () {
        this.swiper.autoplay.start();
      }
    );
    
  // toastr
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "500",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  // test toster
  // setInterval(function doThisEveryOneSeconds() {
  //   toastr.error(" مرحبا بك في روافد نجد ");
  // }, 1000);
  // wow
  // const section = $('section');
  // for (let i = 0; i < section.length; i++) {
  //   function addWowDelay() {
  //     $('.wow', this).each(function (i) { d = i * 0.1; $(this).attr('data-wow-delay', d + "s"); });
  //   } addWowDelay();
  // }
  function addWowDelay() {
    $(
      " .countries .wow , .services .wow , .trending .wow , .accordion-item.wow , .recruitments .wow "
    ).each(function (i) {
      d = i * 0.09;
      $(this).attr("data-wow-delay", d + "s");
    });
  }
  addWowDelay();
  //spinner
  $(".spinner ").fadeOut("slow");
  //WOW js
  new WOW().init();
  // select2
  $(".select2").select2();
  $(".select2WithoutSearch").select2({
    minimumResultsForSearch: -1,
  });
  // img gallery
  $("[data-fancybox]").fancybox({
    buttons: [
      "zoom",
      // "share",
      // "slideShow",
      "fullScreen",
      // "download",
      "thumbs",
      "close",
    ],
    transitionEffect: "slide",
  });
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// validation
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
