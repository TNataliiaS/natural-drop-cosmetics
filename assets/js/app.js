// Menu Toggle
// ****************
const burgerToggle = document.getElementById('burger__btn');
const navMenuToggle = document.getElementById('nav-menu');
const navMenuBlock = document.getElementById('nav-menu__block');
const navMenuBlockOne = document.getElementById('nav-menu__block-one');
const headerMaskShow = document.getElementById('header__mask');
const bodyDisableScroll = document.querySelector('body');

document.onclick = function (closeMenu) {
    if(closeMenu.target.id !== 'burger__btn' && closeMenu.target.id !== 'nav-menu__block' && closeMenu.target.id !== 'nav-menu__block-one' && closeMenu.target.id !== 'nav-menu') {
        burgerToggle.classList.remove('burger__btn--active');
        navMenuToggle.classList.remove('nav-menu--active');
        headerMaskShow.classList.remove('header__mask--show');
        bodyDisableScroll.classList.remove('no-scroll');
    };
};

burgerToggle.onclick = function () {
    burgerToggle.classList.toggle('burger__btn--active');
    navMenuToggle.classList.toggle('nav-menu--active');
    headerMaskShow.classList.toggle('header__mask--show');
    bodyDisableScroll.classList.toggle('no-scroll');
};


// Button burger mobile
// ****************
window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.burger__btn');
        scroll.classList.toggle('burger__btn--mobile', window.scrollY > 500)
    });


// Smooth scoll element
// ****************
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.smooth-scroll');

    for(let i=0; i<links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            const blockID = event.target.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }
});


// Button scroll up
// ****************
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scroll-up-link');
    scroll.classList.toggle('scroll-up-link--showed', window.scrollY > 650)
});


// Intro Slider (swiper js https://swiperjs.com/ )
// ****************
const introSlider = new Swiper('.intro-slider__inner', {
    effect: 'fade',
    fadeEffect: {
        crossFade: false,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    speed: 2500,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    navigation: {
        nextEl: '.intro-slider__arrows--next',
        prevEl: '.intro-slider__arrows--prev'
    },
  });


// Best-sellers Slider (swiper js https://swiperjs.com/ )
// ****************
const bestSellersSlider = new Swiper('.slider-card-list', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 700,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    navigation: {
        nextEl: '.slider-card-arrows--next',
        prevEl: '.slider-card-arrows--prev'
    },
    centeredSlides: true,
    mousewheel: {
        invert: true,
    },
    breakpoints: {
        415: {
            slidesPerView: 1.5,
        },

        468: {
            slidesPerView: 1.75,
        },

        542: {
            slidesPerView: 2,
        },

        621: {
            slidesPerView: 2.25,
        },

        696: {
            slidesPerView: 2.5,
        },

        773: {
            slidesPerView: 3,
        },

        925: {
            slidesPerView: 3.5,
        },

        1078: {
            slidesPerView: 4,
        },
    },

});


// Favorite button toggle
// ****************
const favBtns = document.querySelectorAll('.btn-favorite');

favBtns.forEach(function (favBtn) {
    favBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.target.classList.toggle('btn-favorite--active');
    });
});


// Add Cart toggle
// ****************
const addСartBtns = document.querySelectorAll('.card-item__button');

addСartBtns.forEach(function (addСartBtns) {
    addСartBtns.addEventListener('click', function (evt) {
      evt.preventDefault();
      evt.target.classList.toggle('card-item__button--active');
    });
});


// Rating
// ****************
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
};

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    };

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating--set')) {
            setRating(rating);
        };
    };

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    };

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    };

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function (e) {
                initRatingVars(rating);

                ratingValue.innerHTML = index + 1;
                setRatingActiveWidth();
            });
        };
    };
};


// Stock Slider (swiper js https://swiperjs.com/ )
// ****************
const stockSlider = new Swiper('.stock', {
    loop: true,
    spaceBetween: 50,
    speed: 2700,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: '.stock__arrows--next',
        prevEl: '.stock__arrows--prev'
    },
  });


document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 415) {
        stockSlider.autoplay.stop();
        // stockSlider.updateAutoHeight(speed);
    }
});


// Reviews slider (swiper js https://swiperjs.com/ )
// ****************
const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    speed: 2700,
    spaceBetween: 50,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
});


// Aos.js https://github.com/michalsnik/aos
// ****************

AOS.init({
    // Global settings:
    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });


// Modal
// ****************
let modal = document.querySelector('.modal');
let modalWrapper = document.querySelector('.modal__wrapper');
let openModalBtn = document.querySelectorAll('.modal__open-btn');
let closeModalBtn = document.querySelector('.modal__close');
let bodyNoScroll = document.querySelector('body');

openModalBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--active');
        modalWrapper.classList.add('modal__wrapper--active');
        bodyNoScroll.classList.add('scroll-off');
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
    modalWrapper.classList.remove('modal__wrapper--active');
    bodyNoScroll.classList.remove('scroll-off');
});

document.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('modal--active');
        modalWrapper.classList.remove('modal__wrapper--active');
        bodyNoScroll.classList.remove('scroll-off');
    };
});