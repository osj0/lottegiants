$(function () {
  function handlePCHover() {
    $('.gnb > li, .gnbbg').off('mouseenter mouseleave');

    if (window.innerWidth >= 1300) {
      $('.gnb > li, .gnbbg').hover(
        function () {
          $('.header_wrap').addClass('h_active');
        },
        function () {
          $('.header_wrap').removeClass('h_active');
        }
      );
    }
  }

function handleMobileTabs() {
  $('.gnb > li > a').off('click');

  if (window.innerWidth < 1300) {
    $('.gnb > li > a').on('click', function (e) {
      e.preventDefault();

      const $this = $(this);
      const $sub = $this.next('.sub_mn');

      if ($sub.is(':visible')) {
        $sub.slideUp();
        $this.removeClass('active'); // 닫을 때 active 제거
      } else {
        $('.sub_mn').slideUp();
        $('.gnb > li > a').removeClass('active'); // 다른 active 제거
        $sub.slideDown();
        $this.addClass('active'); // 열리는 항목에 active 추가
      }
    });
  } else {
    $('.sub_mn').removeAttr('style');
    $('.gnb_bx').removeAttr('style');
    $('.gnb > li > a').removeClass('active'); // 데스크탑에선 active 모두 제거
  }
}


  // 초기 실행
  handlePCHover();
  handleMobileTabs();

  // 리사이즈 시 이벤트 재적용
  $(window).on('resize', function () {
    handlePCHover();
    handleMobileTabs();
  });

  $('#openBtn').on('click', function () {
    $('.gnb_bx').fadeIn();
    $('.lnb_bx').fadeIn();
  });

  $('.closebtn').on('click', function () {
    $('.gnb_bx').fadeOut();
    $('.lnb_bx').fadeOut();
    $('.sub_mn').slideUp();
  });
});




//swiper 메인슬라이드
  var swiper = new Swiper(".msv_bx", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
   pagination: {
    el: ".msv_bx .swiper-pagination",
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      const number = (index + 1).toString().padStart(2, '0');
      return `<span class="${className}">${number}</span>`;
    },
  }
  });

  // 경기일정
  var swiper = new Swiper(".sch_bx", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });

    //파트너
    var swiper = new Swiper(".partner", {
      slidesPerView: 1,
      spaceBetween:0,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        500: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 6
        },
        1300: {
          slidesPerView: 8
        },
      },
    });