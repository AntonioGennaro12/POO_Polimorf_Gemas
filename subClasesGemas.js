const Gemas = require("./Gemas");

class  gemaEspacio  extends Gemas {
        #habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
                "Permite al que tiene esta gema transportarse per el espacio en forma instantanea.");
    }
} 

class  gemaMente  extends Gemas {
    #habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
            "Otorga a su poseedor poderes psiónicos como la telepatía y la telequinesis o puede aumentar los poderes mentales preexistentes de su usuario.");
    }
} 


class  gemaRealidad  extends Gemas {
#habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
            "Concede el poder de moldear la realidad, concediendo deseos materiales, yendo en contra de las leyes físicas.");
    }
} 



class  gemaPoder  extends Gemas {
    #habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
            "Da a su portador la capacidad de poseer cualquier habilidad sobrehumana, aumentar su resistencia y fuerza física y de controlar mucha energía y lanzarla como rayos o ráfagas.");
    }
} 

class  gemaTiempo  extends Gemas {
    #habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
            "Da al que tiene esta gema la capacidad de invertir, acelerar, ralentizar y congelar el tiempo, así como la de viajar por el.");
    }
} 

class  gemaAlma  extends Gemas {
    #habilidadGema;      // Nombre de la Habilidad
    constructor (nombre, color, habilidad) {
        super(nombre, color);
        this.#habilidadGema = habilidad;
    }

    setHabilidadGema (habilidad) {
        this.#habilidadGema = habilidad;
    }
    getHabilidadGema () {
        return (this.#habilidadGema);
    }

    // Procedimientos
    infoDeGema() {
        super.infoDeGema();
        console.log("Habilidad: "+this.getHabilidadGema());
        
    } 
    aplicaHabilidad () {
        console.log("Cuando se aplica la Habilidad: "+this.getHabilidadGema()+
            "Da al que tiene esta gema la capacidad de absorber las almas de seres vivos o muertos y quedan dentro de la gema, donde hay un paraíso.");
    }
} 

module.exports = { gemaEspacio, gemaMente, gemaRealidad, 
                   gemaPoder, gemaTiempo, gemaAlma  };

/***
Gema	  Capacidad	                                    Color	       Objeto	
Espacio	  Teletransportarse a lugares instantáneamente	Azul	       Teseracto	
Mente	  Control Mental	                            Amarillo	   Cetro de Loki 
Realidad  Alterar la realidad	                        Rojo	       Éter	
Poder	  Manipular la energía; mayor fuerza	        Violeta	       Orbe
Tiempo	  Controlar y manipular el tiempo.	            Verde	       Ojo de Agamotto
Alma	  Control de Almas	                            Naranja	
***/