/**
 * Este ejercicio va a consistir en crear un objeto similar al objeto Date, 
 * al que llamaremos MiDate, con los métodos: sumar, restar. Estos sumarán 
 * o restarán un número de días a la fecha representada por el objeto.
 * 
 * Aclaraciones: Por ejemplo creo el objeto miFecha (new MiDate() ) para tener 
 * el día de hoy. Si hago miFecha.sumar(1) tendré la fecha de mañana: hoy más 1 día.
 */

class MiDate {
    constructor() {
        this.date = new Date().getDate();
    }

    sumar(nums) {
        return this.date + nums;
    };

    restar(nums) {
        return this.date - nums;
    };
}

const miFecha = new MiDate();

console.log(miFecha.sumar(1));
console.log(miFecha.restar(1));