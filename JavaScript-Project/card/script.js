// Product List
const products = [
  { id: 1, name: "Smart Watch", price: 1999, desc: "Fitness tracking smartwatch.", image: "image/Menu-item-4.png" },
  { id: 2, name: "Headphones", price: 999, desc: "Noise-cancelling headphones.", image: "image/Menu-item-3.png" },
  { id: 3, name: "Bluetooth Speaker", price: 1499, desc: "Portable speaker with bass.", image: "image/Menu-item-2.png" }
];

let cart = []; // {id, name, price, image, qty}

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");
const cartItemsDiv = document.getElementById("cartItems");


// Load products
function loadProducts() {
  products.forEach((p) => {
    productGrid.innerHTML += `
      <div class="col-md-4">
        <div class="card product-card shadow-sm">
          <img src="${p.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="text-muted">${p.desc}</p>
            <p class="fw-bold">₹${p.price}</p>
            <button class="btn btn-primary w-100" onclick="openModal(${p.id})">View Details</button>
          </div>
        </div>
      </div>
    `;
  });
}

loadProducts();


// Open product modal
function openModal(id) {
  const product = products.find(p => p.id === id);

  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalDesc").innerText = product.desc;
  document.getElementById("modalPrice").innerText = product.price;

  document.getElementById("modalAddCart").onclick = () => addToCart(product);

  new bootstrap.Modal(document.getElementById("productModal")).show();
}


// ADD TO CART WITH QUANTITY SYSTEM
function addToCart(product) {

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    // Increase quantity only
    existing.qty++;
  } else {
    // Add new product with qty = 1
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}


// UPDATE CART UI
function updateCart() {

  // COUNT TOTAL ITEMS (sum of qty)
  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.innerText = totalItems;

  // CALCULATE TOTAL PRICE
  let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  totalPrice.innerText = total;

  // SHOW CART ITEMS
  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="d-flex align-items-center mb-3">
        <img src="${item.image}" width="50" class="rounded">

        <div class="ms-2">
          <h6>${item.name}</h6>
          <p class="m-0">₹${item.price} x ${item.qty} 
            = <strong>₹${item.price * item.qty}</strong>
          </p>
        </div>

        <div class="ms-auto">
          <button class="btn btn-sm btn-success" onclick="increaseQty(${item.id})">+</button>
          <button class="btn btn-sm btn-warning" onclick="decreaseQty(${item.id})">-</button>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">X</button>
        </div>
      </div>
    `;
  });
}


// Increase quantity
function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  item.qty++;
  updateCart();
}

// Decrease quantity
function decreaseQty(id) {
  const item = cart.find(p => p.id === id);

  if (item.qty > 1) {
    item.qty--;
  } else {
    // Remove item if qty = 1
    cart = cart.filter(p => p.id !== id);
  }
  updateCart();
}

// Remove entire product
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("open");
}
