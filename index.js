// 11b sinifi - mehdinin sinifi
const menuIcon = document.getElementById('menu-icon')
const resNav = document.getElementById('res-navbar')
const xmark = document.getElementById('xmark-icon')

menuIcon.addEventListener("click", openResNav)

function openResNav() {
    resNav.classList.add('transform')
}

xmark.addEventListener('click', clsResNav)

function clsResNav() {
    resNav.classList.remove('transform')
}

resNav.addEventListener('click', clsResNav)