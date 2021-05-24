import BaseComponent from './BaseComponent';

export default class Counter extends BaseComponent {
  constructor(block) {
    super();
    this.block = block;
    this._setHandlers([{
      element: this.block,
      event: 'click',
      callback: this._counter.bind(this),
    }]);
  }
  _counter(event) {
    if (event.target.closest('.minus')) {
      let count = Number(event.target.closest('.header__small-box').querySelector('.qtty').textContent);
      if (count === 1) {
        return;
      } else {
        count -= 1;
      }
      event.target.closest('.header__small-box').querySelector('.qtty').textContent = count;
    }
    if (event.target.closest('.plus')) {
      let count = Number(event.target.closest('.header__small-box').querySelector('.qtty').textContent) + 1;
      event.target.closest('.header__small-box').querySelector('.qtty').textContent = count;
    }
    this.totalAmount();
  }
  totalAmount() {
    const array = this.block.querySelectorAll('.header__product-box');
    let counter = 0;
    let num = 0;
    if (array.length === 0) {
      this.block.querySelector('.header__bascet-summa').textContent = 0 + ' ₽';
      document.querySelector('.header__circle').textContent = 0;
      document.querySelector('.header__bascet-circle').textContent = 0;
      document.querySelector('#circleButton').textContent = 0;
      return;
    }
    array.forEach((item) => {
      let str = item.querySelector('.header__bascet-span-summa').textContent;
      //const price = Number(str.replace(/\s+/g, '').replace(/[.,\s+]/g, '').replace(/[а-яА-ЯЁё\s+]/g, ''));
      //const price = Number(item.querySelector('.header__bascet-span-summa').textContent.slice(1));
      const price = Number(str.replace(/\s+/g, '').replace(/[.,\s+]/g, '').replace(/[а-яА-ЯЁё\s+]/g, '').slice(0, -1));
      const number = Number(item.querySelector('.qtty').textContent);
      num += number;
      counter += (price * number);
    });
    this.block.querySelector('.header__bascet-summa').textContent = counter + ' ₽';
    document.querySelector('.header__circle').textContent = num;
    document.querySelector('.header__bascet-circle').textContent = num;
    document.querySelector('#circleButton').textContent = num;
  }
}