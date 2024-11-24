/**
 * Esta función que se pide va a recibir como argumento un texto con información. 
 * El texto es una cadena donde aparecen pares de la forma nombre dato: valor dato. 
 * La función debe convertir esta cadena en un objeto con campos identificados con 
 * nombre dato y valor dado por valor dato.
 * 
 * Aclaraciones: Ejemplo leeDato("nombre: juan, apellidos: Perez Sanchez, edad: 10, nivel: base") 
 * esto dará lugar al objeto
 * {nombre: "juan", apellidos:"Perez Sanchez", edad:10, nivel:"base"}
 */

function leeDato(stringAObjeto) {
    return JSON.parse(stringAObjeto);
};

console.log(leeDato('{"nombre": "Juan", "apellidos": "Perez Sanchez", "edad": 30, "nivel": "base"}'));