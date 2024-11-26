let menu = document.querySelector('.menu')

let iconMenu = document.querySelector('.icon-menu')

let iconClose = document.querySelector('.close-menu')

// modal contatos e modal informações:
let modal = document.querySelector('.fundo-modal')

let informacoes = document.querySelector('.modal_informacoes')

let btn = document.querySelectorAll('.btn')

let icons = document.querySelectorAll('.icons')

let iconLinkedin = document.querySelector('.iconLinkedin')

let iconEye = document.querySelector('.iconEye')

let iconDownload = document.querySelector('.iconDownload')

let btnLinkedin = document.querySelector('.btn_linkedin')

let gmail = document.querySelector('.gmail')

let whatsapp = document.querySelector('.whatsapp')


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
                btn[0].classList.add('hoverGithub')

                btn[0].style.color = 'var(--white)'
                btn[0].style.background = 'var(--black)'
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/linkedin-brands-solid2.svg')
                btn[1].classList.add('hoverLinkedin')

                btn[1].style.color = 'var(--white)'
                btn[1].style.background = 'var(--blue-linkedin)'
            } else if (btn[c] == btn[2]) {
                icons[2].setAttribute('src', 'imagens/google-brands-solid2.svg')
                btn[2].classList.add('hoverGmail')

                btn[2].style.color = 'var(--white)'
                btn[2].style.background = 'var(--red)'
            } else {
                icons[3].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
                btn[3].classList.add('hoverWhatsapp')

                btn[3].style.color = 'var(--white)'
                btn[3].style.background = 'var(--green-whatsapp)'
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
                btn[0].classList.remove('hoverGithub')
                btn[0].style.color = 'var(--black)'
                btn[0].style.borderColor = 'var(--black)'
                btn[0].style.background = 'none'
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/linkedin-brands-solid.svg')
                btn[1].classList.remove('hoverLinkedin')
                btn[1].style.color = 'var(--blue-linkedin)'
                btn[1].style.borderColor = 'var(--blue-linkedin)',
                btn[1].style.background = 'none'
            } else if (btn[c] == btn[2]) {
                icons[2].setAttribute('src','imagens/google-brands-solid.svg')
                btn[2].classList.remove('hoverGmail')
                btn[2].style.color = 'var(--red)'
                btn[2].style.background = 'none'
            } else {
                icons[3].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
                btn[3].classList.remove('hoverWhatsapp')
                btn[3].style.color = 'var(--green-whatsapp)'
                btn[3].style.background = 'none'
            }
        })
    }
}

hoverOff()




// Função para substituir os ícones e desfazer a substituição, por uma tela touch. Só que com a interação do evento touchstart para aplicar a mudança.
// E com a interação do evento touchend, para desfazer a substituição, com o auxílio da função de controle de tempo setTimeout.

const screenTouch = window.matchMedia("(max-width: 1007px)")

function touchHover(event) {
    if (event.matches) {
        for (let c = 0; c < btn.length; c++) {
            btn[c].addEventListener('touchstart', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/github-brands-solid2.svg')
                    btn[0].classList.add('hoverGithub')
                    
                    btn[0].style.color = 'var(--white)'
                    btn[0].style.borderColor = 'var(--white)'
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/linkedin-brands-solid2.svg')
                    btn[1].classList.add('hoverLinkedin')

                    btn[1].style.color = 'var(--white)'
                    btn[1].style.borderColor = 'var(--white)'
                } else if (btn[c] == btn[2]) {
                    icons[2].setAttribute('src', 'imagens/google-brands-solid2.svg')
                    btn[2].classList.add('hoverGmail')

                    btn[2].style.color = 'var(--white)'
                    btn[2].style.borderColor = 'none'
                } else {
                    icons[3].setAttribute('src', 'imagens/whatsapp-brands-solid2.svg')
                    btn[3].classList.add('hoverWhatsapp')

                    btn[3].style.color = 'var(--white)'
                    btn[3].style.borderColor = 'none'
                }
            })

            btn[c].addEventListener('touchend', () => {
                setTimeout(() => {
                    if (btn[c] == btn[0]) {
                        icons[0].setAttribute('src', 'imagens/github-brands-solid.svg')
                        btn[0].classList.remove('hoverGithub')

                        btn[0].style.color = 'var(--black)'
                        btn[0].style.borderColor = 'var(--black)'
                    } else if (btn[c] == btn[1]) {
                        icons[1].setAttribute('src', 'imagens/linkedin-brands-solid.svg')
                        btn[1].classList.remove('hoverLinkedin')

                        btn[1].style.color = 'var(--blue-linkedin)'
                        btn[1].style.borderColor = 'var(--blue-linkedin)'
                    } else if (btn[c] == btn[2]) {
                        icons[2].setAttribute('src','imagens/google-brands-solid.svg')
                        btn[2].classList.remove('hoverGmail')

                        btn[2].style.color = 'var(--red)'
                        btn[2].style.borderColor = 'var(--red)'
                    } else {
                        icons[3].setAttribute('src', 'imagens/whatsapp-brands-solid.svg')
                        btn[3].classList.remove('hoverWhatsapp')

                        btn[3].style.color = 'var(--green-whatsapp)'
                        btn[3].style.borderColor = 'var(--green-whatsapp)'
                    }
                }, 3000)
            })
        }
    }
}

touchHover(screenTouch)




const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
    if (event.matches) {
        iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid3.svg')
        iconEye.setAttribute('src', 'imagens/eye-solid2.svg')
        iconDownload.setAttribute('src', 'imagens/download-solid2.svg')

        btnLinkedin.addEventListener('mouseenter', () => {
            iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid2.svg')
            btnLinkedin.classList.add('hoverLinkedinLight')

            btnLinkedin.style.color = 'var(--white)'
            btnLinkedin.style.borderColor = 'var(--white)'
        })

        btnLinkedin.addEventListener('mouseleave', () => {
            iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid3.svg')
            btnLinkedin.classList.remove('hoverLinkedinLight')

            btnLinkedin.style.color = 'var(--blue-claro)'
            btnLinkedin.style.borderColor = 'var(--blue-claro)'
        })

        btnLinkedin.addEventListener('touchstart', () => {
            iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid2.svg')
            btnLinkedin.classList.add('hoverLinkedinLight')

            btnLinkedin.style.color = 'var(--white)'
            btnLinkedin.style.borderColor = 'var(--white)'
        })

        btnLinkedin.addEventListener('touchend', () => {
            setTimeout(() => {
                iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid3.svg')
                btnLinkedin.classList.remove('hoverLinkedinLight')

                btnLinkedin.style.color = 'var(--blue-claro)'
                btnLinkedin.style.borderColor = 'var(--blue-claro)'
            }, 3000)
        })
    } else {
        iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid.svg')
        iconEye.setAttribute('src', 'imagens/eye-solid.svg')
        iconDownload.setAttribute('src', 'imagens/download-solid.svg')
        
        btnLinkedin.addEventListener('mouseleave', () => {
            iconLinkedin.setAttribute('src', 'imagens/linkedin-brands-solid.svg')
        })
    }
}

// Escuta a mudança de Tema, na função changeTheme(event) com base no perfersColorScheme.

prefersColorScheme.addListener(changeTheme)

// Após as mudanças serem escutadas, as mudanças são aplicadas.

changeTheme(prefersColorScheme)
