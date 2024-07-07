/**
 * 카운트다운 타이머 자바스크립트 
 */

window.onload = function() {

function upDateTimer() {
	const future = Date.parse('2024/06/18 00:00:00');
	const now = new Date();
	const diff = future - now;

	console.log

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const mins = Math.floor(diff / (1000 * 60));
	const secs = Math.floor(diff / 1000);

	const d = days;
	const h = hours - days * 24;
	const m = mins - hours * 60;
	const s = secs - mins * 60;
	
	document.getElementById('timer')
	.innerHTML = 
	'<div>' + d + '</div>' + '<span>:</span>' +
	'<div>' + h + '</div>' + '<span>:</span>' +
	'<div>' + m + '</div>' + '<span>:</span>' +
	'<div>' + s + '</div>';
} /*upDateTimer() 끝*/

upDateTimer();

setInterval(upDateTimer, 1000);

};