/**
 * Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es 
 * una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo 
 * separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
 * 
 * Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, 
 * por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
 * 
 * Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. 
 * Por ejemplo, si tenemos el texto:
 */

export default function listGifts(letter) {
    const arrLetter = letter
        .split(' ')
        .filter((elemt) => elemt.trim() !== '' && !elemt.includes('_'));
    const count = {};

    for (const word of arrLetter) {
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }

    return count;
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);
/*
{
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
}
*/
