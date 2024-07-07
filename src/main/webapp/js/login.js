/**
 * login.js 로그인 화면
 */

$(document).ready(function () {
    $("#header").load("../html/header2.html");
    $("#footer").load("../html/footer2.html");

    const validId = "admin";
    const validPassword = "1234";

    $('#login-form').on('submit', function (event) {
        event.preventDefault();

        $('#error-message').hide();

        const enteredId = $('input[name="id"]').val();
        const enteredPassword = $('input[name="password"]').val();

        if (enteredId === validId && enteredPassword === validPassword) {

            window.location.href = 'productMap.html';
        } else {

            $('#error-message').text('잘못된 아이디 혹은 비밀번호입니다.').show();
        }
    });

    // 눈깔함수
    // name="password" 인 input 태그를 찾음
    const passwordField = document.querySelector('input[name="password"]');
    // .password-toggle-icon 클래스가 적용된 <span> 태그를 찾음
    const togglePassword = document.querySelector(".password-toggle-icon");

    togglePassword.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            // togglePassword.querySelector('i') 를 사용하여 <span> 태그 안의 <i> 태그를 찾음
            togglePassword.querySelector('i').classList.remove("fa-eye");
            togglePassword.querySelector('i').classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            togglePassword.querySelector('i').classList.remove("fa-eye-slash");
            togglePassword.querySelector('i').classList.add("fa-eye");
        }
    });
});