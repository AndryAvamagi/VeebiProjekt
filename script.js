// script.js
const background = document.querySelector('.background-image');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const opacity = 1 - scrollPos / 1000;
  background.style.opacity = opacity.toFixed(2);
});

  