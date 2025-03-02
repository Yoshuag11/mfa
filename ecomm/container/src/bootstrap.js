// @ts-check
import { mount as productsMount } from "Products/ProductsIndex";
import { mount as cartMount } from "Cart/CartShow";

console.log("Container");

const productsElement = document.getElementById("products");

if (productsElement !== null) {
  productsMount(productsElement);
}

const cartElement = document.getElementById("cart");

if (cartElement !== null) {
  cartMount(cartElement);
}
