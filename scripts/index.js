document.addEventListener("DOMContentLoaded", () => {

// 카테고리 스와이퍼
new Swiper('.category_swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
});

const tabs = document.querySelectorAll(".category_tab li");
const swiperEls = document.querySelectorAll(".curated_swiper");
const swipers = [];
// 현재 활성 상태 추적
let currentTab = tabs[0];
let currentSwiperEl = swiperEls[0];

// 초기 active 세팅
currentTab.classList.add("active");
currentSwiperEl.classList.add("active");

// swiper 생성 (기존 유지)
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

// 탭 클릭 (리팩토링)
tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        
        currentTab.classList.remove("active");
        currentSwiperEl.classList.remove("active");
        
        tab.classList.add("active");
        swiperEls[i].classList.add("active");
        
        currentTab = tab;
        currentSwiperEl = swiperEls[i];
        
        swipers[i].update();
    });
});
});

const tabWrap = document.querySelector(".recommend_tab_wrap");
const tabItems = document.querySelectorAll(".recommend_tab li");
const indicator = document.querySelector(".tab_indicator");

function moveIndicator(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = tabWrap.getBoundingClientRect();

    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - parentRect.left}px`;
    }

    // 초기 위치
    moveIndicator(document.querySelector(".recommend_tab li.active"));

    // 클릭 이벤트
    tabItems.forEach(tab => {
    tab.addEventListener("click", () => {
        moveIndicator(tab);
    });
});

// ================== recommend 탭 ==================
const recommendTabs = document.querySelectorAll(".recommend_tab li");
const recommendLists = document.querySelectorAll(".recommend_list");
const eventItems = document.querySelectorAll(".event_item");

recommendTabs.forEach(tab => {
    tab.addEventListener("click", () => {

    const target = tab.dataset.tab;

    // 탭 active
    recommendTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

        // 상품 리스트 변경
        recommendLists.forEach(list => {
        list.classList.remove("active");
        if (list.dataset.content === target) {
            list.classList.add("active");
        }
        });

        // 이벤트 섹션 변경
        eventItems.forEach(item => {
        item.classList.remove("active");
        if (item.dataset.event === target) {
            item.classList.add("active");
        }
        });

    });
});