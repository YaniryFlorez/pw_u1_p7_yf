var num1= 0;
var num2= 0;
 var op;

function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcatenado(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    console.log(valorActual);
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    console.log(valor);
    this.num1 = valor;
    console.log(num1);
}

function recibirValor2(valor) {
    console.log(valor);
    this.num2 = valor;
    console.log(num2);
}
function evaluarOperacion(op){
    operacion= op;
}

function igual() {
    let valorFinal;
 
    if (operacion === '+') {
        valorFinal = num1 + num2
    } else if (operacion === '-') {
        valorFinal = num1 - num2
    }
    else if (operacion === 'X') {
        valorFinal = num1 * num2
    }
    else if (operacion === '%') {
        valorFinal = num1 / num2
    }
    setearValor(valorFinal);
}
 
 
