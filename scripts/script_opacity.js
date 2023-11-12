const background = document.querySelector('.background-image'); // valib klassi ".background-image"

window.addEventListener('scroll', () => { //iga scrolliga, tee seda funktsiooni
  const scrollPos = window.scrollY; //aknas hiire y koordinaat
  const opacity = 1 - scrollPos / 1000; // arvuta opacity
  background.style.opacity = opacity.toFixed(2); // muuda klassi opacityt
});

// kirjutas Andry Avamägi
  