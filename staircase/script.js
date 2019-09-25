
// defino las funciones

function imprimirEscalera(n){

    for(let i = 0; i < n ; i ++){ //Me paro en una fila

        let resultadoFila = "";
        let espacioFila = "";
        let numeralesFilas = "";

        //Completar la fila con espacios

        espacioFila = stringConSimbolo( n - (i + 1) ," ");

        // Completar la fila con # 

        numeralesFilas = stringConSimbolo((i + 1) , "#");

        // Concateno los valores

        resultadoFila = espacioFila + numeralesFilas;

        console.log(resultadoFila);
    
    }
}

function stringConSimbolo(n,simbolo){

    let resultado = "";

    for(let i = 0; i < n ; i ++){

        resultado += simbolo;
    }
    return resultado;
}

// Programa en si

imprimirEscalera(4);