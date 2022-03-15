(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 910 && body.classList == 'white') {
            burgerLines.forEach((line) => {
                line.classList.add('burger_line_day-mode');
                line.classList.add('transition_0');
            })
        }
        else {
            burgerLines.forEach((line) => {
                line.classList.remove('burger_line_day-mode');
                line.classList.remove('transition_0');
            })
        }
    };
}());


const dayNight = document.querySelector(".day-night-mode");
const body = document.querySelector("body")
const titles = document.querySelectorAll(".title_main")
const menuHeader = document.querySelector(".header_nav")
const burgerLines = document.querySelectorAll(".burger_line")
const linksForBurger = document.querySelectorAll(".header_link")

const changeDayNight = () => {
    body.classList.toggle('white')
    dayNight.classList.toggle('day-mode')
    menuHeader.classList.toggle('header_nav_day-mode')
    titles.forEach((title) => {
        title.classList.toggle('title_main_white');
    })
}
dayNight.addEventListener("click", changeDayNight);

const firstLine = document.querySelector(".burger_line_1")
const secondLine = document.querySelector(".burger_line_2")
const lastLine = document.querySelector(".burger_line_3")
const burger = document.querySelector(".header_burger")

const burgerOpen = () => {
    menuHeader.classList.toggle('burger_open')
    firstLine.classList.toggle('burger_line_1_open')
    secondLine.classList.toggle('burger_line_2_open')
    lastLine.classList.toggle('burger_line_3_open')
    if (body.classList == 'white') {
        linksForBurger.forEach((link) => {
            link.classList.toggle('header_link_day-mode');
        })
        burgerLines.forEach((line) => {
            line.classList.toggle('burger_line_day-mode');
        })
    }
}
burger.addEventListener("click", burgerOpen)

linksForBurger.forEach((link) => {
    link.addEventListener("click", burgerOpen)
})