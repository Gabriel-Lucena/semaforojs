"use strict"

const semaforo = document.getElementById("semaforo")
var a = 0
let idInterval

function tornarVerde() {

    semaforo.src = "img/verde.png"
    a = 1

}

function tornarAmarelo() {

    semaforo.src = "img/amarelo.png"
    a = 2

}

function tornarVermelho() {

    semaforo.src = "img/vermelho.png"
    a = 3

}

function trocarCor() {

    if (a == 0 || a == 3) {

       tornarVerde()

    } else if (a == 1) {

        tornarAmarelo()

    } else {

        tornarVermelho()
        a = 0

    }
}

function tornarAutomatico() {

    const buttonAutomatico = document.getElementById("automatico")

    if (buttonAutomatico.textContent == "Automático") {

        buttonAutomatico.textContent = "Parar"
        idInterval = setInterval(trocarCor,100)

    } else {

        clearInterval(idInterval)
        buttonAutomatico.textContent = "Automático"

    }

}

// Eventos

document.getElementById("verde")
    .addEventListener("click", tornarVerde)

document.getElementById("amarelo")
    .addEventListener("click", tornarAmarelo)
    
document.getElementById("vermelho")
    .addEventListener("click", tornarVermelho)

document.getElementById("automatico")
    .addEventListener("click", tornarAutomatico)
