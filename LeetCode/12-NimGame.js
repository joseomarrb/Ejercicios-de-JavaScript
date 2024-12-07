/**
 * 
 * @param {*} n 
 */

/**
 * Estás jugando el siguiente juego de Nim con tu amigo:
 * 
 * Inicialmente, hay un montón de piedras sobre la mesa.
 * Tú y tu amigo se turnarán para jugar, y tú empezarás primero.
 * En cada turno, la persona a la que le toque quitará de 1 a 3 piedras del montón.
 * El que quite la última piedra será el ganador.
 * Dado n, el número de piedras en el montón, devuelve verdadero si puedes ganar 
 * el juego suponiendo que tanto tú como tu amigo juegan de manera óptima; de lo contrario,
 *  devuelve falso.
 */

var canWinNim = function(n) {
    return n % 4 === 0 ? false : true
};