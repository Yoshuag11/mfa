// @ts-check
import { faker } from "@faker-js/faker";

/**
 *
 * @param {Element} el Element to contain the list of products
 */
export const mount = (el) => {
  let products = "";

  for (let i = 0; i < 10; i += 1) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const devProductsElement = document.querySelector("#dev-products");

  // Assuming container does not have an element with ID "dev-products"
  if (devProductsElement !== null) {
    // Probably running in isolation
    mount(devProductsElement);
  }
}
export default mount;
