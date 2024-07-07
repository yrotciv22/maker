/**
 * cartItem.js 징바구니
 */

function gotoPurchase() {
    // 구매하기 버튼 누를 시 구매하기 페이지로 이동
    window.location.href = "purchase.html";
}

$(document).ready(function () {

    $("#header").load("../html/header2.html");
    $("#footer").load("../html/footer2.html");

    /* 장바구니 항복 테이블 cart-table 정보*/
    // 테이블 헤더의 체크박스 클릭 이벤트 처리
    $("#cart-table thead input[type='checkbox']").click(function () {
        // 헤더의 체크박스 상태에 따라 모든 행의 체크박스 상태 변경
        $("#cart-table tbody input[type='checkbox']").prop("checked", this.checked);
        updateTotalCheckbox();
    });


    /* 해결안됨 */
    // 전체 선택 체크박스 상태 업데이트 함수
    function updateTotalCheckbox() {
        // tbody의 체크박스 개수와 체크된 체크박스 개수를 확인
        const totalCheckboxes = $("#cart-table tbody input[type='checkbox']").length;

        const checkedCheckboxes = $("#cart-table tbody input[type='checkbox']:checked").length;

        // 모든 체크박스가 선택되어 있다면 total-checkbox 선택
        $("#total-checkbox").prop("checked", totalCheckboxes === checkedCheckboxes);
    }


    // 선택 삭제 버튼 클릭 이벤트 처리
    $("#deleteSelectedBtn").click(function () {
        // 선택된 행 삭제
        $("#cart-table tbody input[type='checkbox']:checked").closest("tr").remove();
        // 가격 테이블 업데이트
        updatePriceTable();
        updateTotalCheckbox();
    });
    /* 가격 테이블 price-table 정보 */
    let chkAmount = 0;
    let totalAmount = 0;

    // 체크박스 상품 선택 시
    $(':checkbox').on('change', function () {
        if ($(this).is(':checked')) {
            chkAmount += Number($(this).val());
        } else {
            chkAmount -= Number($(this).val());
        }
        showAmount();
        updateTotalCheckbox();
    });

    $('#total-checkbox').change(function () {
        // 체크박스가 해제되었을 때
        if (!$(this).is(':checked')) {
            // totalAmount 변수를 0으로 설정
            totalAmount = 0;
        }
    });

    // 총 결제 예상 금액 보여줌
    function showAmount() {
        totalAmount = chkAmount;
        $('#totalAmount').text(totalAmount.toLocaleString() + '원');
    }

});