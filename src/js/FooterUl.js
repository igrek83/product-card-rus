export default class FooterUl {
  constructor(button) {
    this.button = button;
    this.button.addEventListener('click', this._footerUltoggle.bind(this));
  }
  _footerUltoggle() {
    if (this.button === document.querySelector('#firstMenuButton')) {
      document.querySelector('#firstFooterMenu').classList.toggle('footer__first-mobile-menu');
    }
    if (this.button === document.querySelector('#twoMenuButton')) {
      document.querySelector('#twoFooterMenu').classList.toggle('footer__two-mobile-menu');
    }
    if (this.button === document.querySelector('#threeMenuButton')) {
      document.querySelector('#threeFooterMenu').classList.toggle('footer__three-mobile-menu');
    }
    if (this.button === document.querySelector('#fourMenuButton')) {
      document.querySelector('#fourFooterMenu').classList.toggle('footer__four-mobile-menu');
    }
  }
}