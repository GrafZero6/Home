const nav = document.querySelector('#header-navs');
const navBtn = document.querySelector('#btm-burger');
const navBtnImg = document.querySelector('#nav-btn-img');
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/exit.svg";

    } else {
        navBtnImg.src = "./img/menu-burger.svg";
    }
}