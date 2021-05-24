import HiddenContainer from './HiddenContainer';

const mobileMenuButton = document.querySelector('#mobileMenuButton');
const closeButton = document.querySelector('.header__button-close');
const mobileMenu = document.querySelector('#mobileMenuBlock');
const userButton = document.querySelector('.header__button-circle_theme_user');
const userMenu = document.querySelector('#userMenu');
const bascetButton = document.querySelector('.header__button-circle_theme_bascet');
const bascetMenu = document.querySelector('#bascetMenu');
const circle = document.querySelector('#circle');

export default class MenuBlock extends HiddenContainer {
  constructor(button) {
    super();
    this.button = button;
    this._setHandlers([{
      element: this.button,
      event: 'click',
      callback: this._open,
    }, ]);
  }
  _open() {
    document.querySelector('.main').style.display = "none";
    document.querySelector('.footer').style.display = "none";
    mobileMenu.classList.add('is-opened');
    closeButton.classList.add('is-opened');
    closeButton.classList.remove('mobile-order');
    circle.classList.remove('visibility');

    userButton.classList.add('is-opened');
    bascetButton.classList.add('is-opened');
    mobileMenuButton.classList.remove('is-opened');
    userMenu.classList.remove('is-opened');
    bascetMenu.classList.remove('is-opened');
  }
}