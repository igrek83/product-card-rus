import "./styles/index.css";
import Animation from "./js/Animation";
import TextButton from "./js/TextButton";
import Hint from "./js/Hint";
import CardItem from "./js/CardItem";
import Slider from "./js/Slider";
import Block from "./js/Block";
import BascetBlock from "./js/BascetBlock";
import UserBlock from "./js/UserBlock";
import MenuBlock from "./js/MenuBlock";
import RightForm from "./js/RightForm";
import MobileForm from "./js/MobileForm";
import DesctopBascet from "./js/DesctopBascet";
import Counter from "./js/Counter";
import FooterUl from "./js/FooterUl";
import imageZoom from "./js/ImageZoom";

const hint = document.querySelector(".hint"),
  hintOpenButton = document.querySelector(".description__button-code"),
  hintCloseButton = document.querySelector(".hint__close"),
  characteristicsButton = document.querySelector("#characteristicsButtonMenu"),
  descriptionButton = document.querySelector("#descriptionButtonMenu"),
  tvButton = document.querySelector("#tvButtonMenu"),
  chippingButton = document.querySelector("#shippingMenu"),
  warrabtyInformationButton = document.querySelector(
    "#warrabtyInformationMenu"
  ),
  commentsButton = document.querySelector("#commentsMenu"),
  characteristicsBlock = document.querySelector(
    ".product__characteristics-block"
  ),
  descriptionBlock = document.querySelector(".description"),
  tvBlock = document.querySelector(".product__tv-block"),
  chippingBlock = document.querySelector(".product__chipping-block"),
  warrabtyInformationBlock = document.querySelector(
    ".product__warrabty-information"
  ),
  commentsBlock = document.querySelector(".product__comments-block"),
  mobileMenuButton = document.querySelector("#mobileMenuButton"),
  closeButton = document.querySelector(".header__button-close"),
  userButton = document.querySelector(".header__button-circle_theme_user"),
  bascetButton = document.querySelector(".header__button-circle_theme_bascet"),
  menuButton = document.querySelector("#menu");

const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");

// counter

const quantity = () => {
  const string = document.querySelector(".product__choice-number").textContent;
  const number = Number.parseInt(string);
  return number;
};

function addition() {
  const number = quantity();
  const result = number + 1;
  document.querySelector(".product__choice-number").textContent = result;
  document.querySelector("#left").removeAttribute("disabled", "true");
  document.querySelector("#left").classList.remove("product-arrow-button_theme_disabled");
}

function subtraction() {
  const number = quantity();
  const result = number - 1;
  if (result <= 1) {
    document.querySelector(".product__choice-number").textContent = 1;
    document.querySelector("#left").setAttribute("disabled", "true");
    document.querySelector("#right").removeAttribute("disabled", "true");
    document.querySelector("#left").classList.add("product-arrow-button_theme_disabled");
    document.querySelector("#right").classList.remove("product-arrow-button_theme_disabled");
  } else {
    document.querySelector(".product__choice-number").textContent = result;
    document.querySelector("#left").removeAttribute("disabled", "true");
    document.querySelector("#right").setAttribute("disabled", "true");
    document.querySelector("#left").classList.remove("product-arrow-button_theme_disabled");
    document.querySelector("#right").classList.add("product-arrow-button_theme_disabled");
  }
}

rightButton.addEventListener("click", addition);
leftButton.addEventListener("click", subtraction);

const sliderBlock = document.querySelector(".product__slider-mini-container");
function hover() {
  document.querySelector(".product__block-cost").classList.add("visibility");
  document
    .querySelector(".product__slider-result")
    .classList.remove("visibility");
}
function unHover() {
  document.querySelector(".product__block-cost").classList.remove("visibility");
  document.querySelector(".product__slider-result").classList.add("visibility");
}

sliderBlock.addEventListener("mousemove", hover);
sliderBlock.addEventListener("mouseout", unHover);

function zoom(event) {
  if (event.target === document.querySelector("#oneImg")) {
    imageZoom(document.querySelector("#oneImg"));
  }
  if (event.target === document.querySelector("#twoImg")) {
    imageZoom(document.querySelector("#twoImg"));
  }
  if (event.target === document.querySelector("#threeImg")) {
    imageZoom(document.querySelector("#threeImg"));
  }
  if (event.target === document.querySelector("#fourImg")) {
    imageZoom(document.querySelector("#fourImg"));
  }
  if (event.target === document.querySelector("#fiveImg")) {
    imageZoom(document.querySelector("#fiveImg"));
  }
  if (event.target === document.querySelector("#sexImg")) {
    imageZoom(document.querySelector("#sexImg"));
  }
  if (event.target === document.querySelector("#sevenImg")) {
    imageZoom(document.querySelector("#sevenImg"));
  }
}



new Animation(document.querySelector("#slider-button"));
new TextButton(document.querySelector("#slider-button"));
new Hint(hintOpenButton, hintCloseButton, hint);
new Hint(document.querySelector('.product__market-button'), document.querySelector('.market__close'), document.querySelector('.market'));
new CardItem(document.querySelector("#bascetMenu"));
new Slider(document.querySelector("#slider"));
new Block(characteristicsButton, characteristicsBlock);
new Block(descriptionButton, descriptionBlock);
new Block(tvButton, tvBlock);
new Block(chippingButton, chippingBlock);
new Block(warrabtyInformationButton, warrabtyInformationBlock);
new Block(commentsButton, commentsBlock);
new BascetBlock(bascetButton);
new UserBlock(userButton);
new MenuBlock(mobileMenuButton);
new RightForm(document.querySelector(".header__block-button"));
new MobileForm(menuButton, closeButton);
new DesctopBascet(
  document.querySelector("#circleButton"),
  document.querySelector("#bascetMenu")
);

const counter = new Counter(document.querySelector("#bascetMenu"));

const addCharacteristicsButton = document.querySelector(
  "#characteristicsButton"
);

function addChar() {
  document
    .querySelector(".product__characteristics-hidden-box")
    .classList.toggle("product__characteristics-hidden-box_is_opened");
}

addCharacteristicsButton.addEventListener("click", addChar);
/*
class Card {
  constructor(container) {
    this.container = container;
  }
  createCard(card) {
    const { name, counter, price, url } = card;

    const productCard = document.createElement("div");
    const productImageBox = document.createElement("div");
    const productImage = document.createElement("img");
    const productName = document.createElement("span");
    const productBox = document.createElement("div");
    const minusButton = document.createElement("button");
    const spanMinus = document.createElement("span");
    const plusButton = document.createElement("button");
    const spanPlus = document.createElement("span");
    const productCounter = document.createElement("span");
    const productPrice = document.createElement("span");
    const deleteButton = document.createElement("button");

    productCard.classList.add("header__product-box");
    productImageBox.classList.add("header__image-box");
    productImage.classList.add("header__bascet-image");
    productName.classList.add("header__bascet-span-white");
    productBox.classList.add("header__small-box");
    minusButton.classList.add("header__small-button", "minus");
    spanMinus.classList.add("header__span-minus");
    plusButton.classList.add("header__small-button", "plus");
    spanPlus.classList.add("header__span-plus");
    productCounter.classList.add("header__bascet-span-white", "number");
    productPrice.classList.add("header__bascet-span-summa");
    deleteButton.classList.add("header__product-close");

    productName.textContent = name;
    productCounter.textContent = counter;
    productPrice.textContent = "$" + `${price}`;
    productImage.setAttribute("src", url);

    productCard.append(productImageBox);
    productCard.append(productName);
    productCard.append(productBox);
    productCard.append(productPrice);
    productCard.append(deleteButton);
    productImageBox.append(productImage);
    productBox.append(minusButton);
    minusButton.append(spanMinus);
    productBox.append(productCounter);
    productBox.append(plusButton);
    plusButton.append(spanPlus);

    this.container.append(productCard);
  }
}

*/


/*

function click() {
  if (document.querySelector("#slider-button").checked === false) {
    document.querySelector(".product__popup").style.display = "none";
  } else {
    document.querySelector(".product__popup").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".product__popup").style.display = "none";
    }, 2500);
  }
}
document.querySelector("#slider-button").addEventListener("click", click);
*/
/*
let count = 0;

function click() {
  if (count === 1) {
    document.querySelector(".product__popup").style.display = "none";
    count = count - 1;
  } else {
    document.querySelector(".product__popup").style.display = "none";
    document.querySelector(".product__popup").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".product__popup").style.display = "none";
    }, 2500);
    count = count + 1;
  }
}
document.querySelector("#slider-button").addEventListener("click", click);
*/
const videoButton = document.querySelector('#videoButton');
const closeVideoButton = document.querySelector('.video__close');
function openVideo() {
  document.querySelector('.popup').classList.add('is-opened');
  document.querySelector('.video').style.display = 'flex';

  if (window.innerWidth > 1100) {
    let scrollTop = window.pageYOffset;
    window.onscroll = function () {
    window.scrollTo(0, scrollTop);
    } 
  } else {
    window.scrollTo(0, 0);
  }
}

function closeVideo() {
  document.querySelector('.popup').classList.remove('is-opened');
  document.querySelector('.video').style.display = 'none';
  window.onscroll = function () {};
}

videoButton.addEventListener('click', openVideo);
closeVideoButton.addEventListener('click', closeVideo);

new FooterUl(document.querySelector("#firstMenuButton"));
new FooterUl(document.querySelector("#twoMenuButton"));
new FooterUl(document.querySelector("#threeMenuButton"));
new FooterUl(document.querySelector("#fourMenuButton"));

document.querySelector('.product__slider-mini-container').addEventListener("mouseover", zoom);
counter.totalAmount();