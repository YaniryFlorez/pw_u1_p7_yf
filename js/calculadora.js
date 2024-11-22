var num1 = "";
var num2 = "";
var operacion = "";
var primerNumeroIngresado = false;

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    if (!primerNumeroIngresado) {
        num1 += valor; // Concatenar
        setearValor(num1); // Muestra el primer número en el display
    } else {
        num2 += valor; // Concatenar
        setearValorConcatenado(valor); // Muestra el segundo número en el display
    }
}

function evaluarOperacion(op) {
    if (num1 !== "") { // Solo si el primer número ha sido ingresado
        operacion = op;
        primerNumeroIngresado = true; // Cambiar el estado
        setearValorConcatenado(" " + operacion + " "); // Muestra el operador en el display
    }
}

function igual() {
    if (num1 !== "" && num2 !== "") {
        let valorFinal;

        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        switch (operacion) {
            case '+':
                valorFinal = numero1 + numero2;
                break;
            case '-':
                valorFinal = numero1 - numero2;
                break;
            case '*':
                valorFinal = numero1 * numero2;
                break;
            case '/':
                valorFinal = numero1 / numero2;
                break;
            default:
                valorFinal = "Error";
        }

        setearValor(valorFinal.toFixed(4)); // Muestra el resultado toFixed(4) muestra las 4 primeras decimas
        num1 = valorFinal.toString(); // Permite encadenar operaciones
        num2 = ""; // Reinicia num2
        operacion = ""; // Reinicia la operación
        primerNumeroIngresado = false; // Reinicia el estado
    }
}

function borrar() {
    // Reinicia todos los valores
    num1 = "";
    num2 = "";
    operacion = "";
    primerNumeroIngresado = false;
    setearValor("0"); // Reinicia el display a 0
}


