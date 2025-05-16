import Splide from '@splidejs/splide';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';

export class Main {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');
        this.form = document.querySelector('#form');

        this.initSplide();
        this.addEventListeners();
    }

    addEventListeners() {
        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }


    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }

    handleFormSubmit(event) {
        event.preventDefault();

        window.location.href = 'thank-you.html';
    }

    initSplide() {
        const splide = new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            pagination: false,
            arrows: false,
            perPage: 5,
            breakpoints: {
                768: {
                    perPage: 4,
                },
                600: {
                    perPage: 3,
                }
            },
            autoScroll: {
                speed: 1,
            },
        });

        splide.mount({ AutoScroll });
    }
}
