const lasGemas = require("./defGemas");
// Defino 2 jugadores a los cuales asigno un promedio de 3 gemas a c/u en forma aleatoría
//   con un mínimo de 1 y sin que se repitan...
let intentos = 6;
const jugador1 = [];
const jugador2 = [];
const jugadores = [jugador1, jugador2 ];
//
console.log("----------------------------------------------");
console.log("*** JUEGO DE LAS GEMAS DEL UNIVERSO MARVEL ***");
console.log("----------------------------------------------");
console.log("Se definen 2 jugadores con un nro aleatorio de gemas c/u");
console.log(" pueden tener de 1 a 6 c/u (con la condicón que no se repitan)");
console.log("Se describen las Gemas que tiene c/u y se determina quién gana");
console.log(" en función de la cantidad y si hay un empate, se desempta por");
console.log(" si alguno de ellos tiene la de Alma y/o Poder. Aun así podría");
console.log(" haber un empate virtual... ver los detalles...");
//
asignaGemas (jugador1);
asignaGemas (jugador2);
/**
 * Asigna las gemas a los jugadores mínimo 1 máximo 6 y sin que se repitan...
 * @param {*} jugador 
 */
function asignaGemas(jugador) {
    let index = Math.floor(Math.random()*lasGemas.length);
    let found = false;
    let indices =[];
    indices.push(index);
    // asigno una por defecto para tener al menos 1
    jugador.push(lasGemas[index]);
    for (let i=1;i<intentos;i++) {
        let num = Math.floor(Math.random()*intentos);
        if (num >= 3) {
            do {
                index = Math.floor(Math.random()*lasGemas.length);
                found = false;
                for(let j=0; j<indices.length;j++) {
                    if (index == indices[j]) {found = true};
                }
            } while (found === true);   
            indices.push(index);         
            jugador.push(lasGemas[index]);
        }
    }
}
//
module.exports = jugadores;