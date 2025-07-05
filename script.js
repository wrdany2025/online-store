const products = [
  { id: 1, name: "Rose Bliss", price: 35, img: "images/1.jpg" },
  { id: 2, name: "Midnight Oud", price: 42, img: "images/2.jpg" },
  { id: 3, name: "Amber Vanilla", price: 38, img: "images/3.jpg" },
  { id: 4, name: "Citrus Fresh", price: 29, img: "images/4.jpg" },
  { id: 5, name: "Leather Touch", price: 40, img: "images/5.jpg" },
  { id: 6, name: "Jasmine Musk", price: 33, img: "images/6.jpg" },
  { id: 7, name: "Dark Wood", price: 45, img: "images/7.jpg" },
  { id: 8, name: "Aqua Breeze", price: 30, img: "images/8.jpg" }
];

const cart = [];

function renderProducts() {
  const container = document.getElementById("products");
  products.forEach((product) => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(el);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart");
  const totalEl = document.getElementById("total");
  cartEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartEl.appendChild(li);
  });

  totalEl.textContent = "Total: $" + total;
}

function clearCart() {
  cart.length = 0;
  renderCart();
}

renderProducts();