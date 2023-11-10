$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) { // mistahes elemendi a elemendile vajutades, alusta funktsiooni 
       var target = $($(this).attr('href')); //target on vajutatud a elemendi siht
       if (target.length) { //kontrollib, kas target eksisteerib
          event.preventDefault(); //hoiab ära default eventi ehk lihtsalt objektini hüppamine (mitte sujuv, vaid instant)
          $('html, body').stop().animate({ // see funktsioon tagab sujuva liikumise targetini 
             scrollTop: target.offset().top
          }, 500);
       }
    });
});

// Koodi genereeris chat GPT 