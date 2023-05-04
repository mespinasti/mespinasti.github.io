/*!
 * Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Writing effect

const typed = new Typed('.typed', {
    strings: [
        '<i class="effect">Ingeniera Informática</i>'
    ],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 80, // Velocidad en mlisegundos para poner una letra,
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

//Wave effect
const hand = document.querySelector('.emoji.wave-hand');

function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
        hand.classList.remove('wave');
    }, 2000);
}

setTimeout(function() {
    waveOnLoad();
}, 1000);

hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
});

hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
});