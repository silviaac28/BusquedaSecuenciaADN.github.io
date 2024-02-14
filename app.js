
const buscar = function () {

    let secuencia_orig =  (document.getElementById("operando1").value);
    let subsecuencia =  (document.getElementById("operando2").value);

    console.log(secuencia_orig)
    console.log(subsecuencia)

    const cadena = secuencia_orig;
    const posicion = cadena.indexOf(subsecuencia);
    console.log(posicion); 

    if (posicion == "-1"){
        document.getElementById("resultado").innerHTML = "La subsecuencia no fue encontrada en la cadena de ADN"
    }else{document.getElementById("resultado").innerHTML = "La subsecuencia si se encuentra en la cadena de ADN y se encuentra en la posición " + posicion}
        

}






