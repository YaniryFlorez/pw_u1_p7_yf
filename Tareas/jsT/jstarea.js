function cambiarTexto(idelemento, fuente){
    document.getElementById(idelemento).style= fuente;
}

function cambiarColor(idelemento,color){
    document.getElementById(idelemento).style.color=color;
}

function cambiarTamanio(idelemento,tamanio){
    document.getElementById(idelemento).style.fontSize = tamanio;
}
function cambiarTamanioIm(idelemento,imtamanio){
    document.getElementById(idelemento).style.width = imtamanio;
}
function agregarImag(idelemento,elementohtml){
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML+elementohtml;
}
function agregarElemento(idelemento, elementohtml) {
    document.getElementById(idelemento).innerHTML += elementohtml;
}