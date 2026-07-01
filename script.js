// ============================
// KSHOP SCRIPT
// ============================

let cart = [];
let total = 0;

// Cart Counter
const cartCount = document.getElementById("cartCount");

// Add To Cart
function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    cartCount.innerHTML = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart.");

}

// Load Cart
window.onload = function(){

    let savedCart = localStorage.getItem("cart");

    if(savedCart){

        cart = JSON.parse(savedCart);

        cartCount.innerHTML = cart.length;

    }

}

// ============================
// SEARCH
// ============================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let products=document.querySelectorAll(".product-card");

products.forEach(function(product){

let title=product.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}

// ============================
// SCROLL EFFECT
// ============================

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 20px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

// ============================
// NEWSLETTER
// ============================

const subscribeBtn=document.querySelector(".newsletter button");

if(subscribeBtn){

subscribeBtn.onclick=function(){

const email=document.querySelector(".newsletter input").value;

if(email==""){

alert("Please enter email.");

return;

}

alert("Thank You For Subscribing!");

document.querySelector(".newsletter input").value="";

}

}
// =======================================
// ADVANCED CART SYSTEM
// Paste below existing script.js code
// =======================================

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

// Save Cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartData));
}

// Update Cart Counter
function updateCartCounter() {

    const count = document.getElementById("cartCount");

    if(count){
        count.innerText = cartData.length;
    }

}

// Display Cart Items
function displayCart(){

    const container = document.getElementById("cartContainer");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    if(cartData.length===0){

        container.innerHTML = `
        <h2>Your Cart is Empty 😔</h2>
        <p>Go back and add some products.</p>
        `;

        return;
    }

    cartData.forEach((item,index)=>{

        total += item.price;

        container.innerHTML += `

        <div class="cart-box">

            <h3>${item.name}</h3>

            <p>Price : ₹${item.price}</p>

            <button onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    });

   const itemCount = document.getElementById("itemCount");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandTotal");

if (itemCount) itemCount.innerHTML = cartData.length;
if (subtotal) subtotal.innerHTML = "₹" + total;
if (grandTotal) grandTotal.innerHTML = "₹" + total;

}

// Remove Product

function removeItem(index){

    cartData.splice(index,1);

    saveCart();

    displayCart();

    updateCartCounter();

}

// Checkout

const checkoutBtn=document.getElementById("checkoutBtn");

if(checkoutBtn){

checkoutBtn.onclick=function(){

window.location="checkout.html";

}

}

// Run

displayCart();

updateCartCounter();
// =======================================
// CART EXTRA FUNCTIONS
// Paste at END of script.js
// =======================================

// Continue Shopping
const continueBtn = document.getElementById("continueShopping");

if (continueBtn) {

continueBtn.onclick = function () {

window.location = "index.html";

};

}

// Clear Cart

const clearBtn = document.getElementById("clearCart");

if (clearBtn) {

clearBtn.onclick = function () {

if (confirm("Are you sure you want to clear the cart?")) {

localStorage.removeItem("cart");

cartData = [];

displayCart();

updateCartCounter();

}

};

}

// Coupon Apply

const applyCoupon = document.querySelector(".coupon-input button");

if (applyCoupon) {

applyCoupon.onclick = function () {

const coupon = document.querySelector(".coupon-input input").value;

if (coupon.toUpperCase() === "KSHOP10") {

alert("🎉 Coupon Applied! 10% Discount");

} else if (coupon === "") {

alert("Please enter a coupon code.");

} else {

alert("Invalid Coupon Code");

}

};

}
const placeOrderBtn = document.getElementById("placeOrderBtn");

if (placeOrderBtn) {

placeOrderBtn.addEventListener("click", function () {

const fullName = document.getElementById("fullName").value.trim();

const phone = document.getElementById("phone").value.trim();

const address = document.getElementById("address").value.trim();

const payment = document.querySelector('input[name="payment"]:checked');

if(fullName === ""){
alert("Please enter your full name.");
return;
}

if(phone.length !== 10){
alert("Enter a valid 10 digit mobile number.");
return;
}

if(address === ""){
alert("Please enter your delivery address.");
return;
}

if(payment == null){
alert("Please select a payment method.");
return;
}

document.getElementById("successPopup").style.display="flex";

localStorage.removeItem("cart");

cart = [];
cartData = [];

updateCartCounter();

const orderId = "KS" + Math.floor(Math.random() * 900000 + 100000);

const orderNumber = document.getElementById("orderNumber");

if (orderNumber) {
    orderNumber.innerHTML = "Order ID : " + orderId;
}

const today = new Date();

const orderDate = document.getElementById("orderDate");

if (orderDate) {
    orderDate.innerHTML =
        today.toLocaleDateString() + " | " + today.toLocaleTimeString();
}

});

}

function goHome(){

window.location.href="index.html";

}
