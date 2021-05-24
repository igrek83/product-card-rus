import BaseComponent from "./BaseComponent";

export default class Slider extends BaseComponent {
  constructor(block) {
    super();
    this.block = block;
    this.initialPoint = 0;
    this.finalPoint = 0;
    this.imageArr = [];
    this.imageArray = Array.from(this.block.querySelectorAll('.product__slider-image'));
    this.labelArray = Array.from(this.block.querySelectorAll('.product__input-style'));
    this.array = Array.from(this.block.querySelectorAll('.product__input'));
    this._addImageCheck();
    this._setHandlers([{
        element: this.block.querySelector('.product__arrow_theme_left'),
        event: 'click',
        callback: this._moveLeft.bind(this),
      },
      {
        element: this.block.querySelector('.product__arrow_theme_right'),
        event: 'click',
        callback: this._moveRight.bind(this),
      },
      {
        element: this.block,
        event: 'click',
        callback: this._check.bind(this),
      },
      {
        element: this.block.querySelector('.product__slider-mini-container'),
        event: 'touchstart',
        callback: this._touthStart.bind(this),
      },
      {
        element: this.block.querySelector('.product__slider-mini-container'),
        event: 'touchend',
        callback: this._swipe.bind(this),
      }
    ]);
  }
  _addImageCheck() {
    this.imageArray.forEach((image) => {
      let link = `url(${image.src})`;
      this.imageArr.push(link);
    });
    for (let i = 0; i < this.imageArray.length; i++) {
      const label = document.createElement(`label`); 
      this.labelArray[i].style.display = 'flex';
      this.labelArray[i].style.backgroundImage = this.imageArr[i]; 
    }
  }
  
  _moveRight() {
    for (let i = 0; i < this.array.length; i++) {
      let item = this.array[i];
      if (item.checked) {
        item.checked = false;
        if (i === this.imageArray.length - 1) {
          this.array[0].checked = true;
          this.block.querySelector('.product__slider-mini-container').style.transform = `translate(0)`;
        } else {
          item.nextElementSibling.checked = true;
          this.block.querySelector('.product__slider-mini-container').style.transform = `translate(calc(-100%/${this.imageArray.length}*(${i} + 1)))`;
        }
        return;
      }
    }
  }
  _moveLeft() {
    for (let i = 0; i < this.array.length; i++) {
      let item = this.array[i];
      if (item.checked) {
        item.checked = false;
        if (i === 0) {
          this.array[this.imageArray.length - 1].checked = true;
          this.block.querySelector('.product__slider-mini-container').style.transform = `translate(calc(-100%/${this.imageArray.length}*(${this.imageArray.length} - 1)))`;
        } else {
          item.previousElementSibling.checked = true;
          this.block.querySelector('.product__slider-mini-container').style.transform = `translate(calc(-100%/${this.imageArray.length}*(${i} - 1)))`;
        }
        return;
      }
    }
  }

  _check(event) {
    if(event.target.classList.contains('product__input')) {
      event.target.checked;
      for (let i = 0; i < this.array.length; i++) {
        let item = this.array[i];
        if (item.checked) {
          this.block.querySelector('.product__slider-mini-container').style.transform = `translate(calc(-100%/${this.imageArray.length}*(${i})))`;
          return; 
        };     
      }
    };
  }

  _touthStart(event) {
    this.initialPoint = event.changedTouches[0];
  }
  _swipe(event) {
    this.finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
    if (xAbs > 170) {
      if (this.finalPoint.pageX < this.initialPoint.pageX) {
        this._moveRight();
      } else {
        this._moveLeft();
      }
    }
  }
}