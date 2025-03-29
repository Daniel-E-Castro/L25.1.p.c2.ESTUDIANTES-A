import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Becado extends Cl_Estudiante {
    constructor(nombre, notas, materias){
        super(nombre, notas, materias)
       
    }
    becaMensual(){
        if(this.calcularPromedio() >= 15)
            return 30
        else
        if(this.calcularPromedio() < 10)
            return "No le corresponde Beca"
        else
        return 0
    }
}