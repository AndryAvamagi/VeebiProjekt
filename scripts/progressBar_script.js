window.onscroll = function() {myFunction()}; // initsialiseerib funktsiooni
                        
function myFunction() { 
    var winScroll = document.documentElement.scrollTop; // hetke scroll positsioon y koordinaadil
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  // kogu dokumendi kõrgus
    var scrolled = (winScroll / height) * 100; // arvutab, mitu protsenti dokumendist on scrollitud juba
    document.getElementById("myBar").style.width = scrolled + "%"; // muudab progressbari vastavalt 
}

// Koodi kirjutas meeskonnaliige Andry Avamägi