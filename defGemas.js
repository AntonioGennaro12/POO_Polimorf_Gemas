const Gemas = require("./Gemas");
const { gemaEspacio, gemaMente, gemaRealidad, 
        gemaPoder, gemaTiempo, gemaAlma } = require("./subClasesGemas");

const lasGemas = [
                new gemaEspacio  ( "gEspacio",   "Azul",     "Teletransportación" ),
                new gemaMente    ( "gMente",     "Amarillo", "ControlMental" ), 
                new gemaRealidad ( "gRealidad",  "Rojo",     "AlteraRealidad" ),
                new gemaPoder    ( "gPoder",     "Violeta",  "ControlaFuerza" ),
                new gemaTiempo   ( "gTiempo",    "Verde",    "ControlaTiempo" ),    
                new gemaAlma     ( "gAlma",      "Naranja",  "ControlaAlama" )    
                ];


module.exports = lasGemas;

