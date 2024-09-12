const logo = document.querySelector("#logo");
const navbar = document.querySelector("#navbar")
logo.addEventListener("click", function () {
    if (navbar.classList.contains("show-nav")) {
        navbar.classList.remove("show-nav");
    }
    else {
        navbar.classList.add("show-nav")
    }
})