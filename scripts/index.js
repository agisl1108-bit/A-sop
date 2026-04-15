// 틈 안 생기게
new Swiper('.category_swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
});

// Curated Essentials 카테고리 변경
const tabs = document.querySelectorAll('.category_tab li');
const swipers = document.querySelectorAll('.curated_swiper');

function setActiveTab(target) {
    tabs.forEach(t => t.classList.remove('active'));
    swipers.forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-tab="${target}"]`).classList.add('active');
    document.querySelector(`.curated_swiper.${target}`).classList.add('active');
    }
    setActiveTab('body');
    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        setActiveTab(tab.dataset.tab);
    });
});

