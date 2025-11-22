import { HeaderComponent } from "./header.js";
import { ProductsListComponent } from "./products.js";
import { FooterComponent } from "./footer.js";

document.addEventListener("DOMContentLoaded", ()=>{
  const HeaderContent = document.getElementById("header");
  const ProductsContent = document.getElementById("products");
  const FooterContainer = document.getElementById("footer");
  HeaderContent.appendChild(HeaderComponent());
  ProductsContent.appendChild(ProductsListComponent());
  FooterContainer.appendChild(FooterComponent());
});