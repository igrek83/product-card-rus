import BaseComponent from './BaseComponent';

const mobileMenuButton = document.querySelector('#mobileMenuButton');
const closeButton = document.querySelector('.header__button-close');
const menu = document.querySelector('#menuBlock');
const userButton = document.querySelector('.header__button-circle_theme_user');
const userMenu = document.querySelector('#userMenu');
const bascetButton = document.querySelector('.header__button-circle_theme_bascet');
const bascetMenu = document.querySelector('#bascetMenu');
const circle = document.querySelector('#circle');

export default class HiddenContainer extends BaseComponent {
  constructor() {
    super();
    this._setHandlers([{
      element: document.querySelector('.header__button-close'),
      event: 'click',
      callback: this._close,
    }, ]);
  }
  _close() {
    menu.classList.remove('is-opened');
    userMenu.classList.remove('is-opened');
    bascetMenu.classList.remove('is-opened');
    closeButton.classList.remove('mobile-order');
    circle.classList.remove('visibility');
    mobileMenuButton.classList.add('is-opened');
    userButton.classList.add('is-opened');
    bascetButton.classList.add('is-opened');
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.footer').style.display = "flex";
  }
}