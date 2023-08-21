import LibraryApp from './modules/LibraryApp.js';

import {
  section1, list, section2, contact, addNew, section3,
} from './modules/spa.js';

import {
  mobileMenu, desktopMenu,
} from './modules/mobile-menu.js';

import DateTime from './modules/date.js';

const libraryApp = new LibraryApp();

const button = document.querySelector('#add-book');
button.addEventListener('click', (e) => {
  libraryApp.handleAddBook(e);
});

document.addEventListener('DOMContentLoaded', () => {
  section1.classList.add('d-none');
  section2.classList.add('d-none');
  section3.classList.remove('d-none');
});

list.addEventListener('click', () => {
  section1.classList.remove('d-none');
  section2.classList.add('d-none');
  section3.classList.add('d-none');
});

addNew.addEventListener('click', () => {
  section2.classList.remove('d-none');
  section1.classList.add('d-none');
  section3.classList.add('d-none');
});

contact.addEventListener('click', () => {
  section3.classList.remove('d-none');
  section2.classList.add('d-none');
  section1.classList.add('d-none');
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  desktopMenu.classList.remove('active');
}));

DateTime();