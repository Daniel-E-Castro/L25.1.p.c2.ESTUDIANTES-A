import Cl_Becado from "./Cl_Becado.js";

export default class Cl_index {
    constructor() {
        let becado1 = new Cl_Becado("Mary", 132, 8)
        let becado2 = new Cl_Becado("Alirio", 315, 35)

        let salida = document.getElementById("salida")
        salida.innerHTML = `
        <br>Nombre del estudiante: ${becado1.nombre}
        <br>Acumulado de notas: ${becado1.notas}
        <br>Cantidad de materias: ${becado1.materias}
        <br>Nota promedio: ${becado1.calcularPromedio()}%
        <br>Recibe una beca de: ${becado1.becaMensual()}$ <br> 

        <br>Nombre del estudiante: ${becado2.nombre}
        <br>Acumulado de notas: ${becado2.notas}
        <br>Cantidad de materias: ${becado2.materias}
        <br>Nota promedio: ${becado2.calcularPromedio()}%
        <br>Recibe una beca de: ${becado2.becaMensual()} 
        `
    }
}