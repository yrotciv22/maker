/**
 * 오픈런 제이쿼리 
 */

$(document).ready(function () {
	// 헤더 푸터 붙임
	$("#header").load("../html/header2.html");
	$("#footer").load("../html/footer2.html");

	$('#mainImg').hover(
		function () {
			$('#mainImg').attr({
				'src': '../image/iphone15.png',
				'transition': '2s ease-out',
				'opacity': '0.3'
			});
		},
		function () {
			$('#mainImg').attr({
				'src': '../image/아이폰 프로 15 누끼버전.png',
				'transition': '2s ease-out'
			});
		});
});
/*$(document).ready(function() 끝*/