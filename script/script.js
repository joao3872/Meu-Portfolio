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


// Escutador de eventos para ativar a Arrow Function, quando qualquer um dos links do menu for clicado.

linksDoMenu.addEventListener('click', () => {
    fecharMenu()
})


function abrirContatos() {
    modal.style.display = 'block'
}

function fecharContatos() {
    modal.style.display = 'none'
}


<<<<<<< HEAD
function modalInformacoes() {
    var informacoes = document.querySelector('.modal_informacoes')

=======

function modalInformacoes() {
>>>>>>> ebc6de40b6a4762aca2b13558c027544df60bbce
    informacoes.style.display = 'block'
}


function fecharInformacoes() {
<<<<<<< HEAD
    var informacoes = document.querySelector('.modal_informacoes')

=======
>>>>>>> ebc6de40b6a4762aca2b13558c027544df60bbce
    informacoes.style.display = 'none'
}
