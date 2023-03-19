/******  FUNCIONES  ******/

/*
    Una función es un bloque de código que se puede ejecutar múltiples veces. 
    Se puede pensar en una función como una "subrutina" que realiza una tarea específica 
    y devuelve un resultado. Las funciones permiten encapsular y reutilizar código, 
    lo que hace que el desarrollo sea más eficiente y fácil de mantener.

    Sintaxis
        Palabra reservada (Function (F. Declarativa) var (F. de Expresión)).
        Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        Parentesis () donde se indican los parametros.
        Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;
*/


//Declarativas

function mifuncion(){
    let saludo = "Hola Me llamo Diego"
    return saludo;
}


console.log( mifuncion() );





/*--- Ejemplos ---*/

//Funcion para generar un mensaje predeterminado con una parte personalizada

function saludar(nombre){
    return (`Hola, me llamo ${nombre}, y estoy aprendiendo JavaScript!`);
}

console.log(saludar("Luzvelia"));



//Practica 1:
// En una funcion, elabora la logica de un cajero automatico que retorne el mensaje: "Saldo insuficiente"
// cuanto el saldo sea menor o igual a 0;

//Creando variable de saldo
let saldo = 1000;

//Funcion de cajero
function retiroDeDinero(cantidad){
    if((saldo - cantidad) < 0){
        return `Saldo insuficiente, no se pudo retirar ${cantidad}$, tu saldo actual es ${saldo}$`;
    }else if (saldo - cantidad >= 0){
        saldo-= cantidad;  //saldo = saldo - cantidad
        return `Retiraste ${cantidad}$, saldo restante: ${saldo}$`;
    }
};

//Llamadas a la funcion
console.log(retiroDeDinero(100));
console.log(retiroDeDinero(850));
console.log(retiroDeDinero(50));
console.log(retiroDeDinero(1));



// practica 2:
// Elabora una funcion que reciba 2 numeros y retorne si es par o impar la suma de ambos.
// tip: usar %

//Solucion de Diego
// function parImpar(param1, param2){((param1 + param2) % 2 == 0) ? console.log(`El numero ${param1 + param2} es par.`) : console.log(`el numero ${param1 + param2} es Impar.`)}
// parImpar(5,5);

// Solucion de Alejandra
// function parImpar(param1,param2){
//     let residuo = ((param1 + param2) % 2); 
//     console.log(residuo);
//     switch(residuo){
//         case 0:
//             console.log("La suma es PAR");
//             break;
//         case 1:
//             console.log("La suma es IMPAR");
//             break;
//     }
// }

// parImpar(3,2);


// Solucion de Luzvelia
// let numeroUno = 6;
// let numeroDos = 7;

// function compararNumeros(){
//     let resultado = numeroUno + numeroDos;
//     if(resultado % 2 == 0){
//         return `Los números ${numeroUno} y ${numeroDos}, suman ${resultado}, que es par`
//     }  else{
//     return `Los números ${numeroUno} y ${numeroDos}, suman ${resultado}, que es impar`
//     } 
// }
// console.log(compararNumeros());







// practica 3:
// Elabora una funcion sin parametros que retorne si la multiplicacion de 3 x 1260
// es par o impar.

// function parImpar2(){((3 * 1260) % 2 == 0) ? console.log("El resultado es un numero Par") : console.log("El resultado es un numero Impar")}
// parImpar2();



// practica 4:
// Crea una funcion que reciba los parametros:
// nombre1, nombre2, apellido, edad, sexo y pais, ingresados mediante prompt,
// Compare los nombres y en caso de ser identicos, solicita apellido edad, sexo y pais
// Luego mostrar el mensaje:
// Hola, Me llamo (nombre) (apellido), soy (sexo), tengo (edad) años, y vivo en (pais).
// Si los nombres no coinciden, retornar, Los nombres deben ser identicos, intentalo nuevamente.


// function saludoUsuario(nombre1, nombre2, apellido, edad, sexo, pais){
//     nombre1 = prompt("Ingresa tu Nombre");
//     nombre2 = prompt("Ingresa tu Nombre nuevamente");
//     if (nombre1 === nombre2){ 
//         apellido = prompt("¿Cual es tu Apellido?");
//         edad = prompt("Indica tu Edad");
//         sexo = prompt("Eres Hombre o Mujer?");
//         pais = prompt("¿En que Pais vives?");
//         alert(`Hola, Me llamo ${nombre1} ${apellido}, soy ${sexo}, tengo ${edad} años, y vivo en ${pais}.`)
//     }else{
//         alert("Los nombres deben ser identicos, intentalo nuevamente.")
//     }
// }

// saludoUsuario();









//Funcion para realizar una suma de dos parametros y guardar el resultado en una variable.
let resuldadoSuma; //undefined - Valor inicial

function suma(num1, num2){
    /*Guardando resuldato de operacion en variable*/
    resuldadoSuma = num1 + num2;
    console.log(`La suma de ${num1} + ${num2} es = ${resuldadoSuma}`)
    
    return (
        /*Retornando Nuevo valor de la variable*/
        resuldadoSuma
    );
}

suma(65,20);
resuldadoSuma;


//Funcion para realizar una resta de dos parametros (enviar como parametro la variable resultadoSuma), 
//y guardar el resultado en una variable.
let resultadoResta; //undefined

function resta(num1, num2){
    /*Guardando el resultado de la operacion en la variable, esto sobrescribe el valor anterior (undefined).*/
    resultadoResta = num1 - num2;
    console.log(`La resta de ${num1} - ${num2} es = ${resultadoResta}`)
    
    return (
        /*Retornando valor de la variable*/
        resultadoResta
    );
}

resta(resuldadoSuma,30);
resultadoResta;





/* ----------  EJERCICIO EN CLASE (Con Hoisting)------------

    Realizar una funcion que permita encontrar el tipo de dato del parámetro "dato" 
    y retornarlo desde la función "tipoDeDato".

    El parámetro "dato" debe ser distinto en cada llamada a la función "tipoDeDato".

    Primero declara las variables.
*/

//ERROR de Hoisting al llamar variable antes de declarar (Solo en variables)
//variable;


let variable;
let variable2 = null;

//Luego llama la funcion de las siguientes maneras:
    console.log( tipoDeDato(1) );
    console.log( tipoDeDato("Diego") );
    console.log( tipoDeDato(true) );
    console.log( tipoDeDato( {"nombre":"Diego"} ) );
    console.log( tipoDeDato(variable) );
    console.log( tipoDeDato(null) );

//Debes obtener los siguientes resultados:
    'number'
    'string'
    'boolean'
    'object'
    'undefined'
    'object' //(bug en ECMAScript, debería ser null);
//Informacion sobre null: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null

function tipoDeDato(dato) {
    return typeof(dato);
}





/*

    Realizar una función llamada editar que reciba 2 parámetros:

    estudiantes: un array de strings con varios nombres de estudiantes.
    contador: un número entero.
    nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

    Tu función debe retornar un array de elementos con las siguientes indicaciones:

    Si el parámetro contador es igual a 0, debes retornar el array de estudiantes 
    y agregar el elemento nuevo al final.

    Si el parámetro contador es mayor a 0, debes retornar el array de estudiantes 
    pero eliminar de atrás para adelante la cantidad de estudiantes 
    que indica el número contador y agregar el elemento nuevo al final.


    NOTA: splice() cambia el contenido de un array eliminando elementos existentes 
    y/o agregando nuevos elementos.
    recibe como parametro: el indice desde donde iniciar, la cantidad de elementos a editar/eliminar, el nuevo contenido
    ejemplo: array.splice(inicio, cantidad, item1, item2, ...);


    Resultados esperados:

    1) ["Nicolas", "Julia", "Santiago"] // no desapareció ningún elemento, se agregó Santiago al final
    2) ["Daniel", "Juan", "Marcos"] // desapareció 1 elemento (Daniela), se agregó Marcos al final
    3) ["Patricia", "Camilo"] // desaparecieron 2 elmentos (Luisa y Jean), se agregó Camilo al final
*/

function solution(estudiantes, contador, nuevo) {
    if(contador == 0){
        console.log(estudiantes);
        console.log(nuevo);
        estudiantes.push(nuevo);
        console.log(estudiantes);
        return estudiantes;
    }else if(contador > 0){
        console.log(estudiantes);
        console.log(nuevo);
        estudiantes.splice(-contador,contador,nuevo);
        return estudiantes;
    }
}


console.log(solution(["Nicolas", "Julia"], 0, "Santiago"));
console.log(solution(["Daniel", "Juan", "Daniela"], 1, "Marcos"));
console.log(solution(["Patricia", "Luisa", "Jean"], 2, "Camilo"));
