import { shopConfig } from './config/headerConfig.js';
import  products from './data/products.js';
import { headerParts } from './parts/headerParts.js';
import { renderCartBtn } from './render/renderCartBtn.js';
import { renderHeader } from './render/renderHeader.js';
import { renderLoginBtn } from './render/renderLoginBtn.js';
import { renderProduct } from './render/renderProduct.js';

renderHeader(shopConfig, headerParts);
renderCartBtn();
renderLoginBtn();

renderProduct('.products', products[0]);
renderProduct('.products', products[1]);
renderProduct('.products', products[2]);
renderProduct('.products', products[3]);
renderProduct('.products', products[4]);


