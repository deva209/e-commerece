const products = [
  {
    name: "Wireless Earphones",
    price: "₹1999",
    description: "Noise cancelling, Bluetooth enabled Eaphones.",
    image: "image/wireless-earphones-earpods-isolated-on-260nw-2030446370.webp"
  },
  {
    name: "Smart Watch",
    price: "₹3499",
    description: "Track your health and stay connected.",
    image: "image/D_Q_NP_2X_927230-MLA82683596615_022025-V.webp"
  },
  {
    name: "Bluetooth Speaker",
    price: "₹1499",
    description: "Loud and clear audio with deep bass.",
    image: "image/black-jbl-portable-audio-video-jblxtreme4blkam-64_600.webp"
  },
  {
    name: "USB Type-C Charger",
    price: "₹499",
    description: "Fast charging supported 25W adapter.",
    image: "image/D_Q_NP_2X_927230-MLA82683596615_022025-V.webp"
  },
  {
    name: "Wireless Mouse",
    price: "₹799",
    description: "Ergonomic design with long battery life.",
    image: "image/wireless-mouse-573787.webp"
  },
];

const cartCount = document.getElementById("cart-count");
let count = 0;

const productContainer = document.querySelector(".product-section");
products.forEach((p, i) => {
  const productCard = document.createElement("div");
  productCard.className = "product";
  productCard.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onclick="addToCart(${i})">Add to Cart</button>
    <br/><br/>
    <button onclick="openModal(${i})" style="background:#555;">View Details</button>
  `;
  productContainer.appendChild(productCard);
});

function addToCart(index) {
  count++;
  cartCount.textContent = count;
  cartCount.style.transform = "scale(1.3)";
  setTimeout(() => (cartCount.style.transform = "scale(1)"), 200);
}

const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const closeModal = document.querySelector(".close-modal");

function openModal(index) {
  const product = products[index];
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalPrice.textContent = "Price: " + product.price;
  modal.style.display = "flex";
}
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

