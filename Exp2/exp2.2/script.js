const products = [
  { name: "Product A", price: 500 },
  { name: "Product B", price: 300 },
  { name: "Product C", price: 700 },
  { name: "Product D", price: 400 }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("filter");

function displayProducts(items) {
  container.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: ₹${product.price}</p>
    `;
    container.appendChild(card);
  });
}

filter.addEventListener("change", function () {
  let sortedProducts = [...products];

  if (filter.value === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (filter.value === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
});

displayProducts(products);
