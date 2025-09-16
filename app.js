'use strict'

const body = document.querySelector('body');
const input = document.getElementById('input');
const botaoImagem = document.getElementById('troca-imagem');

function trocarImagem () {
    let nomeImg = document.getElementById('input').value.trim()
    
    nomeImg = nomeImg.toLowerCase()

    const caminhoImg = `url(./img/${nomeImg}.jpg)`

    document.documentElement.style.setProperty('--bg-img', caminhoImg)
  

}

function autoImagem () {

}

botaoImagem.addEventListener('click' , trocarImagem)