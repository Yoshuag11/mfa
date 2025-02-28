// @ts-check
import { faker } from "@faker-js/faker";

let products = "";

for (let i = 0; i < 10; i += 1) {
  const name = faker.commerce.productName();

  products += `<div>${name}</div>`;
}

console.log(products);

// document.body.innerHTML = products;
const devProductsElement = document.querySelector("#dev-products");

if (devProductsElement !== null) {
  devProductsElement.innerHTML = products;
}
