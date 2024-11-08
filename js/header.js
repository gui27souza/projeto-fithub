// Script que implementa um menu de hamburguer para a header em caso de telas menores

const collapse_button = document.getElementById('collapse-button')
const header_nav = document.getElementById('header-nav')
const menu_animation = document.getElementById('collapse-button-animation')

let header_is_open = true

function header() {
    if (header_is_open) {
        header_nav.style.bottom = '120rem'
        menu_animation.style.transform = 'rotate(90deg)'
        header_is_open = false
    } 
    else {
        headerNavSize()
        menu_animation.style.transform = 'rotate(0deg)'
        header_is_open = true
    }

}

function headerNavSize() {
    let header_nav_size = header_nav.offsetHeight
    header_nav.style.bottom = header_nav_size*(-1) + 'px'
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth >= 768) {
        header_is_open = true
        header()
    } 
}, true)

window.addEventListener("load", (event) => {
    if (window.innerWidth <= 768) {
        headerNavSize()
        header()
    }
})