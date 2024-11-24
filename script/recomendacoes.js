function verMais() {
    var parteLista = document.querySelector('div.parte-lista')
    var buttonMais = document.querySelector('button.button_mais')
    var buttonMenos = document.querySelector('button.button_menos')
    
    parteLista.style.display = 'block'
    buttonMais.style.display = 'none'
    buttonMenos.style.display = 'block'
}

function verMenos() {
    var parteLista = document.querySelector('div.parte-lista')
    var buttonMais = document.querySelector('button.button_mais')
    var buttonMenos = document.querySelector('button.button_menos')
    
    parteLista.style.display = 'none'
    buttonMenos.style.display = 'none'
    buttonMais.style.display = 'block'
}


function abrirLinks() {
    var fundoLink = document.querySelector('section.fundo-links')
    
    fundoLink.style.display = 'block'
}

function fecharLinks() {
    var fundoLink = document.querySelector('section.fundo-links')
    
    fundoLink.style.display = 'none'
}


function mais() {
    var conteudo = document.querySelector('div.continuacao')
    var buttonMais = document.querySelector('button.mais')
    var buttonMenos = document.querySelector('button.menos')
    
    conteudo.style.display = 'block'
    buttonMenos.style.display = 'block'
    buttonMais.style.display = 'none'
}

function menos() {
    var conteudo = document.querySelector('div.continuacao')
    var buttonMais = document.querySelector('button.mais')
    var buttonMenos = document.querySelector('button.menos')
    
    conteudo.style.display = 'none'
    buttonMenos.style.display = 'none'
    buttonMais.style.display = 'block'
}



function scrolltop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


function buttonTop() {
    var topo = document.querySelector('button.topo')

    if (document.documentElement.scrollTop == 0) {
        topo.style.display = 'none'
    } else {
        topo.style.display = 'flex'
    }
}



// Função criada para substituir o ícone, quando o cursor do mouse, está dentro do botão.

function hoverOn() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseenter', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/google-brands-solid2.svg')
            } else {
                icons[1].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
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
                icons[0].setAttribute('src', 'imagens/google-brands-solid.svg')
                btn[0].style.color = 'var(--red)'
                btn[0].style.borderColor = 'var(--red)'
                btn[0].style.background = 'none'
            } else {
                icons[1].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
                btn[1].style.color = 'var(--green-whatsapp)'
                btn[1].style.borderColor = 'var(--green-whatsapp)'
                btn[1].style.background = 'none'
            }
        })
    }
}

hoverOff()



const screenTouchTwo = window.matchMedia("(max-width: 1007px)")

function touchHoverTwo(event) {
    if (event.matches) {
        for (let c = 0; c < btn.length; c++) {
            btn[c].addEventListener('touchstart', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/google-brands-solid2.svg')
                    btn[0].classList.add('hoverGmail')
                    
                    btn[0].style.color = 'var(--white)'
                } else {
                    icons[1].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
                    btn[1].classList.add('hoverWhatsapp')

                    btn[1].style.color = 'var(--white)'
                }
            })

            btn[c].addEventListener('touchend', () => {
                setTimeout(() => {
                    if (btn[c] == btn[0]) {
                        icons[0].setAttribute('src', 'imagens/google-brands-solid.svg')
                        btn[0].classList.remove('hoverGmail')

                        btn[0].style.color = 'var(--red)'
                        btn[0].style.borderColor = 'var(--red)'
                    } else {
                        icons[1].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
                        btn[1].classList.remove('hoverWhatsapp')

                        btn[1].style.color = 'var(--green-whatsapp)'
                        btn[1].style.borderColor = 'var(--green-whatsapp)'
                    }
                }, 3000)
            })
        }
    }
}

touchHoverTwo(screenTouchTwo)
