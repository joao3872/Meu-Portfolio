let menu = document.querySelector('.menu')

let iconMenu = document.querySelector('.icon-menu')

let iconClose = document.querySelector('.close-menu')

// modal contatos e modal informações:
let modal = document.querySelector('.fundo-modal')

let informacoes = document.querySelector('.modal_informacoes')

let btn = document.querySelectorAll('.btn')

let icons = document.querySelectorAll('.icons')


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



// Função criada para substituir o ícone, quando o cursor do mouse, está dentro do botão.

function hoverOn() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseenter', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/github-brands-solid2.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/linkedin-brands-solid2.svg')
            }
        })
    }
}

hoverOn()


// Função para desfazer a substituição dos ícones, quando o cursor do mouse estiver fora do botão.

function hoverOff() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseleave', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/github-brands-solid.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/linkedin-brands-solid.svg')
            }
        })
    }
}

hoverOff()
