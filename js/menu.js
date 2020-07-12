const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const toolbar = document.querySelector(".toolbar");

burger.addEventListener("click", e => {
    nav.classList.add("show");

    window.addEventListener('scroll', () => {
        nav.classList.remove("show");
    })

    header.addEventListener("click", e => {
       if(e.target.offsetParent !== toolbar) {
        nav.classList.remove("show");
       }
    })
})

