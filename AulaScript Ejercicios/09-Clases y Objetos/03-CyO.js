/**
 * En esta propuesta debes crear una clase de nombre piedra (con class o con function) 
 * con dos propiedades: masa, volumen y un método densidad que calcule este valor 
 * (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a 
 * su masa y a su volumen y ejecuta el método densidad.
 * 
 * Aclaraciones: Por ejemplo objeto oro, masa de la muestra 194 gr y volumen 10 cc. 
 * Densidad deberá devolver 19,4.
 */

class Piedra {
    constructor(masa, volumen) {
        this._masa = masa;
        this._volumen = volumen;
    }

    densidad(){
        return (this._masa / this._volumen)
    }
}

const oro = new Piedra(194, 10);
console.log(oro.densidad());