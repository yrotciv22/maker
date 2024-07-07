/**
 * 
 */

$(document).ready(function () {
	// 헤더 푸터 붙임
	$("#header").load("../html/header2.html");
	$("#footer").load("../html/footer2.html");

	/* 좌측 필터링 박스에서 브랜드-삼성 체크한 경우 삼성 제품만 표시 */
	$('#checkBrand1').change(function () {
		if ($(this).is(':checked')) {
			$('.productItems:not(".brandSamsungItem")').css('display', 'none');
		} else {
			$('.productItems').css('display', 'block');
		}
	});

	/* 좌측 필터링 박스에서 브랜드-애플 체크한 경우 삼성 제품만 표시 */
	$('#checkBrand2').change(function () {
		if ($(this).is(':checked')) {
			$('.productItems:not(".brandAppleItem")').css('display', 'none');
		} else {
			$('.productItems').css('display', 'block');
		}
	});

	/*let isClicked = true;
	
	if (isClicked) {
		$('#checkBrand1').on('change', function() {
			$('.productItems:not(".brandSamsungItem")').css('display', 'none');
		});
		isClicked = false;
		
	} else {
		$('#checkBrand1').on('change', function() { 
			$('.productItems').css('display', 'block');
		});
	}*/ /*-> 체크될때와 해제될 때를 구분할 수 없어서 사용 안 함*/


});