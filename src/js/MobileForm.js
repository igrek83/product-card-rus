import BaseComponent from './BaseComponent';

const menu = document.querySelector('#menuBlock');
const mobileMenu = document.querySelector('#mobileMenuBlock');
const mobileMenuButton = document.querySelector('#mobileMenuButton');

export default class MobileForm extends BaseComponent {
  constructor(button, closeButton) {
    super();
    this.button = button;
    this.closeButton = closeButton;
    this._setHandlers([
      {
        element: this.button,
        event: 'click',
        callback: this._open.bind(this),
      },
      {
        element: this.closeButton,
        event: 'click',
        callback: this._close.bind(this),
      }
    ]);
  }
  _open() {
    menu.classList.add('is-opened');
    mobileMenu.classList.add('is-opened');
    mobileMenuButton.classList.remove('is-opened');
    document.querySelector('.footer').style.display = "none";
    document.querySelector('.main').style.display = "none";
  }
  _close() {
    menu.classList.remove('is-opened');
    mobileMenu.classList.remove('is-opened');
    mobileMenuButton.classList.remove('is-opened');
    document.querySelector('.footer').style.display = "flex";
    document.querySelector('.main').style.display = "flex";
  }
}