import BaseComponent from './BaseComponent';

const characteristicsBlock = document.querySelector('.product__characteristics-block'),
      descriptionBlock = document.querySelector('.description'),
      tvBlock = document.querySelector('.product__tv-block'),
      chippingBlock = document.querySelector('.product__chipping-block'),
      warrabtyInformationBlock = document.querySelector('.product__warrabty-information'),
      commentsBlock = document.querySelector('.product__comments-block');


export default class Block extends BaseComponent {
  constructor(button, container) {
    super();
    this.button = button;
    this.container = container;
    this.array = [
      characteristicsBlock,
      descriptionBlock,
      tvBlock,
      chippingBlock,
      warrabtyInformationBlock,
      commentsBlock
    ];
    this._setHandlers([{
      element: this.button,
      event: 'click',
      callback: this._open.bind(this),
    }]);
  }
  _open() {
    this.array.forEach((item) => {
      item.classList.remove('is-opened');
      item.classList.remove('opacity');
    });
    this.container.classList.add('is-opened');
    const block = this.container;
    setTimeout(function () {
      block.classList.add('opacity');
    }, 100);

    if (this.container === characteristicsBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(68px)';
      } else {
        document.querySelector('.product__scroll').style.transform = 'translate(-145px)';
      }
    }
    if (this.container === descriptionBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(270px)';
      } else {
        document.querySelector('.product__scroll').style.transform = 'translate(270px)';
      }
    }
    if (this.container === tvBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(467px)';
      } else {
        return;
      }
    }
    if (this.container === chippingBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(663px)';
      } else {
        return
      }
    }
    if (this.container === warrabtyInformationBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(841px)';
      } else {
        return;
      }
    }
    if (this.container === commentsBlock) {
      if (window.innerWidth > 1100) {
        document.querySelector('.product__scroll').style.transform = 'translate(1045px)';
      } else {
        return;
      }
    }
  }
}