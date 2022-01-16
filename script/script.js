function abrirMenu() {
    var menu = document.querySelector('nav.menu')
    var iconMenu = document.querySelector('span.icon-menu')
    var iconClose = document.querySelector('span.close-menu')

    menu.style.display = 'block'
    iconMenu.style.display = 'none'
    iconClose.style.display = 'block'
}


function fecharMenu() {
    var menu = document.querySelector('nav.menu')
    var iconMenu = document.querySelector('span.icon-menu')
    var iconClose = document.querySelector('span.close-menu')

    menu.style.display = 'none'
    iconMenu.style.display = 'block'
    iconClose.style.display = 'none'
}


function abrirContatos() {
    var modal = document.querySelector('section.fundo-modal')

    modal.style.display = 'block'
}

function fecharContatos() {
    var modal = document.querySelector('section.fundo-modal')

    modal.style.display = 'none'
}
