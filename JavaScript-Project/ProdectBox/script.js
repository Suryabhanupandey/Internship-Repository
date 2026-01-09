
let cart = [];
let addCartBtn = document.querySelectorAll('.addtocart-btn');
let result = document.querySelector('.product-result');

addCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let parentElem = btn.closest('.card');
        let productId = btn.getAttribute('data-id');
        let productImg = parentElem.querySelector('.product-img').getAttribute("src");
        let productName = parentElem.querySelector('.product-name').textContent;
        let productPrice = parseInt(parentElem.querySelector('.product-price').textContent.replace(/\D/g, ""));

        // Check if product already exists in cart
        let existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1; // increase quantity
        } else {
            cart.push({
                id: productId,
                pImg: productImg,
                pName: productName,
                pPrice: productPrice,
                quantity: 1
            });
        }

        updateCartDisplay();
        updateCartCount();
        updateTotalPrice();
    });
});

// Update cart display
function updateCartDisplay() {
    result.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `
            <img src='${item.pImg}'> 
            <span>${item.pName}</span> 
            <span>Price: ${item.pPrice} Rs</span> 
            <span class="qty-badge">${item.quantity}</span>
        `;
        result.appendChild(li);
    });
}


// Update cart count
function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

// Update total price
function updateTotalPrice() {
    let totalAmount = cart.reduce((sum, item) => sum + (item.pPrice * item.quantity), 0);
    document.querySelector('.total-price').textContent = totalAmount;
}

