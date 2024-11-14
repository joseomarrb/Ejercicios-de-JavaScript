/**
 * Crea una clase que lamaremos Bus. Sus atributos serán:
 * 
 * capacidad: número máximo de pasajeros
 * pasajeros: número de pasajeros (inicialmente 0)
 * conductor: objeto conductor.
 * Sus métodos
 * 
 * subir(pasajeros): aumenta el numero de pasajeros
 * bajar(pasajaeros): disminuye el número de pasajeros
 * conductor: asigna un objeto conductor.
 * El ojeto conductor es de una clase (Conductor) cuyos atributos son:
 * 
 * nombre: nombre del conductor
 * licencia: un número que identifica al condcutor.
 * Al crear el objeto se asigna también el conductor
 * 
 * No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.
 * 
 * Aclaraciones: El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José 
 * su licencia es la 1234.
 * 
 * Si se pide subir(25) , el atributo pasajeros valdrá 25.
 * 
 * Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)
 * 
 * Si pedimos bajar 45, el autobús se queda vacío.
 * 
 * Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.
 */

class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

const conductorJose = new Conductor("José", 1234);
class Bus {
    constructor(capacidad, conductor) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor
    }

    subir(num){
        if (num <= this.capacidad) {
            this.pasajeros += num
        } else {
            this.pasajeros = this.capacidad
        }
        return `Cantidad Pasajeros: ${this.pasajeros}`;
    };

    bajar(num){
        if (num <= this.pasajeros) {
            this.pasajeros -= num
        } else {
            this.pasajeros = 0
        }
        return `Cantidad Pasajeros: ${this.pasajeros}`;
    };
};

const busLinea1 = new Bus(40, conductorJose);