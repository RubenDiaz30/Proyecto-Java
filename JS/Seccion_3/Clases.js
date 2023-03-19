/* ¿Que es una Clases?
    Una clase es una plantilla o molde para crear objetos(instancias), 
    que tienen propiedades y métodos en común. 

    Una clase se define utilizando la palabra clave "class" seguida del nombre de la clase (class Persona{...}). 
    Dentro de las llaves se definen las propiedades y métodos de la clase.

    - Constructor: es un método especial de la clase que se ejecuta automáticamente cuando 
    se crea una nueva instancia, su rol principal es inicializar los atributos de la clase con los 
    valores pasados como argumentos al crear una nueva instancia, usando la palabra reservada new.
    Ejemplo: new Persona("nombre","apellido")

    - Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    El método Saludo está fuera del scope del constructor, pero puede acceder a 
    los atributos de la clase que se han declarado en el constructor a través de 
    la palabra clave this. Esto es posible porque this se refiere a la instancia actual de la clase.

    - this: hace referencia al elemento padre, es decir al objeto instanciado.


    NOTA:
        Es una convención común en JavaScript declarar las clases con la 
        primera letra de cada palabra en mayúscula. Ejemplo "Persona" o "Usuario",
        sin embargo es solo una buena practica, no evita el buen funcionamiento de las clases.
        
        Esto se realiza con la finalidad de diferenciar de manera mas facil cuando
        se emplea una clase, una variable o una funcion.
*/


// En este ejemplo, la clase "Persona" tiene un constructor que se utiliza para asignar valores a las 
// propiedades "nombre" y "edad" al crear una nueva instancia de la clase, 
// esto quiere decir al crear un nuevo objeto. 

// También tiene un método que es una funcion llamada "saludo" que retirna un mensaje.


class Persona {
    //Constructor: asigna valor a las propiedades.
    constructor(nombrePersona, apellidoPersona) {
        this.nombre = nombrePersona;
        this.apellido = apellidoPersona;
    }

    //Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    saludo() {
        return (`Hola, Me llamo ${this.nombre} ${this.apellido}`);
    }
}


//Creando nuevos Objetos/Instancias con la palabra reservada new
let persona1 = new Persona("Pedro", "Guzman");
let persona2 = new Persona("Maria", "Lopez");
let persona3 = new Persona("Gabriela", "Moran");



//nuevo objeto
console.log(persona1)

//Propiedad
console.log(persona1.nombre);

//Propiedad
console.log(persona1.apellido);

//Metodo que retorna logica al ser llamado.
console.log(persona1.saludo());



//Objetos adicionales creados
console.log(persona2);
console.log(persona2.saludo());

console.log(persona3);
console.log(persona3.saludo());




class Auto{
    //Constructor: asigna valor a las propiedades.
    constructor(marcaAuto, modeloAuto, annioAuto, colorAuto, encendidoAuto, apagadoAuto) {
   //this.propiedad = parametro
        this.marca = marcaAuto;
        this.modelo = modeloAuto;
        this.annio = annioAuto;
        this.color = colorAuto;
        this.encendido = encendidoAuto;
        this.apagado = apagadoAuto;
    }

    //Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    encender() {
        if(this.apagado == true){
            this.encendido = true;
            this.apagado = false;
            return ("El auto se ha encendido")
        }else if(this.apagado == false){
            return ("El auto ya estaba encendido")
        }
    }
    apagar() {
        if(this.encendido == true){
            this.encendido = false;
            this.apagado = true;
            return ("El auto se ha apagado")
        }else if(this.apagado == true){
            return ("El auto ya estaba apagado")
        }
    }
    avanzar() {
        return ("El auto esta en marcha");
    }
    detener() {
        return ("El auto se detuvo");
    }
}


let ferrari = new Auto("Ferrari","Testarossa",1995,"Rojo",false,true)


//Llamo a todo el objeto
console.log(ferrari);



console.log(ferrari.marca);



console.log(ferrari.modelo);



console.log(ferrari.annio);



console.log(ferrari.color);



console.log(ferrari.encendido);



console.log(ferrari.apagado);


// Antes de encender
console.log(ferrari.encendido);
console.log(ferrari.apagado);

//encendiendo
console.log(ferrari.encender())

//despues de encender
console.log(ferrari.encendido);
console.log(ferrari.apagado);

console.log(ferrari.apagar())




/*
    La principal diferencia entre clases y funciones constructoras es: 
    -la sintaxis utilizada para crearlas y utilizarlas.

    Las clases se introdujeron en ECMAScript 6, la versión actual del estándar de JavaScript, 
    y proporcionan una sintaxis más clara y legible para crear objetos y definir sus propiedades y métodos. 

    En resumen, las clases y las funciones constructoras son dos formas diferentes de crear objetos en 
    JavaScript, siendo la principal diferencia entre ellas la sintaxis más limpia y legible y la creacion de metodos,
    por parte de las clases.
*/





// ***** EJERCICIO *****
// Crea un formulario basico que solicite nombre, apellido y edad, tambien debe contar con un boton(basico) 
// para registrar. Crea una funcion llamada registro que obtenga los datos del formulario y cree nuevas 
// instancias de una clase llamada Usuarios y las aloje en un array llamado instancias.

// (Opcional) Tambien crea un boton que permita ver los usuarios registrados en la pagina web.



//La clase usuario genera un array de objetos, y estos objetos seran los usuarios registrados.
class Usuario{
    constructor(nombreUsuario,apellidoUsuario,edadUsuario){
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.edad = edadUsuario;
    }
}

let instancias=[];
let i = 0;

function registro(){
    i++;
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value
    instancias[`usuario-${i}`] = new Usuario(nombre,apellido,edad);
}


function revelar(){
    let caja = document.getElementById("registros");
    caja.innerHTML = "Registros";
    for (indice in instancias) {
        let parrafo = document.createElement("p");
        parrafo.textContent = `Nombre: ${instancias[indice].nombre} | Apellido: ${instancias[indice].apellido} | Edad: ${instancias[indice].edad}`;
        caja.appendChild(parrafo);
    }
}


// Seleccionando botones para escuchar
let botonRegistrar = document.getElementById("enviar");
let botonVerRegistros = document.getElementById("verRegistros")


//Agregando escucha a botones
botonRegistrar.addEventListener("click",registro);
botonVerRegistros.addEventListener("click",revelar);