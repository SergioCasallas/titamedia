const menu = document.querySelector('.nav__content-menu-js');
const list = document.querySelector('.nav__list');
const iconMenu = document.querySelector('.nav__icon-menu');
const iconClose = document.querySelector('.nav__icon-close');

menu.addEventListener('click', () => {
  if (list.classList.contains('nav__list-show')) {
    list.classList.toggle('nav__list-hidden');
    list.classList.remove('nav__list-show');
    iconMenu.style.display = 'block';
    iconClose.style.display = 'none';
  } else if (list.classList.contains('nav__list-hidden')) {
    list.classList.toggle('nav__list-show');
    list.classList.remove('nav__list-hidden');
    iconMenu.style.display = 'none';
    iconClose.style.display = 'block';
  }
});

