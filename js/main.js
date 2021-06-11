const menuLink = document.querySelector('.button-menu')
const navMenu = document.querySelector('.nav-menu')
const buttonClose = document.querySelector('.button-close')
menuLink.addEventListener('click', () =>{
    navMenu.classList.add('is-active')
    buttonClose.classList.add('is-active')
})
buttonClose.addEventListener('click', () =>{
    navMenu.classList.remove('is-active')
    buttonClose.classList.remove('is-active')
})