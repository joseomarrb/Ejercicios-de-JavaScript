/**
 * Crea una clase Ficha, con su constructor, que se usará para almacenar el número 
 * de kilómetros recorridos por una persona en cada sesión de ejercicios. 
 * Las propiedades de la clase serán
 * 
 * nombre
 * sesiones
 * numsesioens
 * 
 * El nombre es el de la persona, en los sesiones se almacenará el número de kilometros 
 * recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.
 * 
 * Tiene dos métodos:
 * 
 * anotar: anota los kilómetros
 * media: calcula la media de kilómetros recorridos
 * 
 * Aclaraciones: Cada persona tendrá su ficha construída con esta clase.
 * 
 * Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.
 * 
 * Si escribo media() devolverá 8 ((8+10+6)/3).
 * 
 * En la solución se usa el camino má primitivo posible: arrays y bucles básicos
 */

class Ficha {
    constructor(nombre = "Anonimo", sesiones = [], numsesiones = 0) {
        this._nombre = nombre;
        this._sesiones = [];
        this._numsesiones = 0;
    };

    anotar(num){
        this._sesiones.push(num);
        this._numsesiones += 1;
    };

    media(){
        let suma = 0;
        for (let i = 0; i < this._sesiones.length; i++) {
            suma += this._sesiones[i];
        }
        return Math.floor(suma / this._numsesiones);
    }
};

const omar = new Ficha("Omar");
omar.anotar(8);
omar.anotar(10);
omar.anotar(6);

console.log(omar.media());
