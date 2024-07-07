/**
 * purchaseInfo.js 
 * 주문하기(구매하기 purchase.html)
 */

document.addEventListener('DOMContentLoaded', function () {
    // 헤더 푸터 붙임
    $("#header").load("../html/header2.html");
    $("#footer").load("../html/footer2.html");

    const quantityInput = document.querySelector('.quantity-input');
    const unitPriceElement = document.querySelector('.unit-price');
    const totalPriceElement = document.getElementById('totalprice');
    const deleteButton = document.querySelector('.deleteButton');
    const productList = document.querySelector('.product-list');

    function updateTotalPrice() {
        const unitPrice = parseInt(unitPriceElement.textContent.replace(/,/g, ''));
        const quantity = parseInt(quantityInput.value);
        const totalPrice = unitPrice * quantity;
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }

    quantityInput.addEventListener('input', updateTotalPrice);

    deleteButton.addEventListener('click', function () {
        productList.remove();
        totalPriceElement.textContent = '0';
    });

    updateTotalPrice();
});

document.addEventListener('DOMContentLoaded', function () {
    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.product-list').forEach(function (productList) {
            const unitPrice = parseInt(productList.querySelector('.unit-price').innerText.replace(/,/g, ''));
            const quantity = parseInt(productList.querySelector('.quantity-input').value);
            total += unitPrice * quantity;
        });

        document.getElementById('totalPrice').innerText = total.toLocaleString() + '원';

        const discount = couponDiscount;
        document.getElementById('discount').innerText = '-' + discount.toLocaleString() + '원';

        const finalTotal = total - discount + deliveryFee;
        document.getElementById('finalPrice').innerText = finalTotal.toLocaleString() + '원';
    }

    document.querySelectorAll('.deleteButton').forEach(function (button) {
        button.addEventListener('click', function () {
            const productList = button.closest('.product-list');
            if (productList) {
                productList.remove();
                updateTotalPrice();
            }
        });
    });

    document.querySelectorAll('.quantity-input').forEach(function (input) {
        input.addEventListener('input', updateTotalPrice);
    });

    let couponDiscount = 0;
    const deliveryFee = 2500;  // 배달료 고정 값

    document.getElementById('couponForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const couponCode = document.getElementById('couponCode').value.trim();

        if (couponCode === '쿠폰') {
            document.getElementById('couponimageContainer').style.display = 'block';

            let total = 0;
            document.querySelectorAll('.product-list').forEach(function (productList) {
                const unitPrice = parseInt(productList.querySelector('.unit-price').innerText.replace(/,/g, ''));
                const quantity = parseInt(productList.querySelector('.quantity-input').value);
                total += unitPrice * quantity;
            });

            couponDiscount = total * 0.10;
        } else {
            alert('유효하지 않은 쿠폰 코드입니다.');
            couponDiscount = 0;
        }

        updateTotalPrice();
    });

    const paymentOptions = document.querySelectorAll('.payment-option');
    const paymentMethodInput = document.getElementById('payment-method');

    paymentOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            paymentOptions.forEach(function (opt) {
                opt.classList.remove('selected');
            });

            option.classList.add('selected');

            const selectedMethod = option.getAttribute('data-method');
            paymentMethodInput.value = selectedMethod;
        });
    });
    updateTotalPrice();
});

function buyerInfo() {
    const buyerName = document.getElementById("buyer-name").value;
    const buyerPhone = document.getElementById("buyer-phone").value;

    document.getElementById("recipient-name").value = buyerName;
    document.getElementById("recipient-num").value = buyerPhone;
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    window.location.href = 'productMap.html'; // 메인 화면으로 이동
}