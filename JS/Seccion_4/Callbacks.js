/*
    ¿Que es un Callback?
        Un callback es una función que se pasa a otra función como argumento
        y se invoca después de que algún evento o proceso ha terminado, de alli 
        el nombre callback que significa: llamar de vuelta.

        Es decir, la funcion receptora cuando es iniciada, recibe una funcion que viene definida 
        en los parametros y es iniciada o llamada dentro de la misma funcion receptora.
*/



//*** EJEMPLO 1 ***/

//En este ejemplo, primero defino una funcion que recibe como parametros un array y una funcion callback.

//Crear Funcion receptora llamada "agregar"

function agregar(miArray, miCallback){

    // realizo un proceso en el array recibido en los parametros
    miArray.push("Leonardo");

    // Despues de hacer el proceso ejecuto el callback que es recibido por los parametros,
    // este realizara un proceso con los resultados obtenidos en las lineas superiores
    // de la funcion agregar(), el proceso que realiza el callback se define al iniciar 
    // la funcion agregar()
    miCallback();
}


// Defino el array que sera enviado por parametros
let nombres = ["Jean","Carlos","Jose"];



// Inicio la funcion agregar()
// El primer parametro de la funcion es el array "nombres".
// El segundo parametro de la funcion es un callback, una funcion.
// Esta funcion va a llamar de vuelta (callback) los datos obtenidos en la funcion agregar().


// console.log(nombres);

agregar(nombres,funcionLlamadaCallback);


//Otra forma de hacer esto es definir la funcion y luego enviarla en los parametros
function funcionLlamadaCallback(){
    console.log(`Agregue un nombre al array`);
    console.log(nombres);
}






// *** Ejemplo 2 *** (Realizar diferentes operaciones con un callback) 

// En este ejemplo se crea una funcion "operacion" que recibira 2 parametros y un callback,
// en su interior solo hay un retorno, en el cual se asignarán los 2 parametros (num1 y num2) recibidos dentro 
// del callback y lo ejecuta.

function operacion(num1, num2, callback){
    return ( callback(num1,num2) );
};

// En esta ocacion el callback suma los 2 parametros que recibe al ser iniciado en la funcion "operacion",
// resliza una logica que es definida en el mismo llamado de la funcion "operacion" y retorna un resultado.
console.log( operacion(5, 4 ,function(a,b){ return a + b} ) );

console.log( operacion(5, 4, function(a,b){ return a - b} ) );

console.log( operacion(5, 4, function(a,b){ return a * b} ) );

console.log( operacion(5, 4, function(a,b){ return a / b} ) );

console.log( operacion(5, 4, function(a,b){ return a ** b} ) );

console.log( operacion(5, "5", function(a,b){ return a == b} ) );

console.log( operacion(5, 4, function(a,b){ return a < b} ) );

console.log( operacion(5, 4, function(a,b){ return a > b} ) );







// *** EJEMPLO 3 ***
/*
    Crea una función "iterarArray" que reciba un array y un callback. 
    La función debería iterar sobre el array e invocar el callback para cada elemento.

    NOTA: Esto seria un poco similar a la logica del funcionamiento interno de .map()
*/


//               index:0   index:1   index:2  index:3  index:4
let personas = ["Gregorio","Victoria","Raul","Lisbeth","Miguel"];

// console.log(personas[0])
// console.log(personas[1])
// console.log(personas[2])
// console.log(personas[3])

// En este ejemplo se usa for con un incremento tradicional para utilizar el valor de 
// la variable "elemento" al realizar el llamado del indice en el array que coincida
// con el ciclo actual.

// El ciclo se repetira mientras "elemento" sea menor a la longitud del array.

function comoMap(array, callback) {

    for(let elemento = 0; elemento < array.length; elemento++) {
        callback(`Hola  ${array[elemento]}!`);
    };

};





// Al llamar la funcion "comoMap()", se le pasan 2 parametros, un array y un callbak,
// el callback viajara y sera iniciado en la funcion "comoMap()", recibira datos para 
// procesar al retornar, en este caso un string con las palabras "Hola", el elemento que 
// corresponda el ciclo actual, en cada vuelta del for dentro del la funcion "comoMap()",
// y por ultimo un signo de exclamacion "!".

// Al retornar estos datos seran procesados con la logica definica en el llamado de la funcion
// "comoMap()", en este caso es .push con la finalidad de cargar cada string
// recibido desde la funcion, al ser 5 strings cargara el array saludos con 5 saludos distintos.
// uno por cada persona (elemento) del array "personas".
let saludos = [];
comoMap(personas, function(valor_Recibido_Del_For_En_Comomap) { saludos.push(valor_Recibido_Del_For_En_Comomap) });

console.log(saludos);









// *** EJEMPLO 4 ***

/*
    Crea una función "encontrar" que reciba un array y un callback.

    La función debería iterar(recorrer elemento por elemento) sobre el array e invocar el callback para cada elemento.
    la función "encontrar" deberá devolver el primer elemento que retorne true en el callback.
*/

//Variable de elementos a evaluar
const numeros = [1,2,3,"4",5];

//Funcion que itera sobre los elementos
function encontrar(array, callback){

    // Este for se leeria como: Por cada elemendo del array
    for( elemento of array) {
        
        // Este if se leeria como: Si elemento retorna true
        if ( callback(array[elemento]) ) {
        
            //Si el elemento es true se retorna ese elemento al callback
            return array[elemento];
        
        };
    };
};





//llamado de la funcion que itera (encontrar), la cual recibe un callback/funcion como parametro
// Este callback verifica si el tipo de dato de un elemento es string.

let resultado = encontrar(numeros, function(elemento){
        //Retorno del elemento que sea true
        return typeof elemento === "string";
    }
);

console.log(resultado); 









/*** EJEMPLO 5 ***/
// Elabora una funcion permita añadir elementos a un carrito mediante llamado de callbacks recursivos.

let carrito = "🛒";
console.log(carrito);

//Funcion que agrega un producto al carrito tras 2 segundos y ejecuta un callback.
function agregarProducto(miParametroCallback){
    setTimeout(()=>{
        // carrito+= "📦";
        carrito = carrito + "📦";
        miParametroCallback();
    },2000);
}



// agregarProducto( ()=> console.log( carrito) )




// Callback Hell
agregarProducto(
    function(){
        console.log(carrito);
        agregarProducto(
            function(){
                console.log(carrito);
                agregarProducto(
                    function(){
                        console.log(carrito);
                        agregarProducto(
                            function(){
                                console.log(carrito);
                                agregarProducto(
                                    function(){
                                        console.log(carrito)
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)






/*
    Hay varias razones por las que los callbacks pueden ser difíciles de entender:

    Conceptualización: Los callbacks son un concepto abstracto y pueden ser difíciles 
    de comprender para aquellos que están empezando en programación, incluso para los
    programadores con experiencia, toma algo de tiempo y practica dominarlos.


    Naturaleza asíncrona: Los callbacks son un mecanismo para controlar la asincronía, 
    lo cual puede ser un tema un poco desafiante para algunos programadores.


    Complejidad: A veces, los callbacks pueden ser parte de código complejo y anidado, lo que puede hacer 
    que sea difícil entender qué está sucediendo.


    Ausencia de una estructura definida: Los callbacks no siguen una estructura definida como, por ejemplo, 
    las funciones o los bucles, por lo que a veces pueden ser difíciles de seguir y rastrear.


    Sin embargo, con práctica y estudio, los callbacks pueden ser una herramienta muy útil tanto en JavaScript
    commo en otros lenguajes de programación. 
    
    NOTA: Es importante practicar con ejemplos y código propio para comprender realmente cómo funcionan.

    Te invito a que crees tus propios ejercicios y trates de escribir codigo conforme tu nivel de conocimiento
    lo permita, es normal si las primeras veces no obtienes el resultado deseado y sientes frustracion,
    pero no te rindas por eso, con el tiempo comenzaras a ver como poco a poco el concepto de callback 
    se vuelve parte de tu experiencia.

*/