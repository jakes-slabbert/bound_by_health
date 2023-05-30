/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
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
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function goToApproach(type) {
    switch (type) {
        case 0:
            {
                // Build muscle
                setApproachText(
                    'Building muscle helps protect your joints from injury. It also helps you to maintain flexibility and balance, helping you stay independent as you get older. As you gain muscle, your body starts to burn more kilojoules at rest. Let us help you find the best route to the guns you would like to have.',
                    'Build muscle'
                );
                break;
            }
        case 1:
            {
                // Weight loss
                setApproachText(
                    'Modest weight loss of 5% to 10% of your total body weight is likely to produce health benefits, such as improvements in blood pressure, blood cholesterol, and blood sugars. At Bound by Health, we know every bod is different and tailor your program to you and your body.',
                    'Weight loss'
                );
                break;
            }
        case 2:
            {
                // Healthy lifestyle
                setApproachText(
                    'A healthy lifestyle encompassed our entire lives. Here at Bound by Health, we tailor your excersize routines and nutritional intake to your needs. Some extensive experience in the almagamation of these fields has always yielded better and better results for our clients.',
                    'Healthy lifstyle'
                );
                break;
            }
        default: throw new Error('Type was not defined correctly.');
    }
}

function setApproachText(text, headingText) {
    if (text === undefined)
        throw new Error('Text is not defined.');

    if (headingText === undefined)
        throw new Error('Heading text is not defined.');
    
    document.getElementById('approach-text').innerText = text;
    document.getElementById('approach-heading').innerText = headingText;
}