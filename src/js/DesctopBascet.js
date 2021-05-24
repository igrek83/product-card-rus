import BaseComponent from './BaseComponent';

export default class DesctopBascet extends BaseComponent {
  constructor(button, container) {
    super();
    this.button = button;
    this.container = container;
    this._setHandlers([
      {
        element: this.button,
        event: 'mousemove',
        callback: this._open.bind(this),
      },
      {
        element: this.container,
        event: 'mouseleave',
        callback: this._close.bind(this),
      }
    ]);
  }
  _open() {
    this.container.classList.add('is-opened');
  }

  _close() {
    this.container.classList.remove('is-opened');
  }
}