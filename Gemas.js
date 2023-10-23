
class Gemas {

    #nombreGema;
    #colorGema;
    
    constructor (nombre, color, habilidad) {
        this.#nombreGema = nombre;
        this.#colorGema = color;
    }

    setNombreGema (nombre) {
        this.#nombreGema = nombre;
    }
    getNombreGema () {
        return(this.#nombreGema);
    }

    setColorGema (color) {
        this.#colorGema = color;
    }
    getColorGema () {
        return(this.#colorGema);
    }

    // Procedimientos
    infoDeGema() {
        console.log("Nombre de la Gema: "+this.getNombreGema()+" Color: "+this.getColorGema());
    } 
    describeHabilidad () {
        console.log(this.getHabilidadGema());
    }

}

module.exports = Gemas;