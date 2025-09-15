'use strict'


const imagens = [
    {
        nome: 'Duquesa',
        url: './img/Duquesa.png'
    },
    {
        nome: 'T&T',
        url: './img/Tasha-e-Tracie.jpg'
    },
    {
        nome: 'Ebony',
        url: './img/Ebony.jpg'
    }
]

function buscandoImagem (ImagemNome) {
    const imagemResultado = getElementById('resultado');
    const input = document.getElementById('textoInserido');
    const botaoImagem = document.getElementById('troca-imagem');
    const Imagem = document.createElement('img');

    const texto = input.value
    

    texto = Imagem
    Imagem.scr = ImagemNome.url
    

    imagemResultado.appendChild(Imagem)
    
    
    botaoImagem.addEventListener('click', resultado);

    

}

function carregarResultado () {

    const resultado = document.getElementById('resultado')

    imagens.forEach(buscandoImagem)
}

carregarResultado()

