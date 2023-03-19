/*
    ¿Que son selectores?
    Los selectores permiten seleccionar elementos del DOM (elementos HTML) para manipularlos en una página web.
    
    los selectores comunes son:
    
    Seleccion individual
    .getElementById("id"): selecciona un elemento con un id específico.

    Seleccion multiple
    .getElementsByName("name"): selecciona todos los elementos que contengan un name especifico.
    .getElementsByClassName("class"): selecciona todos los elementos con una clase específica.
    .getElementsByTagName("div"): selecciona todos los elementos con un nombre de etiqueta específico.



    Sintaxis:

    document" es el objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.


    Seleccion individual
    document.getElementById("id");

    Seleccion multiple
    document.getElementsByName("name");
    document.getElementsByClassName("class");
    document.getElementsByTagName("div");


    Los selectores se emplean junto a metodos para realizar diferentes acciones.
*/

// Guardando elemento de id "parrafo" en una variable llamada parrafo
// esta variable se usa en varias ocaciones mas adelante.
let parrafo = document.getElementById("parrafo");
//let titulo = document.getElementsByTagName("h1")[0];


// console.log(parrafo);
// console.log(titulo);



//Medotos usados con selectores:

// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
console.log("Las clases del elemento son: " + parrafo.getAttribute("class"));




// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.
parrafo.setAttribute("miAtributo","Este es el valor");
// console.log("El atributo miAtributo es: " + parrafo.getAttribute("miAtributo"));




// elemento.innerHTML: obtiene o establece el contenido HTML interno de un elemento seleccionado.

//Obteniendo contenido:
// console.log("El contenido del elemento es: " + parrafo.innerHTML);

//Mutando el contenido interno del elemento
parrafo.innerHTML = "Hola Mario, Este parrafo fue modificado con el selector .getElementById() y el medodo .innerHTML."

//Obteniendo contenido:
// console.log("El contenido del elemento es: " + parrafo.innerHTML);





// elemento.style: permite acceder y manipular las propiedades CSS del elemento seleccionado.
parrafo.style.fontFamily = "Courier New"





// elemento.classList: permite agregar(add), eliminar(remove) y verificar(contains) 
// las clases CSS del elemento seleccionado.


//Comprobar si existe clase "text-white"
// console.log(
//     (parrafo.classList.contains("text-white") 
//         ? "El elemento tiene la clase indicada" 
//         : "El elemento no tiene la clase indicada"
//     )
//);



//Añadiendo Clase "animate-bounce"
parrafo.classList.add("animate-bounce", "border-sky-800", "border-4");

// Comprobar si existe clase "border-sky-800"
console.log(
    (parrafo.classList.contains("border-sky-800") 
        ? console.log("El elemento tiene la clase border-sky-800")
        : console.log("El elemento no tiene la clase border-sky-800")
    )
);


//parrafo.classList.remove("border-4","animate-bounce");










// document.createElement("p"): Permite crear un elemento (sin asignacion) en el DOM

// elemento.appendChild: agrega un nodo hijo a un elemento seleccionado.


//Crear un nuevo elemento (Sin contenido aun)
let nuevoParrafo = document.createElement("p");
let nuevoParrafo2 = document.createElement("p");

//agregar contenido a elementos
nuevoParrafo.innerHTML="Hola soy un parrafo creado con JavaScript usando innerHTML";
nuevoParrafo2.textContent="Hola soy otro parrafo creado con JavaScript usando textContent";

//Seleccionar el contenedor(div) para agregar el parrafo anteriormente creado y rellenado.
let caja = document.getElementsByName("caja")[0]; // 0 hace referencia a la primera coincidencia con el name "caja"

//Añadir a la caja el parrafo recien creado.
caja.appendChild(nuevoParrafo);
caja.appendChild(nuevoParrafo2);





// elemento.removeChild: elimina un nodo hijo de un elemento seleccionado.
// caja.removeChild(nuevoParrafo2);
