// let card = [];
// let btn = document.querySelectorAll('.addtocart-btn')
// let result = document.querySelector('.product-result');

// btn.forEach((ele) => {
//     ele.addEventListener("click", () => {
//         let cardProduct = ele.parentElement.parentElement;
//         let parentElem = btn.closest('.product-card');
//         let productId = btn.getAttribute('data-id');
//         let cardImage = cardProduct.querySelector('.product-img').getAttribute("src");
//         let cardName = cardProduct.querySelector('.product-name').textContent;
//         let productPrice = parseInt(cardProduct.querySelector('.product-price').textContent.replace(/\D/g, ""));

//         let existingProduct = cart.find(item => item.id === productId);

//         if (productPrice) {
//             existingProduct.quantity += 1;
//         } else {

//             card.push({

//                 pImage: cardImage,
//                 pName: cardName,
//                 pPrice: productPrice,
//                 quantity: 1
//             });
//         }




//         showProduct();
//         updateCartCount();

//     })

// })

// //Show Product

// function showProduct(item) {
//     let li = document.createElement('li');
//     // li.classList.add("cart-item");
//     li.innerHTML = `<li><img style='width: 50px;' src='${item.pImage}'>${item.pName} ${item.pPrice} </li>
//      `
//     result.appendChild(li)
// }
// function updateCartCount() {
//     document.querySelector('.cart-count').textContent = cart.length;
// }













// Load cart from localStorage or initialize empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let addCartBtn = document.querySelectorAll('.addtocart-btn');
let result = document.querySelector('.product-result');

// On page load, update cart display
updateCartDisplay();
updateCartCount();
updateTotalPrice();

addCartBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let parentElem = btn.closest('.product-card');
        let productId = btn.getAttribute('data-id');
        let productImg = parentElem.querySelector('.product-img').getAttribute("src");
        let productName = parentElem.querySelector('.product-name').textContent;
        let productPrice = parseInt(parentElem.querySelector('.product-price').textContent.replace(/\D/g, ""));

        // Check if product already exists in cart
        let existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: productId,
                pImg: productImg,
                pName: productName,
                pPrice: productPrice,
                quantity: 1
            });
        }

        saveCart();  
        updateCartDisplay();
        updateCartCount();
        updateTotalPrice();
    });
});

 
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

 
function updateCartDisplay() {
    result.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.classList.add("cart-item");
        li.innerHTML = `
            <img src="${item.pImg}" alt="${item.pName}">
            <span>${item.pName}</span>
            <span>₹${item.pPrice}</span>
            <span class="cart-qty">Qty: ${item.quantity}</span>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        result.appendChild(li);
    });

   
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let id = btn.getAttribute('data-id');
            cart = cart.filter(item => item.id !== id);
            saveCart();
            updateCartDisplay();
            updateCartCount();
            updateTotalPrice();
        });
    });
}

 
function updateCartCount() {
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalCount;
}

 
function updateTotalPrice() {
    let totalAmount = cart.reduce((sum, item) => sum + (item.pPrice * item.quantity), 0);
    document.querySelector('.total-price').textContent = `₹${totalAmount}`;
}
