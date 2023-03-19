/*
    Una expresión condicional es un conjunto de instrucciones que evalúan una expresión
    y solo se ejecutarán si dicha expresión es verdadera. 
    JavaScript admite dos expresiones condicionales: (if...else) y (switch).
*/


//if (Si)
// prompt: es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador.
/*

let numero = +prompt("Ingresa un numero","Primer placeholder de if");
let otroNumero = +prompt("Ingresa otro numero","Segundo placeholder de if");

//Si numero es  menor que otroNumero
if (numero < otroNumero){
    // Template String: permite mostrar texto y variables en una sola expresion.
    alert(`El numero ${numero} es menor que ${otroNumero}`);
    //alert("El numero " + numero + " es menor que " + otroNumero);
}
*/



//if-else (Si - Sino)

/*
let numero2 = +prompt("Ingresa un numero","Primer place holder de If-else");
let otroNumero2 = +prompt("Ingresa otro numero","Segundo placeholder de If-else");

if (numero2 > otroNumero2){
    alert(`El numero ${numero2} es mayor que ${otroNumero2}`); 
} else{
    alert(`El numero ${numero2} es menor que ${otroNumero2}`);
}
*/

/*
//Operador Ternario
let numero2A = +prompt("Ingresa un numero","If-else Ternario");
let otroNumero2A = +prompt("Ingresa otro numero","If-else Ternario");
//                       "Si"                                                         "Sino"
(numero2A < otroNumero2A) ? alert(`El numero ${numero2A} es menor que ${otroNumero2A}`) : console.log(`El numero ${numero2A} es mayor que ${otroNumero2A}`);
*/




//if - else if - else (Si - Sino Si - Sino)
/*
let uno = 20;
let dos = 10;

if(uno > dos){
    console.log(`El numero ${uno} es mayor a ${dos}`);
}else if(uno === dos){
    console.log(`El numero es ${uno} es igual a ${dos}`);
}else{
    console.log(`El numero ${uno} es menor que ${dos}`);
}
*/

/*
    Ejercicio extra 1: Realizar un algoritmo que valide si la suma de 2 numeros es mayor, igual o menor
    a la multiplicacion de otros 2 numeros.

    Ejercicio extra 2: Realizar un algoritmo que valide si un mensaje(Usuario) en un campo 
    es identico(===) a otro mensaje(Usuario) en otro campo.

*/

/*

//Solucion ejercicio 1:
let campo1 = prompt("Ingresa tu usuario");
let campo2 = prompt("Ingresa tu usuario nuevamente");

(campo1 === campo2) ? alert("El usuario coincide") : alert("Usuarios distintos" );





//Solucion ejercicio 2:
let suma = +prompt("Suma, primer numero") + +prompt("Suma, segundo numero");
alert(`Total suma: ${suma}`);
let multiplicacion = +prompt("Multiplicacion, primer numero") * +prompt("Multiplicacion, segundo numero");
alert(`Total multiplicacion: ${multiplicacion}`);

(suma > multiplicacion) 
    ? alert(`El numero ${suma} es mayor a ${multiplicacion}`)
    : (suma === multiplicacion)
        ? alert(`El numero ${suma} es igual a ${multiplicacion}`)
        : alert(`El numero ${suma} es menor a ${multiplicacion}`);

*/