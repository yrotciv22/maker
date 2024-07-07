/**
 * detail
 */

$(document).ready(function () {
	// 헤더 푸터 붙이기
	$("#header").load("../html/header2.html");
	$("#footer").load("../html/footer2.html");

	$('#unrollBtn').on('click', function () {
		$('#detailExplain').css({ 'overflow': 'visible', 'height': '100%' });
		$('#unrollBtn').css('display', 'none');
		$('#foldBtn').css('display', 'block');
	}); /*상세정보 펼치기 눌렀을때 끝*/

	$('#foldBtn').on('click', function () {
		$('#detailExplain').css({ 'overflow': 'hidden', 'height': '1200px' });
		$('#foldBtn').css('display', 'none');
		$('#unrollBtn').css('display', 'block');
	}); /*상세정보 접기 눌렀을때 끝*/

	$('#thumnail1').hover(
		function () {
			$('#thumnail').attr('src', '../image/earp-1-2.jpg');
		},
		function () {
			$('#thumnail').attr('src', '../image/earp-1-1.jpg');
		});

	$('#thumnail2').hover(
		function () {
			$('#thumnail').attr('src', '../image/earp-1-4.jpg');
		},
		function () {
			$('#thumnail').attr('src', '../image/earp-1-1.jpg');
		});

	$('#heart1').on('click', function () {
		$('#heart1').css('display', 'none');
		$('#heart2').css('display', 'inline');
	});
	$('#heart2').on('click', function () {
		$('#heart2').css('display', 'none');
		$('#heart1').css('display', 'inline');
	});

	// toLocaleString 위해서 가격은 여기서 조정
	let price = 269000;

	$('#minusBtn').on('click', function () { // 마이너스 버튼 클릭
		let a = $('#nowQuantity').val();

		if (parseInt(a) > 1) { // 1 보다 클 경우만 작동
			let now = parseInt(a) - 1;
			$('#nowQuantity').val(now);

			if (now > 1) { // 수량이 0보다 크면 진한색으로 변경
				$('#minusBtn').css('color', 'rgb(63,63,63)');
			} else { // 1 이하일시 연한색으로
				$('#minusBtn').css('color', 'rgb(189,189,189)');
			}

			$('#totalPrice').text(Number(price * now).toLocaleString() + '원');
		}
	});

	$('#plusBtn').on('click', function () { // 플러스 버튼 클릭
		let a = $('#nowQuantity').val();

		let now = parseInt(a) + 1;
		$('#nowQuantity').val(now);

		if (now > 1) { // 수량이 0보다 크면 진한색으로 변경
			$('#minusBtn').css('color', 'rgb(63,63,63)');
		} else { // 1 이하일시 연한색으로
			$('#minusBtn').css('color', 'rgb(189,189,189)');
		}

		$('#totalPrice').text(Number(price * now).toLocaleString() + '원');
	});

	$('#nowQuantity').on('keyup', function () { // 수량을 직접 '입력'할 경우
		let a = $('#nowQuantity').val();


		if (a === Number(a) || parseInt(a) > 1) { // 음수를 입력하거나 글자를 입력할 경우 value 1로 고정
			$('#totalPrice').text(Number(price * parseInt(a)).toLocaleString() + '원');
		} else {
			$('#nowQuantity').val(1);
			$('#totalPrice').text((price) + '원');
			$('#minusBtn').css('color', 'rgb(189,189,189)');
		}
	});

	$('td a').hover(
		function () {
			$(this).css('text-decoration', 'underline')
		},
		function () {
			$(this).css('text-decoration', 'none')
		}
	)


	$(window).on('scroll', function () {
		console.log($(document).scrollTop());
		console.log($('#makerBox').height());

		if ($(document).scrollTop() >= 830) {
			$('#sideCtrBar').addClass('mainMenuFixed');
			$('.slideBox').css('display', 'block')

			if ($(document).height() > 12000) {
				if ($(document).scrollTop() <= 13434) {
					$('#sideOpacity1').addClass('sideOpacity');
					$('#sideOpacity2').removeClass('sideOpacity');
				} else {
					$('#sideOpacity2').addClass('sideOpacity');
					$('#sideOpacity1').removeClass('sideOpacity');
				}
			} else {
				if ($(document).scrollTop() <= 1902) {
					$('#sideOpacity1').addClass('sideOpacity');
					$('#sideOpacity2').removeClass('sideOpacity');
				} else {
					$('#sideOpacity2').addClass('sideOpacity');
					$('#sideOpacity1').removeClass('sideOpacity');
				}
			}


		} else {
			$('#sideCtrBar').removeClass('mainMenuFixed');
			$('.slideBox').css('display', 'none')
		}

	});
});