//variables//

let numeroSecreto = generarNumeroSecreto();

let intentos = 1;

let listaNumerosSorteados = [];

let numeroMaximo = 10;
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
       let elementoHTML = document.querySelector(elemento);
       elementoHTML.innerHTML = texto;
       return;
}

function verificarIntento() {
       let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
       if (numeroDeUsuario === numeroSecreto) {
              asignarTextoElemento("p",`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
              document.getElementById("reiniciar").removeAttribute("disabled")
       } else {
              //el usuario no acertó
              if (numeroSecreto > numeroDeUsuario)
              asignarTextoElemento ("p","El número es mayor");
             else {
              asignarTextoElemento ("p","El número es menor");
         } 
         intentos++;
         limpiarCaja();
       }
       return;
       }

function limpiarCaja() {
       document.querySelector("#valorUsuario").value= ""
       
      
}
function condicionesIniciales(){
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}
function generarNumeroSecreto() {
       let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
       if (listaNumerosSorteados.length == numeroMaximo) {
              asignarTextoElemento ("p", "ya se sortearon todos los numeros posibles")
       }
       if (listaNumerosSorteados.includes(numeroGenerado)) {
           return generarNumeroSecreto();
       } else {
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
       }
}
function reiniciarJuego() {
       //limpiar caja
       limpiarCaja();
       // generar numero, reiniciar numero de intentos y textos.
       condicionesIniciales();
       document.querySelector("#reiniciar").setAttribute("disabled", "true")
       generarNumeroSecreto();
}

condicionesIniciales();
      