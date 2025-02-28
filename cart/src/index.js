// @ts-check
import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.number.int({
  max: 44,
})} items in your cart</div>`;

const devCartElement = document.getElementById("cart-dev");

if (devCartElement !== null) {
  devCartElement.innerHTML = cartText;
}

console.log("Cart Component");
