import cart from "../data/cart.js";
import { renderCartBtn } from "./renderCartBtn.js";

export const renderProduct = (selector, data) => {
    const parent = document.querySelector(selector);
    
    let productsHtml = '';
    
    const { id, img, title, descrMini, price } = data;

    const imgName = img ? img : 'noimg.webp';

    const html = `
        <div class="product" data-id="${ id }">
            <div class="product__img">
                <img src="./img/products/${ imgName }" alt="">
            </div>
            <h4 class="product__title">${ title }</h4>
            <p class="product__descr">${ descrMini }</p>
            <div class="product__price-block">
                <span class="product__price">${ price }</span>
                <button class="product__add-to-cart btn btn_cart"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>`;

    parent.insertAdjacentHTML('beforeend', html);
    productsHtml = document.querySelectorAll('.product__add-to-cart');
    
    
    productsHtml.forEach(btn => {
        btn.onclick = addToCartHandler;
    });
}

function addToCartHandler() {
    const parent = this.closest('.product');
    const id = parent.dataset.id;

    if (cart[id]) {
        cart[id] ++;
    } else {
        cart[id] = 1;
    }
    
    renderCartBtn();
}

