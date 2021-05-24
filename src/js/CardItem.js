export default class CardItem {
  constructor(block) {
    this.block = block;
    this.block.addEventListener('click', this._deleteCard.bind(this));
  }
  _deleteCard(event) {
    if (event.target.closest('.header__product-close')) {
      const container = event.target.closest('.header__product-box');
      container.parentNode.removeChild(container);
      this._totalAmount();
    }
  }
  _totalAmount() {  
    const array = Array.from(this.block.querySelectorAll('.header__product-box'));
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