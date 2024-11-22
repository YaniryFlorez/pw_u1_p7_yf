const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

const agregarElemento = (idelemento, elementohtml) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementohtml;
}

const conceptosJS = () => {
    /* tipos de variables
    var: declaraciones globales-- esta en desuso
    let: local, dentro del bloque o funcion y no permite declarar la misma variable enel mismo
    cost: variables cuyo valor no cambia
    */
    let nombre = "Yaniry";
    let numero1 = 10;
    let numero2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("entro al metodo");

    /* declaracion de arreglos*/
    const diasSemana = ('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes');
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    console.log(diasSemana[7]);

    /* dentro de concepto de nulo se lo conoce como undefined*/
    /* 
    para comparaciones:
    ===
    !==
    */

    //guarda al final del arreglo
    //diasSemana.push('Sabado');
    //console.log(diasSemana);
    //agrega al inicio
    // diasSemana.unshift('Dias');
    // console.log(diasSemana);


    const numerosImpares = [1, 3, 7, 9, 11];
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);


    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    /* sentencias de control*/

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Al fin viernes');
        } else {
            console.log('aun no llega viernes');
        }
    }
    //manejo de objetos
    const miEstudiante = {
        nombre: "Yaniry",
        apellido: "Florez",
        edad: 29,
        genero: "femenino",
        ciudadNacimiento: "Quito"
    }
    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 33) {
        console.log('tiene 33')
    } else {
        console.log('No tiene 33')

    }
    miEstudiante.apellido = 'Teran';
    console.log(miEstudiante);

    //declaraciones de atributos pero como objetos
    const miProfesor = {
        nombre: "Daniel",
        apellido: "Ruiz",
        direccion: {
            calle: "AV.america",
            casa: "120",
            barrio: "libertad"

        }

    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = "Av.10 de agosto";
    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura);

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('Son iguales');
    } else {
        console.log('Estos no son lo mismo');
    }

    //arreglo de objetos
    const est1 = {
        nombre: "juan",
        apellido: "Lujan",
        edad: 35
    }
    const est2 = {
        nombre: "Daniel",
        apellido: "Ruiz",
        edad: 25
    }
    const est3 = {
        nombre: "Luis",
        apellido: "Castillo",
        edad: 39
    }
    const arregloEstudiantes = [est1, est2, est3];

    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);

    console.log(arregloEstudiantes[1].nombre);
    //mostrar en tablas
    const arregloEstudiantes2 = [
        { nombre: "Carlos", apellido: "Tobar", edad: 35 },
        { nombre: "Anita", apellido: "Lujan", edad: 39 },
        { nombre: "Andrea", apellido: "Lujan", edad: 29 }
    ]

    console.log(arregloEstudiantes2);

    console.table(arregloEstudiantes2);
    //uso del pop

    const estudiante = arregloEstudiantes2.pop();
    console.log(estudiante);
    console.table(arregloEstudiantes2);

    //desestructuracion de arreglos
    //es cuando se tiene un arreglo consiste en poner sus pocisiones en partes
    //ppor ejemplo el amarillo va ha tener el alias p1

    const colores = ['amarillo', 'azul', 'verde', 'rojo', 'rosado'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);
    console.log(c3);

    const [m1, m2, m3, m4, m5, m6, m7] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(m1);
    console.log(m2);
    console.log(m5);
    //console.log(m8);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(mes2);
    console.log(mes5);

    //desetructuracion de objetos

    const automovil = {
        marca: 'Toyota',
        modelo: 'Pruis',
        anio: 2024,
        color: 'plateado'
    }
    //aqui se utiliza llaves
    // aqui los atributos no importa el orden
    const { marca, modelo, anio, color } = automovil;
    console.log(modelo);
    console.log(anio);
    console.log(color);
    console.log(marca);

    //desestructuracion con metodo
    desestructuracion(automovil);


    const {nombreP, raza, estatura}= {nombreP:'perro',raza:'pastor',estatura:120}
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);


    //declarar un objeto con un atributo complejo (con un articulo de tipo objeto)
    //y vamos a desestructurar en especial el atributo objeto

    const universidad={
        nombre:'UCE',
        estudiante:10000,
        rector:{
            nombreR:"Rector1",
            apellidoR:"ApellidoR"
        }

    }
    //desestructurado en dos pasos 
   /* const {estudiantes, rector}= universidad;
    const {nombreR, apellidoR}= rector
    console.log(nombreR);
    */
   //desestructurado en un paso
   const{estudiantes, rector:{nombreR,apellidoR}}= universidad;
   console.log(nombreR);
   console.log(apellidoR);


}
//const desestructuracion = (automovil)=>{
const desestructuracion = ({ marca, modelo, anio, color }) => {
    console.log('Entro al metodo de desestructuaracion')
    console.log(modelo);
    console.log(anio);
    console.log(color);
    console.log(marca);
}


