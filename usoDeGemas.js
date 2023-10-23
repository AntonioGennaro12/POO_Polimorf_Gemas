const lasGemas = require("./defGemas");
const jugadores = require("./defJugadores");
const { gemaEspacio, gemaMente, gemaRealidad, gemaPoder, 
        gemaTiempo, gemaAlma } = require("./subClasesGemas");
  
console.log("Cantidad de Jugadores: "+jugadores.length);
for (let i=0 ;i<jugadores.length;i++){
    console.log("Jugador"+(i+1)+": Cantidad de Gemas: "+jugadores[i].length);
}
console.log("Información de las Gemas de cada Jugador:");
for (let i=0 ;i<jugadores.length;i++){
    console.log("------------------------------------------");
    console.log(">>>> GEMAS Jugador"+(i+1)+":");
    for (let j=0;j<jugadores[i].length;j++){
        console.log("Gema Nro: "+(j+1)+" de Jugador"+(i+1)+":");
        jugadores[i][j].infoDeGema();
        jugadores[i][j].aplicaHabilidad();
    }
}
console.log("******************************************");
console.log("Segun el Nro de Gemas que tiene cada jugador....");
if (jugadores[0].length > jugadores[1].length) {
    console.log("EL GANADOR ES EL JUGADOR Nro: 1");
} 
else if (jugadores[1].length > jugadores[0].length) {
    console.log("EL GANADOR ES EL JUGADOR Nro: 2");
}
else {
    console.log("ES UN VIRTUAL EMPATE, ahora solo depende de la habilidad propia del jugador");
    console.log("Pero si consideramos las gemas que tiene c/u podemos decir que si alguno");
    console.log(" de ellos tiene la gema del Alma y/o Poder tendría una ventaja...");
    let gemasImp1 = checkGemasImportantes(jugadores[0]);
    let gemasImp2 = checkGemasImportantes(jugadores[1]); 
    if (gemasImp1 > gemasImp2) {
        console.log("el JUGADOR Nro: 1, tiene una ventaja");
    }
    else if (gemasImp2 > gemasImp1 ) {
        console.log("el JUGADOR Nro: 2, tiene una ventaja");
    }
    else { 
        console.log(" aun así persiste la paridad...");    
    }
}
/**
 * Retorna el número de gemas más poderosas (Alma y Poder)
 * @param {Object} jugador 
 * @returns (número de gemas fuertes)
 */
function checkGemasImportantes(jugador) {
    let cont = 0;
    for (let i=0;i<jugador.length;i++){
        if (jugador[i] instanceof gemaAlma) cont++;
        if (jugador[i] instanceof gemaPoder) cont++;
    }
    return (cont);
}


console.log("*** F I N ***");

/***
Gema	  Capacidad	                                    Color	       Objeto	
Espacio	  Teletransportarse a lugares instantáneamente	Azul	       Teseracto	
Mente	  Control Mental	                            Amarillo	   Cetro de Loki 
Realidad  Alterar la realidad	                        Rojo	       Éter	
Poder	  Manipular la energía; mayor fuerza	        Violeta	       Orbe
Tiempo	  Controlar y manipular el tiempo.	            Verde	       Ojo de Agamotto
Alma	  Control de Almas	                            Naranja	
***/