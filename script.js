// Estructura de datos para la agenda médica
// Creación de objetos y llenado de arreglos:
const radiologia = [

    {
        especialidad: "radiologia",
        hora: "11:30",
        especialista: "Federico Subercaseau",
        paciente: "Fernando Wurthz",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "Armando Luna",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "15:30",
        especialista: "Ana María Godoy",
        paciente: "Manuel Godoy",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "16:00",
        especialista: "Patricia Suazo",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];


const traumatologia = [
    {
        especialidad: "radiologia",
        hora: "8:00",
        especialista: "María Paz Altuzarra",
        paciente: "Paula Sánchez",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "10:00",
        especialista: "Raúl Araya",
        paciente: "Angélica Navas",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "10:30",
        especialista: "María Arriagada",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Cecilia Budnik",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "Diego Marre",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Andrés Kanacri",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "Marcial Suazo",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
];

const dental = [
    {
        especialidad: "radiologia",
        hora: "8:30",
        especialista: "Andrea Zuñiga",
        paciente: "Marcela Retamal",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "11:00",
        especialista: "María Pía Zañartu",
        paciente: "Angel Muñoz",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        especialidad: "radiologia",
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario Kast",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Eduardo Viñuela",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "13:30",
        especialista: "Hugo Sánchez",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        especialidad: "radiologia",
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepúlveda",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

    
document.write('<h1>Estadisticas Centro Médico Ñuñoa</h1>');

// Función para imprimir la primera y última atención de una especialidad
function imprimirAtenciones(especialidad) {

    document.write(`<li>${especialidad}:</li>`);
    document.write(`<ul>`);
    
    // Imprimir primera atención
    document.write(`<li>Primera atención: ${especialidad[0].paciente} - ${especialidad[0].prevision}</li>`);
    
    // Imprimir última atención
    document.write(`<li>Última atención: ${especialidad[especialidad.length - 1].paciente} - ${especialidad[especialidad.length - 1].prevision}</li>`);
    
    document.write(`</ul>`);
}
  // Imprimir atenciones de cada especialidad
imprimirAtenciones(radiologia);
imprimirAtenciones(traumatologia);
imprimirAtenciones(dental);



// Función para crear una tabla HTML a partir de un array
function crearTabla(especialidad, datos) {
    document.write(`<h2>${especialidad}</h2>`);
    document.write(`<table>`);
    document.write(`<thead>`);
    document.write(`<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>`);
    document.write(`</thead>`);
    document.write(`<tbody>`);
    for (const dato of datos) {
        document.write(`<tr>`);
        document.write(`<td>${dato.hora}</td>`);
        document.write(`<td>${dato.especialista}</td>`);
        document.write(`<td>${dato.paciente}</td>`);
        document.write(`<td>${dato.rut}</td>`);
        document.write(`<td>${dato.prevision}</td>`);
        document.write(`</tr>`);
    }
    document.write(`</tbody>`);
    document.write(`</table>`);
}  
// Crear tablas para cada especialidad
crearTabla("Radiología", radiologia);
crearTabla("Traumatología", traumatologia);
crearTabla("Dental", dental);