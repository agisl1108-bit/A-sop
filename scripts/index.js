document.addEventListener("DOMContentLoaded", () => {

  /* ================== Curated ================== */

    new Swiper('.category_swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
    });

    const tabs = document.querySelectorAll(".category_tab li");
    const swiperEls = document.querySelectorAll(".curated_swiper");
    const swipers = [];

    let currentTab = tabs[0];
    let currentSwiperEl = swiperEls[0];

    currentTab.classList.add("active");
    currentSwiperEl.classList.add("active");

    swiperEls.forEach((el, i) => {
    swipers[i] = new Swiper(el, {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        speed: 800,
        observer: true,
        observeParents: true,
        navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev"),
        },
        scrollbar: {
        el: el.querySelector(".swiper-scrollbar"),
        }
    });
    });

    setTimeout(() => {
    swipers[0].update();
    swipers[0].scrollbar.updateSize();
    }, 50);

    tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        currentTab.classList.remove("active");
        currentSwiperEl.classList.remove("active");

        tab.classList.add("active");
        swiperEls[i].classList.add("active");

        currentTab = tab;
        currentSwiperEl = swiperEls[i];

        setTimeout(() => {
        swipers[i].update();
        swipers[i].scrollbar.updateSize();
        swipers[i].slideTo(0);
        }, 50);
    });
    });


  /* ================== Recommend ================== */

    const tabWrap = document.querySelector(".recommend_tab_wrap");
    const tabItems = document.querySelectorAll(".recommend_tab li");
    const indicator = document.querySelector(".tab_indicator");

    function moveIndicator(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = tabWrap.getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - parentRect.left}px`;
    }

    moveIndicator(document.querySelector(".recommend_tab li.active"));

    tabItems.forEach(tab => {
    tab.addEventListener("click", () => {
        moveIndicator(tab);
    });
    });

    const recommendTabs = document.querySelectorAll(".recommend_tab li");
    const recommendLists = document.querySelectorAll(".recommend_list");
    const eventItems = document.querySelectorAll(".event_item");

    recommendTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.tab;

        recommendTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        recommendLists.forEach(list => {
        list.classList.remove("active");
        if (list.dataset.content === target) {
            list.classList.add("active");
        }
        });

        eventItems.forEach(item => {
        item.classList.remove("active");
        if (item.dataset.event === target) {
            item.classList.add("active");
        }
        });
    });
    });


  /* ================== 띠배너 ================== */

    const slides = document.querySelectorAll(".banner_slide");
    let index = 0;

    if (slides.length === 0) return;

    slides[0].classList.add("active");

    setInterval(() => {

    const current = slides[index];
    const nextIndex = (index + 1) % slides.length;
    const next = slides[nextIndex];

    next.classList.add("next");

    next.offsetHeight; // 강제 리플로우

    current.classList.remove("active");
    current.classList.add("prev");

    next.classList.remove("next");
    next.classList.add("active");

    setTimeout(() => {
        current.classList.remove("prev");
    }, 600);

    index = nextIndex;

    }, 5000);

});