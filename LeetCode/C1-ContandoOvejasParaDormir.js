/**
 * Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
 * Haz una función que devuelva una lista con todas las ovejas que sean de color 
 * rojo y que además su nombre contenga tanto las letras n Y a, sin importar el 
 * orden, las mayúsculas o espacios.
 */

export default function contarOvejas(ovejas) {
    const ovejitas = ovejas.filter(
        (datos) =>
            datos.color === 'rojo' &&
            datos?.name.match(/a/i) &&
            datos?.name.match(/n/i)
    );
    return ovejitas;
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
