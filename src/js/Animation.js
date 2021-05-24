import BaseComponent from './BaseComponent';

const sliderButton = document.querySelector('#slider-button'),
      wave = document.querySelector('.product__wave'),
      cub = document.querySelector('.product__cub'),
      productPopup = document.querySelector('.product__popup');

export default class Animation extends BaseComponent {
  constructor(button) {
    super();
    this.button = button;
    this._setHandlers([{
      element: this.button,
      event: 'click',
      callback: this._open.bind(this),
    }]);
  }
  _open() {
    productPopup.classList.add('is-opened');
    if (this.button.checked === false) {
      this.button.setAttribute('disabled', 'true');
      cub.style.animationDirection = 'reverse';
      wave.style.animationDirection = 'reverse';
      cub.style.animationDelay = '1.2s';
      wave.style.animationDelay = '.7s';
      setTimeout(function () {
        productPopup.classList.remove('is-opened');
        sliderButton.removeAttribute('disabled');
      }, 2600);
      return;
    }
    if (this.button.checked === true) {
      this.button.setAttribute('disabled', 'true');
      cub.style.animationDirection = 'normal';
      wave.style.animationDirection = 'normal';
      document.querySelector('#circleButton').style.boxShadow = "0px 0px 12px #1fcfcb";
      setTimeout(function () {
        document.querySelector('#circleButton').style.boxShadow = "0px 0px 8px #1fcfcb";
      }, 1000);
      cub.style.animationDelay = '.7s';
      wave.style.animationDelay = '1.2s';
      setTimeout(function () {
        productPopup.classList.remove('is-opened');
        sliderButton.removeAttribute('disabled');
      }, 2600);
      return;
    }
  }
}