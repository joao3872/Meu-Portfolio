let menu = document.querySelector('.menu')

let iconMenu = document.querySelector('.icon-menu')

let iconClose = document.querySelector('.close-menu')

// modal contatos e modal informações:
let modal = document.querySelector('.fundo-modal')

let informacoes = document.querySelector('.modal_informacoes')


function abrirMenu() {
    menu.style.display = 'block'
    iconMenu.style.display = 'none'
    iconClose.style.display = 'block'
}

function fecharMenu() {
    menu.style.display = 'none'
    iconMenu.style.display = 'block'
    iconClose.style.display = 'none'
}


function abrirContatos() {
    modal.style.display = 'block'

    if (modal.style.display != 'none') {
        fecharMenu()
    }
}

function fecharContatos() {
    modal.style.display = 'none'
}



function modalInformacoes() {
    informacoes.style.display = 'block'
}


function fecharInformacoes() {
    informacoes.style.display = 'none'
}
