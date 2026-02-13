let cart = JSON.parse(localStorage.getItem("cart")) || [];
const div = document.getElementById("cart");
const totalEl = document.getElementById("total");

let total = 0;

if (cart.length === 0) {
  div.innerHTML = "<p>Cart is empty</p>";
} else {
  cart.forEach((item, i) => {
    total += item.price * item.quantity;
    div.innerHTML += `
      <p>
        ${item.name} — ₹${item.price} × ${item.quantity}
        <button onclick="removeItem(${i})">❌</button>
      </p>
    `;
  });
}

totalEl.innerText = "Total: ₹" + total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}