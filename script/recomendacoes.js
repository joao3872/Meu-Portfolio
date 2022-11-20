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
