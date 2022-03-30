$(document).ready(function(){
    let gnb = $('.gnb');
    // let gnb_bg = $('.gnb-bg');

    // $('.gnb').mouseenter(function(){
    //     gnb_bg.addClass('gnb-bg-278');
    // })

    // ====================================================
    // 1. 모달창 생성
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    modal_close.click(function(){
        modal.fadeOut(500);
    });

    // ====================================================

     // ====================================================
    // 2. gnb-list에 호버하면 .gnb-bg를 슬라이드 다운해
    
    let gnb_list = $('.gnb-list');
    let gnb_bg = $('.gnb-bg');
    let submenu = $('.submenu');
    let q_r = $('.q-r');
    let gnb_ice = $('.gnb-ice');
    let header_bottom = $('.header-bottom');
    let header = $('.header');

    let top_menu_wrap = $('.top-menu-wrap')

    

    header_bottom.mouseenter(function(){
        header_bottom.addClass('header-bottom-active');
        // gnb_bg.stop().slideDown(400);
        // submenu.stop().fadeIn();
        // q_r.stop().fadeIn();
        gnb_ice.stop().delay(300).fadeIn(300);
    });

    header_bottom.mouseleave(function(){
        header_bottom.removeClass('header-bottom-active');
        // gnb_bg.stop().slideUp(400);
        // submenu.stop().fadeOut();
        // q_r.stop().fadeOut();
        gnb_ice.stop().fadeOut(0);
    });

    // ====================================================



    // ====================================================
    // 3. 스크롤 하면 배너 말려올라감
    let main_banner = $('.main-banner');
    let main_banner_top_big = $('.main-banner-top-big');

    // main_banner.css('background-color', 'red');
    // main_banner.mouseleave(function(){
    //     main_banner_top_big.css('height', 0);
    // });

    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > 140) {
            main_banner_top_big.addClass('main-banner-top-big-active');
        }
    });
      // ====================================================

    // ====================================================
    // 4. family site 버튼
    let footer_family_bt = $('.footer-family-bt');
    let bt_off = $('.bt-off');
    // let bt_on = $('.bt-on');

    let family_site_list = $('.family-site-list');
    let temp = 1;
    
    footer_family_bt.click(function(){
        bt_off.toggleClass('bt-on');

        if(temp == 1) {
            family_site_list.addClass('family-active');
            temp = 2;
        } else {
            family_site_list.removeClass('family-active');
            temp = 1;
        }
        console.log(temp);

    });

    // ====================================================
    
    // ====================================================
    // 5. 메인 슬라이드 영역
    new Swiper('.sw-banner-slide',{
        slidePerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // touchRatio: 0,
        navigation: {
            nextEl: '.sw-banner-slide-next',
            prevEl: '.sw-banner-slide-prev',
        },
        pagination: {
            el: ".sw-banner-slide-pg",
            clickable: true,
        },
    });

    // ====================================================

    // ====================================================
    // 6. BR EVENT 슬라이드
    new Swiper('.sw-event-box',{
        slidesPerView: 4,
        slidesPerGroup: 4,

        pagination: {
            el: '.sw-event-pg',
            clickable: true,
            type: 'bullets'
        },
        touchRatio: 0
    });

    // ====================================================
});