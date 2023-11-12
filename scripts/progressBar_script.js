                        
window.addEventListener('scroll', () => {   //juhul kui juhtub event scroll, tee seda funktsiooni
    var winScroll = document.documentElement.scrollTop; //scrolli y koordinaat
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //kogu dokumendi kõrgus ehk max y koordinaat
    var scrolled = (winScroll / height) * 100; // arvuta protsent mis on scroll y koordinaat kogu dokumendi kõrgusest
    document.getElementById("myBar").style.width = scrolled + "%"; // muuda css'is id MyBar laiust  
    })

// kirjutas Andry Avamägi