// ---------- LOGIN ----------
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Please fill all fields");
    return;
  }
  window.location.href = "index.html";
}

// ---------- PRODUCTS ----------
const products = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 999,
    image: "new_images/midnightlib.jpg"
  },
  {
    id: 2,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 799,
    image: "new_images/gonegirl.jpg"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 699,
    image: "new_images/atomic-habits-dots.jpg"
  },

  {
    id: 4,
    title: "Inferno",
    author: "DANTE ALIGHIERI",
    price: 599,
    image: "new_images/inferno.jpg"
  },

  {
    id: 5,
    title: "The piory of the Orange Tree",
    author: "SAMANTHA SHANNONS",
    price: 599,
    image: "new_images/orangetree.jpg"
  },

  {
    id: 6,
    title: "Annhilation",
    author: "JEFF VANDER-MEER",
    price: 599,
    image: "new_images/anhilation.jpg"
  },

  {
    id: 7,
    title: "Night Circus",
    author: "ERIN MORGENSTERN",
    price: 599,
    image: "new_images/nightcircus.jpg"
  },

  {
    id: 8,
    title: "A Tale of two Cities",
    author: "CHARLES DICKENS",
    price: 599,
    image: "new_images/taleofcity.jpg"
  },

  {
    id: 9,
    title: "Station Eleven",
    author: "EMILY ST. JOHN MANDEL",
    price: 599,
    image: "new_images/stationeleven.jpg"
  },

  {
    id: 10,
    title: "The Bear and The Nightingale",
    author: "KATHERINE ARDEN",
    price: 599,
    image: "new_images/bear.jpg"
  },

  {
    id: 11,
    title: "The house of Cerulean Sea",
    author: "TJ KLUNE",
    price: 599,
    image: "new_images/houseofcer.jpg"
  },

  {
    id: 12,
    title: "Normal People",
    author: "SALLY ROONEY",
    price: 599,
    image: "new_images/normalpeople.jpg"
  },

  {
    id: 13,
    title: "Hunger Games",
    author: "SUZANNE COLLINS",
    price: 599,
    image: "new_images/hungergames.jpg"
  },

  {
    id: 14,
    title: "DEEP WORK",
    author: "CAL NEWPORT",
    price: 599,
    image: "new_images/deepwork.jpg"
  },
  
  {
    id: 15,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    price: 799,
    image: "new_images/The-Old-Man-And-The-Sea.jpg"
  },

  {
    id: 16,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    price: 1099,
    image: "new_images/One-Hundred-Years-Of-Solitude.jpg"
  },
  {
    id: 17,
    title: "The Stranger",
    author: "Albert Camus",
    price: 699,
    image: "new_images/The-Stranger.jpg"
  },

  {
    id: 18,
    title: "1984",
    author: "George Orwell",
    price: 899,
    image: "new_images/1984.jpg"
  },

  {
    id: 19,
    title: "The Name of the Rose",
    author: "Umberto Eco",
    price: 1199,
    image: "new_images/The-Name-Of-The-Rose.jpg"
  },

  {
    id: 20,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 949,
    image: "new_images/The-Kite-Runner.jpg"
  },

  {
    id: 21,
    title: "The Trial",
    author: "Franz Kafka",
    price: 749,
    image: "new_images/The-Trial.jpg"
  },

  {
    id: 22,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    price: 999,
    image: "new_images/Norwegian-Wood.jpg"
  },

  {
    id: 23,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 859,
    image: "new_images/The-Alchemist.jpg"
  },

  {
    id: 24,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 889,
    image: "new_images/The-Catcher-In-The-Rye.jpg"
  },
  
  
];

const productList = document.getElementById("productList");
if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.title}</h3>
        <p>${p.author}</p>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ---------- CART ----------
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.id === id);

  if (item) item.qty++;
  else {
    const product = products.find(p => p.id === id);
    cart.push({...product, qty: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

if (cartItems) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    cartItems.innerHTML += `
      <div class="card">
        <img src="${item.image}" width="100">
        <div>
          <h3>${item.title}</h3>
          <p>₹${item.price}</p>
          <input type="number" min="1" value="${item.qty}"
            onchange="updateQty(${i}, this.value)">
          <p>Total: ₹${itemTotal}</p>
          <button onclick="removeItem(${i})">Remove</button>
        </div>
      </div>
    `;
  });

  cartTotal.innerText = "Total: ₹" + total;
}

function updateQty(i, qty) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[i].qty = Number(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function removeItem(i) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function checkout() {
  alert("Purchase successful 🎉");
  localStorage.removeItem("cart");
  location.reload();
}