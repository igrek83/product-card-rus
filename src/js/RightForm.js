import BaseComponent from './BaseComponent';

export default class RightForm extends BaseComponent {
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
    if (document.querySelector('.header__big-button').classList.contains('header__big-button_theme_height')) {
      document.querySelector('.header__big-button').classList.remove('header__big-button_theme_height');
      document.querySelector('.header__box-form').classList.remove('header__box-form_theme_height');
      document.querySelector('#emailInput').classList.remove('header__mini-input_theme_width');
      document.querySelector('#passwordInput').classList.remove('header__mini-input_theme_width');
      document.querySelector('.header__button-form-span').style.transform = 'rotate(-135deg)';
    } else {
      document.querySelector('.header__big-button').classList.add('header__big-button_theme_height');
      document.querySelector('.header__box-form').classList.add('header__box-form_theme_height');
      document.querySelector('.header__button-form-span').style.transform = 'rotate(45deg)';
      setTimeout(function () {
        document.querySelector('#emailInput').classList.add('header__mini-input_theme_width');
        document.querySelector('#passwordInput').classList.add('header__mini-input_theme_width');
      }, 400);
    }
  }
}