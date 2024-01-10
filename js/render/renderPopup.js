export const popUp = () => {
    const popup = 
    `<div class="popup">
        <div class="container container_popup">
            <div class="popup__content">
                <h3 class="popup__block">Оформлення замовлення :</h3>
                <div class="popup-outer-html"></div>
                <button class="btn btn_close">
                  <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    </div>
    `
  document.body.insertAdjacentHTML('beforeend', popup);
  
  const btn = document.querySelector('.btn_close');
  
  btn.onclick = function() {
    const parent = this.closest('.popup');
    parent.remove();
  };
};

