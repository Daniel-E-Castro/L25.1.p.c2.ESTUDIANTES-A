export default class Cl_Estudiante {
    constructor(nombre, notas, materias) {
        this.nombre = nombre
        this.notas = notas
        this.materias = materias

    }
    calcularPromedio() {
        return this.notas / this.materias
    }
}