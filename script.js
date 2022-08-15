
let bird = document.querySelector(".bird")
let gravedad = 2
let birdBottom = 100

/* Ejercicio 1.
Crea una función terminar(). El siguiente código se debe de ejecutar al llamar a la función:
clearInterval(timerId)
*/


/* Ejercicio 2.
Crea una función verificarColision(). Dentro de la función, agrega una declaración if
que revise si birdBottom es menor a 0. Si es birdBottom es menor a 0, llama a la función terminar().
*/



/* Ejercicio 3.
Modifica la función loop(). Cuando se llame a la función:
- Se debe de llamar a la función efectoGravedad()
- Se debe de llamar a la función verificarColision()
*/
function loop() {
    efectoGravedad() 
}



// Funcionalidad para que bird se mueva hacia abajo si no se pulsa una tecla
function efectoGravedad() {
    birdBottom -= gravedad;
    bird.style.bottom = birdBottom + "px";
}


// repetir funcion loop cada 2 segundos
let timerId = setInterval(loop, 20)


// funcion para que bird se mueva hacia arriba
function birdMueveArriba() {
    birdBottom += 40
    bird.style.bottom = birdBottom + "px"
}

// event listener para llamar a la funcion birdMueveArrbia al pulsar una tecla
document.addEventListener("keyup", birdMueveArriba)
