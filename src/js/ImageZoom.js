export default function imageZoom(image) {
  const result = document.querySelector('.product__slider-result');
  const lens = image.parentNode.querySelector('.product__loop');
  /* Вычисление соотношения между результатом DIV и объективом: */
  const cx = result.offsetWidth / lens.offsetWidth;
  const cy = result.offsetHeight / lens.offsetHeight;
  /* Свойства фона для результата DIV */
  result.style.backgroundImage = "url('" + image.src + "')";
  result.style.backgroundSize = (image.width * cx) + "px " + (image.height * cy) + "px";
  /* Выполнение функции при наведении курсора на изображение или объектив: */
  lens.addEventListener("mousemove", moveLens);
  image.addEventListener("mousemove", moveLens);
  /* для сенсора: */
  lens.addEventListener("touchmove", moveLens);
  image.addEventListener("touchmove", moveLens);


  function moveLens(event) {
    event.preventDefault();
    const pos = getCursorPos(event);
    /* положение объектива: */
    let x = pos.x - (lens.offsetWidth / 2);
    let y = pos.y - (lens.offsetHeight / 2);
    /* размещение объектива за пределами изображения: */
    if (x > image.width - lens.offsetWidth) {
      x = image.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > image.height - lens.offsetHeight) {
      y = image.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /* положение объектива: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Отображение того, что "видит" объектив: */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  function getCursorPos(event) {
    let x = 0;
    let y = 0;
    event = event || window.event;
    /* Получить x и y позиции изображения: */
    const a = image.getBoundingClientRect();
    /* координаты курсора x и y относительно изображения: */
    x = event.pageX - a.left;
    y = event.pageY - a.top;
    /* любая прокрутка страницы: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
}