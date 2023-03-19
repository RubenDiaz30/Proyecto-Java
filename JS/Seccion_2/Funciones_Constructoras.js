/*
    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia.
    
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    NOTA: Es un convenio o buena practica nombrar las funciones constructoras con la primera letra en mayuscula.
    Esto con la finalidad de diferenciar con mas facilidad cuando se esta trabajando con una funcion normal,
    o una variable.
*/

//Ejemplo 1
function Usuario(miNombre, miApellido){
    this.nombre = miNombre;
    this.apellido = miApellido;
}

let persona1 = new Usuario("Diego","Rodriguez");
console.log(persona1);


let persona2 = new Usuario("Roger","Villamizar");
console.log(persona2);


let persona3 = new Usuario("Alexnis","Herrera");
console.log(persona3);



//Ejemplo 2
function Persona(nombre,edad,sexo,pais){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.pais = pais;

    function saludar(){
        console.log(`Hola, me llamo ${nombre}, tengo ${edad} años, y vivo en ${pais}`);
    }
    saludar();
}

let personaA = new Persona("Diego",30,"Masculino","Venezuela");
let personaB = new Persona("Daniela",27,"Femenino","España");
let personaC = new Persona("Marcos",25,"Masculino","E.E.U.U.");


console.log(personaA.nombre);
console.log(personaB.edad);
console.log(personaC.pais);

console.log(personas.saludar());
