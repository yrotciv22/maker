/**
 * 
 */

 $(document).ready(function() {
	
	/* 동적으로 타이머를 생성하는 함수 */
	function updateTimer() {
	    const future = Date.parse("2024/06/18 00:00:00");
	    const now = new Date();
	    const diff = future - now;
	
	    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	    const hours = Math.floor(diff / (1000 * 60 * 60));
	    const mins = Math.floor(diff / (1000 * 60));
	    const secs = Math.floor(diff / 1000);
	
	    const d = days;
	    const h = hours - days * 24;
	    const m = mins - hours * 60;
	    const s = secs - mins * 60;
		
		$('#openrunItem1').html(
			'<h1>타임 세일 종료까지 남은 시간</h1>' + 
	    	'<div>' + d + '<span>일</span></div>' +
	    	'<div>' + h + '<span>시간</span></div>' +
	    	'<div>' + m + '<span>분</span></div>' +
	    	'<div>' + s + '<span>초</span></div>'
		);
	}
	
	/* 1초마다 해당 함수 실행하여 카운트 */
	setInterval(updateTimer, 1000);
	
 });