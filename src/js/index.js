import '../scss/style.scss';

function swiperSettings(target) {
    const breakpoint = window.matchMedia("(min-width:768px)");
    let swiper;
    const breakpointChecker = function () {
        if (breakpoint.matches === true && swiper !== undefined) {
            swiper.destroy(true, true);
            return;
        }
        if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };
    
    const enableSwiper = function () {
        swiper = new Swiper(target, {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}

swiperSettings(".brends__swiper");
swiperSettings(".devices__swiper");
swiperSettings(".prices__swiper");

function moreButton(target, openedText, closedText) {
    let moreButtonIcon = document.createElement("i");
    moreButtonIcon.classList.add("more-button__icon", "icon", "icon--more");
    let wrapper = document.querySelector(`${target}__swiper .swiper-wrapper`);
    let button = document.querySelector(`${target}__more-button`);

    button.addEventListener("click", () => {
        wrapper.classList.toggle("swiper-wrapper--opened");
        button.classList.toggle("more-button--active");
        if (wrapper.classList.contains("swiper-wrapper--opened")) {
            button.replaceChildren(moreButtonIcon, closedText);
        } else {
            button.replaceChildren(moreButtonIcon, openedText);
        }
    });
}

moreButton(".brends", "Показать все", "Скрыть");
moreButton(".devices", "Показать все", "Скрыть");

let servicesButton = document.querySelector(".services__more-button");
let servicesText = document.querySelectorAll(".services__text");
servicesButton.addEventListener("click", () => {
    servicesText.forEach((e) => {
        e.classList.toggle("services__text--show");
    })
    servicesButton.classList.toggle("more-button--active");
    if (servicesButton.classList.contains("more-button--active")) {
        servicesButton.replaceChildren(moreButtonIcon, "Скрыть");
    } else {
        servicesButton.replaceChildren(moreButtonIcon, "Читать далее");
    }
});

let overlay = document.querySelector('.page-overlay');
let overlaySidebar = document.querySelector('.sidebar-overlay')
let sidebar = document.querySelector('.sidebar');
let sidebarOpen = document.querySelector('.header-menu__burger');
let sidebarClose = document.querySelector('.sidebar-header__close');


sidebarOpen.addEventListener("click", () => {
    overlaySidebar.classList.remove("sidebar-overlay--hidden");
    sidebar.classList.add("sidebar--opened");
});
sidebarClose.addEventListener("click", () => {
    overlaySidebar.classList.add("sidebar-overlay--hidden");
    sidebar.classList.remove("sidebar--opened");
});
overlaySidebar.addEventListener("click", () => {
    overlaySidebar.classList.add("sidebar-overlay--hidden");
    sidebar.classList.remove("sidebar--opened");
});

let modalCall = document.querySelector('#modal-call');
let modalCallClose = document.querySelector('#modal-call-close');
let modalFeedback = document.querySelector('#modal-feedback');
let modalFeedbackClose = document.querySelector('#modal-feedback-close');

let headerActionRepair = document.querySelector('.header-actions__repair');
let headerActionCall = document.querySelector('.header-actions__call');
let sidebarActionCall = document.querySelector('.sidebar-footer__actions-call');

headerActionRepair.addEventListener("click", () => {
    overlay.classList.remove("page-overlay--hidden");
    modalFeedback.classList.add("modal--opened");
});

headerActionCall.addEventListener("click", () => {
    overlay.classList.remove("page-overlay--hidden");
    modalCall.classList.add("modal--opened");
});

sidebarActionCall.addEventListener("click", () => {
    overlay.classList.remove("page-overlay--hidden");
    modalCall.classList.add("modal--opened");
});

modalCallClose.addEventListener("click", () => {
    overlay.classList.add("page-overlay--hidden");
    modalCall.classList.remove("modal--opened");
});

modalFeedbackClose.addEventListener("click", () => {
    overlay.classList.add("page-overlay--hidden");
    modalFeedback.classList.remove("modal--opened");
});

overlay.addEventListener("click", () => {
    overlay.classList.add("page-overlay--hidden");
    modalCall.classList.remove("modal--opened");
    modalFeedback.classList.remove("modal--opened");
});