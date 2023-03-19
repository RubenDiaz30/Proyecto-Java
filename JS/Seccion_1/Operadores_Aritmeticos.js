/*
    Operadores Atirmeticos: Son los simbolos que nos permiten
    realizar operaciones matematicas, sumar, restar, Multiplicar, Dividir.
*/

// 1) Para iniciar Quokka (ctrl+k q)
// 2) Para detener Quokka (ctrl+k e)

//Suma
let suma = 5 + 15;
suma;

//Suma de string
let nombre = "Diego ";
let apellido = "Rodriguez";
nombreCompleto = nombre + apellido;
nombreCompleto;

//suma de numero y string
let numeroString = suma + nombre;
numeroString;

//Resta
let resta = 50 - 25;
resta;

//Multiplicacion
let multiplicacion = 5 * 8;
multiplicacion;

//Division
let division = 10 / 2;
division;


//Tambien existen operadores aritmeticos para operaciones mas complejas

//Residuo o Modulo: devuelve el resto de la división entre dos números.
let residuo = 12 % 5;
residuo;


//Incremento: Agrega uno a su operando.
let incremento = 1;

incremento++;
incremento;

incremento++;
incremento;

incremento++;
incremento;


//Decremento: Resta uno de su operando. 

let decremento = 10;

decremento--;
decremento;


//Negacion Unitaria: Devuelve el negativo de su operando.
let negado = 5;
negado = -negado;
negado;
negado = -negado;
negado;


//Positivo Unitario: Intenta convertir el operando en un número, si aún no lo es.

//Convierte string a numero
console.log(+"5");

//Ya es un numero
console.log(+2);


//Exponenciacion / Potencia: Calcula la base a la potencia del exponente
let potencia = 5 ** 2;
potencia;

let variable = 5 ** 6;
variable;

/*
    1) 5: 5
    2) 5 x 5: 25
    3) 25 x 5: 125
    4) 125 x 5: 625
    5) 625 x 5: 3125
    6) 3125 x 5: 15625
*/