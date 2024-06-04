let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bi-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bi-x");
    navlist.classList.remove("open");
}
