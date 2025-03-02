// @ts-check
import { faker } from "@faker-js/faker";

/**
 *
 * @param {Element} el Element to insert cart content
 */
export function mount(el) {
  const cartText = `<div>You have ${faker.number.int({
    max: 44,
  })} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
  const devCartElement = document.getElementById("cart-dev");

  if (devCartElement !== null) {
    mount(devCartElement);
  }
}

console.log("Cart Component");

export default mount;
