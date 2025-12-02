
// ===== sample products =====
const products = [
    {
        id: 1,
        name: "Basic T-Shirt",
        price: 399,
        image: "shirt.jpg"
    },
    {
        id: 2,
        name: "Watch",
        price: 1199,
        image: "watch.jpeg"
    },
    {
        id: 3,
        name: "Sneakers",
        price: 2499,
        image: "shoe.jpeg"
    },
    {
        id: 4,
        name: "Glasess",
        price: 299,
        image: "glass.jpeg"
    }
];

let cart = [];

// render products
const grid = document.getElementById("products-grid");
products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-info">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
            <button data-id="${p.id}">Add to cart</button>
        </div>
    `;
    grid.appendChild(card);
});

// add to cart
grid.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        const id = parseInt(e.target.dataset.id);
        const prod = products.find(x => x.id === id);
        if(prod){
            cart.push(prod);
            updateCartCount();
        }
    }
});

function updateCartCount(){
    document.getElementById("cart-count").textContent = cart.length;
}

// cart modal
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

cartBtn.addEventListener("click", function(e){
    e.preventDefault();
    showCart();
});
closeCartBtn.addEventListener("click", hideCart);

function showCart(){
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotalEl.textContent = total;
    cartModal.classList.remove("hidden");
}

function hideCart(){
    cartModal.classList.add("hidden");
}
