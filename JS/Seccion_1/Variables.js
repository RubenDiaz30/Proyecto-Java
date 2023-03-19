/******  VARIABLES  ******/

//var: Variable de alcance(scope) global / Se puede reasignar.
var nombre = "Diego";
nombre; // "Diego"
nombre = "Carlos"; // "Carlos"

//let: Variable de alcance(scope) limitado / Se puede reasirnar
let edad = 30;
edad; // 30
edad = 10; // 10
edad = edad + 1; // 11


//const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const apellido = "Rodriguez";
apellido; // "Rodriguez"
apellido = "Martinez"; //Uncaught TypeError: Assignment to constant variable.


//Estados de una variable

//Sin declarar
pais; // Uncaught ReferenceError: pais is not defined

//Declaracion
var pais;
pais; // undefined

//Asignacion
var pais = "Venezuela";
pais; // "Venezuela"


/***  Declarando Variables  ***/

let usuario = "Diego";
usuario; // "Diego"

let lista = [1, "Estudiar", 2, "Practicar", 3, "Repetir"];
lista; //[1, "Estudiar", 2, "Practicar", 3, "Repetir"]
lista [1] //"Estudiar"

let activo = true;
activo; // true

let objeto = {
    "Nombre" : "Telefono",
    "Precio" : 500,
    "Usado" : false,
    "Colores" : ["Blanco", "Negro", "Gris", "Beige"],
    "Versiones" : [1, 1.1, 1.2]
};

objeto; // {"Nombre":"Telefono", "Precio":500, "Usado":false, "Colores":["Blanco","Negro", "Gris", "Beige"], "Versiones":[1, 1.1, 1.2]}
objeto.Nombre; // "Telefono"
objeto.Colores[2]; // "Gris"