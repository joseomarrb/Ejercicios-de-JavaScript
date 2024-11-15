/**
 * En esta página existen tres bloques ocultos. Debes crear un evento 
 * de teclado para que actúe cuando el usuario pulsa una etcla. si pulsa 
 * la tecla 1 se abre el bloque con id ficha1, si pulsa 2 se abre el bloque 
 * ficha2 y si 3 se abre el de ficha3.
 * 
 * <head>            
 * <style>         
 * .oculto{ display: none}            
 * .visible {display:baock}           
 *  </style>             
 * </head>            
 *  <body>            
 * <div class="oculto" id="ficha1">             
 * Hola, soy el bloque 1</div>           
 * <div class="oculto" id="ficha2">           
 * Hola, soy el bloque 2</div>            
 * <div class="oculto" id="ficha3">          
 * Hola, soy el bloque 3</div>            
 * </body>
 * 
 * Aclaraciones: Los bloques no se ven hasta que se pulda la tecla de cada uno. 
 * Solo hay un bloque visible cada vez. Puedes usar las clases definidas y el objeto classList.
 */


document.addEventListener('keydown', (event) => {

    const ficha1 = document.querySelector("#ficha1");
    const ficha2 = document.querySelector("#ficha2");
    const ficha3 = document.querySelector("#ficha3");

    ficha1.classList.add("oculto");
    ficha1.classList.remove("visible");
    ficha2.classList.add("oculto");
    ficha2.classList.remove("visible");
    ficha3.classList.add("oculto");
    ficha3.classList.remove("visible");


    if (event.key === "1") {
        ficha1.classList.remove("oculto");
        ficha1.classList.add("visible");
    } else if (event.key === "2") {
        ficha2.classList.remove("oculto");
        ficha2.classList.add("visible");
    } else if (event.key === "3") {
        ficha3.classList.remove("oculto");
        ficha3.classList.add("visble");
    };

});
