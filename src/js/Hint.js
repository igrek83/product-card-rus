import BaseComponent from './BaseComponent';

export default class Hint extends BaseComponent {
  constructor(button, closeButton, container) {
    super();
    this.button = button;
    this.closeButton = closeButton;
    this.container = container;
    this._setHandlers([{
        element: this.button,
        event: 'click',
        callback: this._open,
      },
      {
        element: this.closeButton,
        event: 'click',
        callback: this._close,
      },
    ]);
  }
  _open() {
    document.querySelector('.popup').classList.add('is-opened');
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    this.container.classList.add('is-opened');
  }
  _close() {
    document.querySelector('.popup').classList.remove('is-opened');
    this.container.classList.remove('is-opened');
    document.querySelector('.main').style.display = 'flex';
    document.querySelector('.footer').style.display = 'flex';
  }
}