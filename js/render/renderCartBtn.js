import cart from "../data/cart.js";
import { getCartProductsCount } from "../utils/getCartProductsCount.js";
import { popUp } from "./renderPopup.js";
import  products from "../data/products.js";

export const renderCartBtn = () => {
  const cartBtnEl = document.querySelector('.cart');

  cartBtnEl.dataset.count = getCartProductsCount();

  cartBtnEl.onclick = cartBtnElHandler;
}

function cartBtnElHandler() {
  console.log(cart);
  popUp();
  generatePopupHTML();
  updatePopupContent();
}

function updatePopupContent() {
  const popupContent = document.querySelector('.popup-outer-html');
  popupContent.innerHTML = generatePopupHTML();

  const increaseButtons = document.querySelectorAll('.btn_increase-quantity');
  const decreaseButtons = document.querySelectorAll('.btn_decrease-quantity');

  increaseButtons.forEach(btn => {
    btn.addEventListener('click', increaseQuantityHandler);
  });

  decreaseButtons.forEach(btn => {
    btn.addEventListener('click', decreaseQuantityHandler);
  });
}

function generatePopupHTML() {
  let popupHTML = '';
  let totalOrderAmount = 0;

  Object.entries(cart).forEach(([productId, quantity]) => {
    const product = products.find(item => item.id === parseInt(productId));

    if (product) {
      const priceNumeric = parseFloat(product.price.replace(/[^\d.]/g, ''));

      const totalItemPrice = quantity * priceNumeric;
      totalOrderAmount += totalItemPrice;

      popupHTML += `
        <div class="popup-product">
            <div class="popup-product__img">
              <img src="./img/products/${product.img}" alt="">
            </div>
            <div class="popup-product__info">
              <h4>${product.title}</h4>
            </div>  
            <div class="popup-product__quantity">
                <button class="btn btn_increase-quantity" data-product-id="${productId}"><i class="fa-solid fa-plus"></i></button>
                <span class="popup-product__quantity-value">${quantity}</span>
                <button class="btn btn_decrease-quantity" data-product-id="${productId}"><i class="fa-solid fa-minus"></i></button>
            </div>
            <div class="popup-product__text">
              <p>Ціна: ${product.price}</p>
              <p>Сума: ${totalItemPrice} ₴</p>
            </div>  
        </div>`;
      }
  });

  popupHTML += `<div class="total-amount">Загальна сума замовлення: ${totalOrderAmount} ₴</div>`;

  return popupHTML;
}

function increaseQuantityHandler() {
  const productId = this.dataset.productId;
  cart[productId]++;
  updatePopupContent();
  renderCartBtn();
}

function decreaseQuantityHandler() {
  const productId = this.dataset.productId;
  if (cart[productId] > 1) {
    cart[productId]--;
  } else {
    delete cart[productId];
  }
  updatePopupContent();
  renderCartBtn();
}