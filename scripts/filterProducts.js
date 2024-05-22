const searchSelector = document.getElementById("search");
searchSelector.addEventListener("keyup", (event) => captureText(event));

function captureText(e) {
  console.log("Buscar: ", e.target.value);
  const query = e.target.value;

  if (!!query) {
    filterProducts(query)
  } else {
    showProducts()
  }
}


function filterProducts(q) {
  let filteredProducts = [];
  products.forEach((product) => {
    if (product.title.toLowerCase().includes(q.toLowerCase())) {
      filteredProducts.push(product)
    }
  })

  showProducts(filteredProducts)
}


