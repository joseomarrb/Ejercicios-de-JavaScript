/**
 * En la página que puedes construir con este código HTML tienes tres bloques: 
 * uno de color rojo otro de color blanco y otro de color azul. Crea un script 
 * para que cuando el ratón se mueva desde el bloque rojo al central éste se 
 * pongo rojo. Si se mueve desde el azul al central, éste se pondrá azul. Si 
 * entra en el bloque desde otro sitio el bloque recuperará el color blanco.
 * 
 * <head>           
 * <style>            
 * div{ width: 100px; height:100px;}            
 *  </style>           
 * </head>
 * <body>
            
 *    <div id="c1" style="background: red"></div>          
 *    <div id="c2" style="background: white"></div>             
 *    <div id="c3" style="background: blue"></div>             
 * </body>
 * 
 * Aclaraciones: Usa el objeto evento pasado como argumento. Lee y pon los colores usando 
 * style.background. El script lo que hace es que al entrar en el bloque central arrastra 
 * el color del bloque por el que pasa.
 */

const body = document.body
const cuadroRojo = document.querySelector("#c1");
const cuadroBlanco = document.querySelector("#c2");
const cuadroAzul = document.querySelector("#c3");

body.addEventListener('mouseover', () => {
    cuadroBlanco.style.backgroundColor = "white";
});

cuadroRojo.addEventListener("mouseenter", () => {
    cuadroBlanco.style.backgroundColor = "red";
});

cuadroAzul.addEventListener("mouseenter", () => {
    cuadroBlanco.style.backgroundColor = "blue";
});