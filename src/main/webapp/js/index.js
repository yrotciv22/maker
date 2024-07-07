/**
 * index.js
 */

$(function () {

	// 윈도우 스크롤 시 메인 메뉴 고정 
	$(window).on('scroll', function () {
		// 스크롤되는 문서의 top이 #headerBox 이상이면 메인 메뉴 고정되고 그림자 표시 
		if ($(document).scrollTop() >= $('#headerBar').height()) {
			$('#navigationBar').addClass('mainMenuFixed mainMenuShadow');
		} else {
			$('#navigationBar').removeClass('mainMenuFixed mainMenuShadow');
		}
	});
	$('#topMenu2').css('display', 'none');

	// 로그인 버튼 클릭 시 로그인 정보 출력 (-> header바, navigation바)
	$('#topLoginName').on('click', function () {
		// 글씨 및 색상 변경 : 로그인 -> admin
		$('#adminInfo').text('admin');
		$('#adminInfo').css('color', 'rgb(63,63,63)');
		// ~님 환영합니다 -> 노출
		$('#topLoginGreet').css('display', 'inline');
		// 회원가입 버튼 사라지게 하기 
		$('#topMenu3').css('display', 'block');
		$('#topMenu2').css('display', 'none');
		// 장바구니에 admin 글씨 추가 및 색상 변경 
		$('#mainBtnCart').children().css('color', 'rgb(63,63,63)');
		$('#mainBtnLoginId').css('display', 'inline');
		// 상단 헤더바에 로그아웃 버튼 추가
		$('#topLogOut').html('<a href="#">로그아웃</a>');
		$('#topLogOut').css('display', 'inline');
	});





	// 로그인 버튼 클릭 시 로그인 정보 출력 (-> header바, navigation바)
	$('#topLogOut').on('click', function () {
		// 글씨 및 색상 변경 : admin -> 로그인
		$('#adminInfo').text('로그인');
		$('#adminInfo').css('color', 'black');
		// ~님 환영합니다 -> 노출 삭제
		$('#topLoginGreet').css('display', 'none');
		// 회원가입 버튼 보이게 하기
		$('#topMenu2').css('display', 'inline');
		// 장바구니에 admin 글씨 삭제 및 색상 변경
		$('#mainBtnCart').children().css('color', 'black');
		$('#mainBtnLoginId').css('display', 'none');
		// 로그아웃 버튼 삭제
		$('#topMenuList li:last').css('display', 'none');
	});

	// '브랜드별보기 버튼' 눌렀는지 체크
	let isClicked = true;

	// '브랜드별보기 버튼' 누를 때마다 <a> 텍스트 내용 변경
	function mainMenuChange(toggle) {
		if (toggle) {
			$('#mainMenu1').text('삼성');
			$('#mainMenu2').text('애플');
			$('#mainMenu3').text('구글');
			$('#mainMenu4').text('샤오미');
		} else {
			$('#mainMenu1').text('스마트폰');
			$('#mainMenu2').text('스마트워치');
			$('#mainMenu3').text('이어폰');
			$('#mainMenu4').text('액세서리');
		}
	}

	$('#box2').css('display', 'none');

	// 브랜드별 보기 버튼 클릭시 좌측 메뉴가 브랜드명 노출로 변경
	$('#brandSearchBtn').on('click', function () {
		// 첫 클릭 시 <a> 태그 브랜드명으로 변경
		// 다시 클릭하면 <a> 태그 카테고리명으로 변경
		mainMenuChange(isClicked);

		//if (isClicked) {
		if ($('#brandSearchBtn').text() == '✨브랜드별✨') {
			$('#brandSearchBtn').text('카테고리별');
			isClicked = false;

			// hover() : 마우스 올리면 브랜드별 로고 이미지가 보임
			$('.mainMenuIcon').hover(function () {
				if ($('#brandSearchBtn').text() == '카테고리별') {
					$('#box1').css('display', 'none');
					$('#box2').css('display', 'block');
				}

				// hover() : 마우스 떼면 브랜드명 표시 (디폴트)
			}, function () {
				$('#box1').css('display', 'block');
				$('#box2').css('display', 'none');
				// 이미 누른 상태에서 다시 돌아가지 않게 isClicked에 반대값 대입
				mainMenuChange(!isClicked);

			}); // hover 함수 끝

		} else {
			$('#brandSearchBtn').text('✨브랜드별✨');
			isClicked = true;

		}
	});


	// moveToTop 이미지 클릭 시 top으로 이동
	$('#moveToTop').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	});


	function popOpen() {
		var modalPop = $('.modal-wrap');
		var modalBg = $('.modal-bg');

		$(modalPop).show();
		$(modalBg).show();
	}

	function popClose() {
		var modalPop = $('.modal-wrap');
		var modalBg = $('.modal-bg');

		$(modalPop).hide();
		$(modalBg).hide();
	}


}); //  $(function() 끝