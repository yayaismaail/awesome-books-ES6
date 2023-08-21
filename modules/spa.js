// Select nav links
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

// Select the Sections
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');

// Apply eventListener to each nav links and default page
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

// Exporting to the index.js
export {
  section1, list, section2, contact, addNew, section3,
};
