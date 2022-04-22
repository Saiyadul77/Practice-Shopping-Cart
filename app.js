function productUpdate(product, price, isCreasing) {
    const productItem = document.getElementById(product + '-number');
    let productQuantity = productItem.value;
    if (isCreasing == true) {
        productQuantity = parseInt(productQuantity) + 1;
    }
    else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1;
    }
    productItem.value = productQuantity;
    let productPrice = document.getElementById(product + '-total')
    productPrice.innerText = productQuantity * price;
}
//phone
document.getElementById('phone-plus').addEventListener('click', function () {
    productUpdate('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productUpdate('phone', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
    productUpdate('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    productUpdate('case', 59, false);
})
