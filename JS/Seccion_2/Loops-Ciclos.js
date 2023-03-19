/*
    Los bucles pueden ejecutar un bloque de código varias veces. 
    JavaScript admite diferentes tipos de bucles.

    for(in of), while(do-while)
*/

let ciclos = 5;

// for - recorre un bloque de código un numero determinado de veces
//for(Inicializador; codicion; tipo incremento){... codigo ...};

for( i = 0; i < ciclos; i++){
    console.log( i );
    console.log(`Ciclo: ${i}`);
}


// for/of - Recorre los valores de un array.
// //For of con arrays, retorna el valor del indice en el ciclo actual.
let productos = ["Celular","TV","Microfono","Estereo","Proyector","Teclado","PS5"];
// for(elemento de lista){... codigo ...}

for(let elemento of productos){
    console.log(elemento);
}


//For in con arrays, NO retorna el valor, en su lugar retorna el indice.
let nombres = ["Gabriel","Roger","Alexnis","Maria","Nelson"];

for(let nombre in nombres){
    console.log(`indice: ${nombre}`);
}


// for/in - Recorre las propiedades de un objeto de forma ordenada, se utiliza a menudo para
// recorrer objetos que NO con arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no 
// serian los valores sino los indices.

let persona = {
    nombre: "Luisito",
    edad: 30,
    ciudad: "Bogota",
    telefono: "123-123-12-12",
    email: "luisito@email.com"
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}



// Ejemplo 2(Objetos anidados)
let personas = {
    Persona1:{
        nombre: "Samuel",
        edad: 20,
        ciudad: "Santiago",
        telefono: "+56934887123",
        email:"samuel@gmail.com"
    },
    Persona2:{
        nombre: "Christian",
        edad: 24,
        ciudad: "Caracas",
        telefono: "+584129387465",
        email:"christian@gmail.com"
    },
    Persona3:{
        nombre: "Valentina",
        edad: 30,
        ciudad: "Madrid",
        telefono: "+344129387465",
        email:"valentina@gmail.com"
    }
};

console.log( personas.Persona1.nombre );
console.log( personas.Persona2.nombre );

for(let propiedad in personas) {
    console.log(`Propiedad: ${propiedad} `);
    //                       personas.Persona1.nombre             personas.Persona1.edad                    personas.Persona1.ciudad                   personas.Persona1.telefono                    personas.Persona1.email             
    //                       personas.Persona2.nombre             personas.Persona2.edad                    personas.Persona2.ciudad                   personas.Persona2.telefono                    personas.Persona2.email             
    //                       personas.Persona3.nombre             personas.Persona3.edad                    personas.Persona3.ciudad                   personas.Persona3.telefono                    personas.Persona3.email             
    console.log(`Me llamo: ${personas[propiedad].nombre} Tengo: ${personas[propiedad].edad} años Vivo en: ${personas[propiedad].ciudad} Mi numero es: ${personas[propiedad].telefono} Mi correo es: ${personas[propiedad].email}`);
};




// while - Recorre un bloque de código mientras se cumpla una la condicion indicada.

// Ejemplo 1
let vueltas = 5
let repeticiones = 1;

// while/mientras
while(repeticiones <= vueltas){
    console.log( repeticiones );
    repeticiones++;
}



//Tabla de multiplicar
let incremento = 1;
let limite = 10;
let numero = 5;

while(incremento <= limite){
    console.log(`${incremento} x ${numero} = ${incremento * numero}`);
    incremento++
}


// do/while - Recorre un bloque de código 1 vez, luego valida si se cumple la condición 
// específica para repetir el ciclo o no.

// hacer - mientras

let incremento2 = 1
let limite2 = 1

do{
    console.log(`${incremento2} x ${numero} = ${incremento2 * numero}`);
    incremento2++
}while(incremento2 < limite2);



// Ejercicios


// Elabora una calculadora con menu.
// Tips: Usar switch, do-while, de ser necesario operador ternario.
// maneja las entradas y salidas mediante prompt y alert.


let respuesta;
do{
    let operaciones = +prompt(`Ingresa el numero de la operacion que quieras realizar
    1) Sumar
    2) Restar
    3) Multiplicar
    4) Dividir`);

    let numero1= +prompt("Ingresa un numero")
    let numero2= +prompt("Ingresa el segundo numero")
    switch (operaciones){
        case 1:
            alert(`El resultado de tu suma es ${numero1 + numero2}`);
            break;
        case 2:
            alert(`El resultado de tu resta es ${numero1 - numero2}`);
            break;
        case 3:
            alert(`El resultado de tu multiplicacion es ${numero1 * numero2}`);
            break;
        case 4:
            alert(`El resultado de tu division es ${numero1 / numero2}`);
            break;
        default:
            alert("Opcion no valida");
    }
    respuesta = prompt("¿Desear realizar otra operacion? si - no");
}while(respuesta === "si");