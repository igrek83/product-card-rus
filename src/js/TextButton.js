import BaseComponent from './BaseComponent';

export default class TextButton extends BaseComponent {
  constructor(button) {
    super();
    this.button = button;
    this._setHandlers([{
        element: this.button,
        event: 'click',
        callback: this._change,
      },
    ]);
  }
  _change(event) {
    if (document.querySelector('.product__add-title-span').textContent == "УБРАТЬ ИЗ КОРЗИНЫ") {
      document.querySelector('.product__add-button-span').classList.remove('product__add-button-span_theme_left');
      document.querySelector('.product__add-title-span').textContent = "";
      document.querySelector('.product__popup').style.opacity = '0';
      setTimeout(function () {
        document.querySelector('.product__add-title-span').textContent = "ДОБАВИТЬ В КОРЗИНУ";
      }, 400);

    } else {
      
      document.querySelector('.product__add-button-span').classList.add('product__add-button-span_theme_left');
      document.querySelector('.product__add-title-span').textContent = "";
      document.querySelector('.product__popup').style.opacity = '1';
      setTimeout(function () {
        document.querySelector('.product__add-title-span').textContent = "УБРАТЬ ИЗ КОРЗИНЫ";
      }, 400);
    }
  }
}