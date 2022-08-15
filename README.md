# Lab: Condicionales para Revisar Colisiones

## Objetivos
- Crear funciones y declaraciones condicionales
- Seleccionar elementos utilizando `.querySelector()`
- Cambiar el estilo de un elemento utilizando `.style`

## Introducción
Hemos aprendido que una declaración `if` revisa una condición y ejecuta una tarea si esa condición se evalúa a `true`. Es hora de poner en práctica nuestros aprendizajes. 

### Funcionalidad del Código
En éste lab harás que cuando `bird` colisione con el suelo, `bird` deje de moverse hacia abajo.

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 


1. Crea la función `terminar()`. Cuando se llame a la función `termiar()`, el siguiente código se debe ejecutar:

`clearInterval(timerId)`


2. Crea la función `verificarColision()`.  Dentro de la función, agrega una declaración `if` que revise si `birdBottom` es menor a `0`. Si `birdBottom` es menor a `0`, llama a la función `terminar()`.


3. Modifica la función `loop()`. Cuando se llame a la función `loop()`:
- Se debe de llamar a la función `efectoGravedad()`
- Se debe de llamar a la función `verificarColision()`


