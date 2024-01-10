import cart from "../data/cart.js";

export const getCartProductsCount = () => {
  const count = Object.values(cart).reduce((acc, item) => acc + item, 0);

  return count;
}