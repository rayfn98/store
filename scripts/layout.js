const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");
const divFooter = document.createElement("div");
divFooter.className = "footer-container";

const options = [
  { title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
  { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "", ""] },
  { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", ""] },
  { title: "Mis pedidos", linkTo: "./orders.html", opts: ["", ""] },
  { title: "Garantía", linkTo: "./warranty.html", opts: [] },
];

for (let option of options) {
  // Nav
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.className = "nav-a";
  link.textContent = option.title;
  link.href = option.linkTo;
  link.href = option.linkTo;
  li.appendChild(link);
  navbar.appendChild(li);

  // Footer
  const ul = document.createElement("ul");
  ul.className = "footer-ul";
  const liTitle = document.createElement("li");
  liTitle.className = "footer-main-item"
  const aTitle = document.createElement("a");
  aTitle.textContent = option.title;
  aTitle.className = "footer-a";
  aTitle.textContent = option.title
  liTitle.appendChild(aTitle)
  ul.appendChild(liTitle)
  for (let opt of option.opts) {
    const li = document.createElement("li");
    li.className = "footer-li";

    const a = document.createElement("a");
    a.textContent = opt;
    a.className = "footer-a";
    a.href = "#";
    li.appendChild(a);
    ul.appendChild(li);
  }
  divFooter.appendChild(ul);
}

footer.appendChild(divFooter);

