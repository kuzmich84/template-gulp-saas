const CLASS_CLOSED = 'main-nav--closed';
const CLASS_OPENED = 'main-nav--opened';
const MENU_OPENED = 'main-header--opened';
const MENU_CLOSED = 'main-header--closed';
const CLASS_NOJS = 'main-nav--nojs';
const MENU_NOJS = 'main-nav--nojs';

const headerMain = document.querySelector('.main-header');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

headerMain.classList.remove(MENU_NOJS);
navMain.classList.remove(CLASS_NOJS);
headerMain.classList.add(MENU_CLOSED);
navMain.classList.add(CLASS_CLOSED);

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains(CLASS_CLOSED)) {
    navMain.classList.remove(CLASS_CLOSED);
    navMain.classList.add(CLASS_OPENED);
    headerMain.classList.add(MENU_OPENED);
    headerMain.classList.remove(MENU_CLOSED);
  } else {
    navMain.classList.add(CLASS_CLOSED);
    navMain.classList.remove(CLASS_OPENED);
    headerMain.classList.remove(MENU_OPENED);
    headerMain.classList.add(MENU_CLOSED);
  }
});
