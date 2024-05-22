const container = document.getElementById("products");

const products = [
  {
    id: "12345",
    img: "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    images: ["https://i.postimg.cc/2ymFtsTn/kindle2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg"],
    title: "Kindle Paperwhite",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 100000,
    discount: "50% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "1234",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPad Pro 12.9",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 900000,
    discount: "50% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "2345",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "3456",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "4567",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "5678",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "6789",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "7890",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "8901",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "9012",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: "0123",
    img: "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    images: ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg", "https://i.postimg.cc/kX8PKZpq/ipad1.jpg", "https://i.postimg.cc/kX8PKZpq/2.jpg"],
    title: "iPhone 12",
    colors: ["Black", "Silver", "Gold", "Titanium"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 1200000,
    discount: "30% Off",
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
];

function showProducts(productsToShow = undefined){
  if (!!container == false) { return; }

  container.innerHTML = ""
  if (productsToShow == undefined){
    productsToShow = products
  } else if (!!products && productsToShow.length == 0) {
    container.innerHTML = '<p>No se encontraron resultados</p>'
  }

  for (let product of productsToShow) {
    const template = `
    <a class="product-card" href="./details.html?id=${product.id}">
    <img
      class="product-img"
      src=${product.img}
      alt=${product.title}
    />
    <div class="product-info">
      <span class="product-title">${product.title}</span>
      <span class="product-description">${product.description}</span>
      <div class="product-price-block">
        <span class="product-price">${product.price}</span>
        <span class="product-discount">${product.discount}</span>
      </div>
      <div class="product-tax-policy">
        ${product.taxPolicy}
      </div>
    </div>
  </a>
      `;
    container.innerHTML += template;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showProducts(products)
});
