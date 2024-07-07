/**
 * footer.js
 * 
 **/

$(document).ready(function () {
    // 페이지 맨 위로 이동하는 함수
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // moveToTopBox 클릭 시 scrollToTop() 함수 실행
    document.getElementById('moveToTopBox').addEventListener('click', scrollToTop);
});