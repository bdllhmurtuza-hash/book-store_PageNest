// ---------- LOGIN ----------
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Please fill all fields");
    return;
  }
  window.location.href = "/home";
}

// ---------- PRODUCTS ----------
const products = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 999,
    image: "static/new_images/midnightlib.jpg"
  },
  {
    id: 2,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 799,
    image: "static/new_images/gonegirl.jpg"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 699,
    image: "static/new_images/atomic-habits-dots.jpg"
  },

  {
    id: 4,
    title: "Inferno",
    author: "DANTE ALIGHIERI",
    price: 599,
    image: "static/new_images/inferno.jpg"
  },

  {
    id: 5,
    title: "The piory of the Orange Tree",
    author: "SAMANTHA SHANNONS",
    price: 1399,
    image: "static/new_images/orangetree.jpg"
  },

  {
    id: 6,
    title: "Annhilation",
    author: "JEFF VANDER-MEER",
    price: 659,
    image: "static/new_images/anhilation.jpg"
  },

  {
    id: 7,
    title: "Night Circus",
    author: "ERIN MORGENSTERN",
    price: 549,
    image: "static/new_images/nightcircus.jpg"
  },

  {
    id: 8,
    title: "A Tale of two Cities",
    author: "CHARLES DICKENS",
    price: 739,
    image: "static/new_images/taleofcity.jpg"
  },

  {
    id: 9,
    title: "Station Eleven",
    author: "EMILY ST. JOHN MANDEL",
    price: 799,
    image: "static/new_images/stationeleven.jpg"
  },

  {
    id: 10,
    title: "The Bear and The Nightingale",
    author: "KATHERINE ARDEN",
    price: 559,
    image: "static/new_images/bear.jpg"
  },

  {
    id: 11,
    title: "The house of Cerulean Sea",
    author: "TJ KLUNE",
    price: 849,
    image: "static/new_images/houseofcer.jpg"
  },

  {
    id: 12,
    title: "Normal People",
    author: "SALLY ROONEY",
    price: 489,
    image: "static/new_images/normalpeople.jpg"
  },

  {
    id: 13,
    title: "Hunger Games",
    author: "SUZANNE COLLINS",
    price: 499,
    image: "static/new_images/hungergames.jpg"
  },

  {
    id: 14,
    title: "DEEP WORK",
    author: "CAL NEWPORT",
    price: 589,
    image: "static/new_images/deepwork.jpg"
  },
  
  {
    id: 15,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    price: 899,
    image: "static/new_images/The-Old-Man-And-The-Sea.jpg"
  },

  {
    id: 16,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    price: 1099,
    image: "static/new_images/One-Hundred-Years-Of-Solitude.jpg"
  },
  {
    id: 17,
    title: "The Stranger",
    author: "Albert Camus",
    price: 699,
    image: "static/new_images/The-Stranger.jpg"
  },

  {
    id: 18,
    title: "1984",
    author: "George Orwell",
    price: 899,
    image: "static/new_images/1984.jpg"
  },

  {
    id: 19,
    title: "The Name of the Rose",
    author: "Umberto Eco",
    price: 1199,
    image: "static/new_images/The-Name-Of-The-Rose.jpg"
  },

  {
    id: 20,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 949,
    image: "static/new_images/The-Kite-Runner.jpg"
  },

  {
    id: 21,
    title: "The Trial",
    author: "Franz Kafka",
    price: 749,
    image: "static/new_images/The-Trial.jpg"
  },

  {
    id: 22,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    price: 999,
    image: "static/new_images/Norwegian-Wood.jpg"
  },

  {
    id: 23,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 859,
    image: "static/new_images/The-Alchemist.jpg"
  },

  {
    id: 24,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 889,
    image: "static/new_images/The-Catcher-In-The-Rye.jpg"
  },

  {
    id: 25,
    title: "Atomic Habits-Remastered",
    author: "James Clear",
    price: 889,
    image: "static/new_images/atomic habits.jpg"
  },
  
  {
    id: 26,
    title: "The Girl on the Train",
    author: "Ruskin Bond",
    price: 889,
    image: "static/new_images/the girl on the train.jpg"
  },

  {
    id: 27,
    title: "Man's Search For Meaning",
    author: "Victor E Frankl",
    price: 889,
    image: "static/new_images/man's search for meaning.jpg"
  },

  {
    id: 28,
    title: "The Power of your Subconscious Mind",
    author: "Dr Joseph Murphy",
    price: 889,
    image: "static/new_images/the power of subconscious mind.jpg"
  },

  {
    id: 29,
    title: "Influence",
    author: "Robert B Cialdini",
    price: 889,
    image: "static/new_images/influence.jpg"
  },

  {
    id: 30,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 799,
    image: "static/new_images/thinking fast and slow.jpg"
  },

  {
    id: 31,
    title: "Why Nations Fail",
    author: "James A Robinson",
    price: 859,
    image: "static/new_images/why nations fail.jpg"
  },

  {
    id: 33,
    title: "Predictability Irrational",
    author: "Dan Ariely",
    price:639,
    image: "static/new_images/predictability irrational.jpg"
  },

  {
    id: 34,
    title: " The Goldfinch",
    author: "Donna Tartt",
    price:799,
    image: "static/new_images/goldfench.jpg"
  },

  {
    id: 35,
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    price:769,
    image: "static/new_images/starless.jpg"
  },

  {
    id: 36,
    title: "Six of Crows",
    author: "Leigh Bardugo",
    price:899,
    image: "static/new_images/sixcrow.jpg"
  },

  {
    id: 37,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    price:759,
    image: "static/new_images/sarahroses.jpg"
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


// ---------- SELL BOOK ----------
const sellForm = document.getElementById("sellForm");

if (sellForm) {
  sellForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      price: document.getElementById("price").value,
      condition: document.getElementById("condition").value,
      image: "/static/new_images/default.jpg"
    };

    let books = JSON.parse(localStorage.getItem("userBooks")) || [];
    books.push(book);

    localStorage.setItem("userBooks", JSON.stringify(books));

    alert("Book listed successfully!");
    const listedBooks = document.getElementById("listedBooks");

    listedBooks.innerHTML += `
   <div class="card">
    <img src="/static/new_images/default.jpg" width="100">
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>₹${book.price}</p>
    <p>${book.condition}</p>
   </div>
 `;

  this.reset();

  });
}


// ---------- DISPLAY USER BOOKS ----------
const listedBooks = document.getElementById("listedBooks");

if (listedBooks) {
  let books = JSON.parse(localStorage.getItem("userBooks")) || [];

  books.forEach(b => {
    listedBooks.innerHTML += `
      <div class="card">
       <h3>${b.title}</h3>
        <p>${b.author}</p>
        <p>₹${b.price}</p>
        <p>${b.condition}</p>
      </div>
    `;
  });
}


// ---------- REGISTER ----------
function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user already exists
  const exists = users.find(u => u.email === email);

  if (exists) {
    alert("User already exists!");
    return;
  }

  users.push({ email: email, password: pass });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully!");
}