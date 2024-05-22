const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const productDetail = products.find((each) => each.id === id);

function printDetails(id) {
  const detailsTemplate = `
    <section class="product-images-block">
        <div class="product-images">
            ${productDetail.images
              .map(
                (each) =>
                  `<img class="mini-img" src="${each}" alt="mini" onclick="changeMini(event)"/>`
              )
              .join("")}
        </div>
        <img
        class="big-img"
        id="big-img"
        src="${productDetail.img}"
        alt="${productDetail.title}"
        />
    </section>
    <div class="product-description-block">
        <h1 class="product-title">${productDetail.title}</h1>
        <form class="product-selector">
        <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select id="color-${productDetail.id}" type="text" placeholder="Selecciona un color">
                ${productDetail.colors
                  .map((each) => `<option value=${each}>${each}</option>`)
                  .join("")}
            </select>
        </fieldset>
        </form>
        <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>
            ${productDetail.description}
        </p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="price" class="checkout-total-price">$${productDetail.price}</h2>
        <p class="checkout-description">
            ${productDetail.taxPolicy}
        </p>
        <ul class="checkout-policy-list">
            <li>
            <span class="policy-icon"
                ><img src="./assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
            >
            </li>
            <li>
            <span class="policy-icon"
                ><img src="./assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
            >
            </li>
        </ul>
        <div class="checkout-process">
            <div class="top">
            <input id="quantity-${productDetail.id}" type="number" min="1" value="1" onchange="changeSubtotal(event)"/>
            <button type="button" class="cart-btn" onclick="saveProduct(${productDetail.id})">
                Añadir al Carrito
            </button>
            </div>
        </div>
        </div>
    </div>
    `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}

function changeMini(e) {
  const selectedSrc = e.target.src;
  const bigSelector = document.querySelector("#big-img");
  bigSelector.src = selectedSrc;
}

function changeSubtotal(e) {
  quantity = e.target.value;
  subtotal = document.querySelector(".checkout-container #price");
  subtotal.innerHTML = `$${productDetail.price * quantity}`;
}

function saveProduct(id) {
    const found = products.find((each) => String(each.id) === String(id));
    const product = {
      id: id,
      title: found.title,
      price: found.price,
      image: found.images[0],
      color: document.querySelector("#color-" + id).value,
      quantity: document.querySelector("#quantity-" + id).value,
    };
    let cartItems = localStorage.getItem("cart")
    if (!!cartItems) {
        cartItems = JSON.parse(cartItems)
    } else {
        cartItems = {
            items: []
        }
    }

    if (!!cartItems.items) {
        cartItems.items.push(product)
    }

    const stringifyProduct = JSON.stringify(cartItems);


    localStorage.setItem("cart", stringifyProduct);
  }

// Ofertas

function printOfferSales() {
  // Select offers
  const offerProducts = [];
  do {
    const product =
      products[parseInt(Math.random() * (products.length - 0) + 0)];
    if (!offerProducts.includes(product)) {
      offerProducts.push(product);
    }
  } while (offerProducts.length < 3);

  // Render offers
  let salesTemplate = "";
  offerProducts.forEach((product) => {
    salesTemplate += `<a class="product-card" href="./details.html?id=${product.id}">
            <img
            class="product-img"
            src="${product.img}"
            alt="Kindle Paperwhite"
            />
            <div class="product-info">
            <span class="product-title">Kindle Paperwhite</span>
            <span class="product-description">Black</span>
            <div class="product-price-block">
                <span class="product-price">100000</span>
                <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
                Incluye impuesto País y percepción AFIP
            </div>
            </div>
        </a>`;
  });
  const offersBlockSelector = document.querySelector(
    ".sales-block #product-container"
  );
  offersBlockSelector.innerHTML = salesTemplate;
}

document.addEventListener("DOMContentLoaded", () => {
  printDetails(id);
  printOfferSales();
});


