// 공통 js
const searchBtn = document.querySelector('.icon.search');
const overlay = document.getElementById('search_overlay');
const closeBtn = document.querySelector('.close_btn');
const input = document.querySelector('.search_box input');

// 열기
searchBtn.addEventListener('click', () => {
overlay.classList.add('active');

// 스크롤 막기
document.body.style.overflow = 'hidden';

// input 자동 포커스
setTimeout(() => {
        input.focus();
    }, 100);
});

// 닫기 (X 버튼)
closeBtn.addEventListener('click', closeSearch);

// 배경 클릭 시 닫기
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeSearch();
    }
});

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
    }
});

function closeSearch() {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {

// 띠배너 닫기
const closeBtn1 = document.querySelector('.banner_close');
const banner = document.getElementById('top_banner');
closeBtn1.addEventListener('click', () => {
    banner.style.display = 'none';
});

// 슬라이드
const items = document.querySelectorAll('#top_banner .banner_item');
let index = 0;

// 첫 번째 보이게
items[0].classList.add('active');

setInterval(() => {
    const current = items[index];
    current.classList.remove('active');
    current.classList.add('prev');
    index = (index + 1) % items.length;
    const next = items[index];
    next.classList.add('active');
    setTimeout(() => {
        current.classList.remove('prev');
    }, 500);
    }, 10000);
});