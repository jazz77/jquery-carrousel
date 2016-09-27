
function maBoucle() {

    setTimeout(function () {
        var $slideCourant = $('.slide-actif');
        var $slideSuivant = $slideCourant.next();

        if ($slideSuivant.length === 0) {
            $slideSuivant = $('#carrousel').find('li').first();
        }
        $slideCourant.fadeOut().removeClass('slide-actif');
        $slideSuivant.fadeIn().addClass('slide-actif');
        
        maBoucle();
    }, 3000);

};

var main = function () {

    //   $('ul').children('li').css('display', 'none');
    //   $('ul').children('.slide-actif').css('display', 'inline-block');
    
    $('#caarrousel').find('li:first').addClass('slide-actif');

    maBoucle();
    $('#suivant').click(function () {
        var $slideCourant = $('.slide-actif');
        var $slideSuivant = $slideCourant.next();

        if ($slideSuivant.length === 0) {
            //$slideSuivant = $('ul li').first();
            $slideSuivant = $('#carrousel').find('li').first();
        }
        $slideCourant.show().fadeOut(1000).removeClass('slide-actif');
        $slideSuivant.hide().fadeIn(1000).addClass('slide-actif');
    });

    $('#precedent').on('click', function () {
        var $slideCourant = $('.slide-actif');
        var $slidePrecedent = $slideCourant.prev();

        if ($slidePrecedent.length === 0) {
            //$slidePrecedent = $('ul li').last();
            $slidePrecedent = $('#carrousel').find('li').last();
        }
        $slideCourant.show().fadeOut(1000).removeClass('slide-actif');
        $slidePrecedent.hide().fadeIn(1000).addClass('slide-actif');

    });

};

$(document).ready(main);