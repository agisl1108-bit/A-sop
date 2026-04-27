document.addEventListener("DOMContentLoaded", () => {

    // 카테고리 스와이퍼
    new Swiper('.category_swiper', {
        slidesPerView: 4,
        spaceBetween: 0,
    });

    const tabs = document.querySelectorAll(".category_tab li");
    const swiperEls = document.querySelectorAll(".curated_swiper");
    const swipers = [];
    // 🔥 초기 상태 강제 세팅
    tabs[0].classList.add("active");
    swiperEls[0].classList.add("active");

    // swiper 생성
    swiperEls.forEach((el, i) => {
        swipers[i] = new Swiper(el, {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
            speed: 800,
            loop: false,
            watchOverflow: true,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: el.querySelector(".swiper-button-next"),
                prevEl: el.querySelector(".swiper-button-prev"),
            },
            scrollbar: {
                el: el.querySelector(".swiper-scrollbar"),
                draggable: false
            }
        });
    });

    // 탭 클릭
    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            swiperEls.forEach(el => el.classList.remove("active"));
            swiperEls[i].classList.add("active");
            setTimeout(() => {
                swipers[i].update();
            }, 50);
        });
    });
});

