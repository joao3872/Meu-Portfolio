let menu = document.querySelector('.menu')

let iconMenu = document.querySelector('.icon-menu')

let iconClose = document.querySelector('.close-menu')

let linksDoMenu = document.querySelector('.menu a')

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


linksDoMenu.addEventListener('click', () => {
    fecharMenu()
})

/*function abrirMenu() {
    var menu = document.querySelector('nav.menu')
    var iconMenu = document.querySelector('span.icon-menu')
    var iconClose = document.querySelector('span.close-menu')

    menu.style.display = 'block'
    iconMenu.style.display = 'none'
    iconClose.style.display = 'block'
}*/


/*function fecharMenu() {
    var menu = document.querySelector('nav.menu')
    var iconMenu = document.querySelector('span.icon-menu')
    var iconClose = document.querySelector('span.close-menu')

    menu.style.display = 'none'
    iconMenu.style.display = 'block'
    iconClose.style.display = 'none'
}*/



function abrirContatos() {
    /*var modal = document.querySelector('section.fundo-modal')*/
    modal.style.display = 'block'
}

function fecharContatos() {
    /*var modal = document.querySelector('section.fundo-modal')*/
    modal.style.display = 'none'
}



function modalInformacoes() {
    /*var informacoes = document.querySelector('.modal_informacoes')*/
    informacoes.style.display = 'block'
}


function fecharInformacoes() {
    /*var informacoes = document.querySelector('.modal_informacoes')*/
    informacoes.style.display = 'none'
}
