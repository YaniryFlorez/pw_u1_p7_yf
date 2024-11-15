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
    diasSemana.push('Sabado');
    console.log(diasSemana);
    //agrega al inicio
    diasSemana.unshift('Dias');
    console.log(diasSemana);


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
    const miProfesor={
        nombre:"Daniel",
        apellido:"Ruiz",
        direccion:{
            calle:"AV.america",
            casa:"120",
            barrio:"libertad"

        }

    }
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle="Av.10 de agosto";
    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura);

    if(miProfesor.edad === miProfesor.estatura){
        console.log('Son iguales');
    }else{
        console.log('Estos no son lo mismo');
    }

    


}