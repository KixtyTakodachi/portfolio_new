const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.bars__item__percent'),
      lines = document.querySelectorAll('.bars__item__bar .bars__item__fill');

counters.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
})