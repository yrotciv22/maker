
/////////////////
// 찜 바구니 js 
/////////////////

$(document).ready(function () {
    $("#header").load("../html/header2.html");
    $("#footer").load("../html/footer2.html");

    // 취소 버튼(cancelBtn) 클릭 이벤트 핸들러
    $(".cancelBtn").click(function () {
        // 현재 클릭된 취소 버튼의 부모 요소인 .card를 찾아 페이드아웃 애니메이션 실행
        $(this).closest(".card").fadeOut(500, function () {
            // 페이드아웃 애니메이션이 끝나면 카드 요소 제거
            $(this).remove();
        });
    });

    $(".modal-goCart").click(function () {
        goToCartPage();
    });

    function goToCartPage() {
        // 장바구니 페이지로 이동
        window.location.href = "cartItem.html";
    }

});