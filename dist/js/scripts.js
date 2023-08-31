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

    getApproachImage();

});

var approachImage = 'assets/img/approach_7.png';

function getApproachImage() {
    var _img = document.getElementById('approach-img');
    var newImg = new Image;
    newImg.onload = function () {
        _img.src = this.src;
    }
    newImg.src = approachImage;

    return approachImage
};

function goToApproach(type) {

    switch (type) {
        case 0:
            {
                // Build muscle
                setApproachText(
                    'Building muscle helps protect your joints from injury. It also helps you to maintain flexibility and balance, helping you stay independent as you get older. As you gain muscle, your body starts to burn more kilojoules at rest. Let us help you find the best route to the guns you would like to have.',
                    'Build muscle'
                );
                this.approachImage = 'assets/img/approach_2.png';
                getApproachImage();
                break;
            }
        case 1:
            {
                // Weight loss
                setApproachText(
                    'Modest weight loss of 5% to 10% of your total body weight is likely to produce health benefits, such as improvements in blood pressure, blood cholesterol, and blood sugars. At Bound by Health, we know every bod is different and tailor your program to you and your body.',
                    'Weight loss'
                );
                this.approachImage = 'assets/img/approach_10.png';
                getApproachImage();
                break;
            }
        case 2:
            {
                // Healthy lifestyle
                setApproachText(
                    'A healthy lifestyle can improve nearly every aspect of our lives. Here at Bound by Health, we tailor your excersize routines and nutritional intake to your needs. Some extensive experience in the almagamation of these fields has always yielded better and better results for our clients.',
                    'Healthy lifstyle'
                );
                this.approachImage = 'assets/img/approach_9.png';
                getApproachImage();
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

function getInTouch()
{
    // Some refinement needed for user experience.
    window.location.href = "mailto:mail@example.org?subject=" + document.getElementById('approach-heading').innerText + "&body=" + document.getElementById('approach-text').innerText;
}

window.addEventListener('scroll', animation);

function animation(e) {

    var approach_section_top = document.getElementById('approach-container');
    var approach_section_bottom = document.getElementById('approach-img');
    // Find the position of the section
    var approach_section_top_pos = approach_section_top.offsetTop;
    var approach_section_bottom_pos = approach_section_bottom.offsetTop;

    var window_pos = window.pageYOffset;
    // When the page reaches the top of the approach section, the section should slide in.
    if (window_pos > approach_section_top_pos) {
        approach_section_top.classList.add('animation-in');
    }
    // When the page reaches the end of the approach section, the classes need to be removed, and slided out again.
    if (window_pos > approach_section_bottom_pos) {
        approach_section_top.classList.remove('animation-in');
        approach_section_top.classList.add('animation-out');
    }
}