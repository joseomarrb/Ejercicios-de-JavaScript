/**
 * Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.
 * 
 * Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces 
 * intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.
 * 
 * Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el 
 * mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el 
 * número de veces que se encontró repetido.
 * 
 * Lo mejor es que veamos un ejemplo:
 */

export default function fixFiles(files) {
    const outputArr = [];
    const fileCount = {};
    files.forEach((file) => {
        if (outputArr.includes(file)) {
            fileCount[file] = (fileCount[file] || 0) + 1;
            outputArr.push(`${file}(${fileCount[file]})`);
        } else {
            fileCount[file] = 0;
            outputArr.push(file);
        }
    });

    return outputArr;
}
