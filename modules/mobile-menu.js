// Select the Menus
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');

// Assign eventListeners
mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  desktopMenu.classList.remove('active');
}));

// Exporting to the index.js
export {
  mobileMenu, desktopMenu,
};