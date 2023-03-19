/*
    ¿Qué son Eventos?
    Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes en una web 
    y define el comportamiento de la página cuando estos se produzcan. 

    Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript 
    podemos definir qué queremos que ocurra cuando se produzcan ciertos eventos o situaciones.

    Para entender los eventos es necesario conocer algunos conceptos básicos:

    •	Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario interactúa con el 
        documento, pero podrían producirse por situaciones ajenas al usuario, como en el caso de que una 
        imagen no este disponible.

    •	Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón o
        el envío de un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de JavaScript. 

    •	Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta a un 
        evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de evento en concreto. 
        Una vez asociado el manejador a un tipo de evento sobre un elemento de la página, y cada vez que 
        ocurre ese tipo de evento sobre ese elemento en concreto, se ejecutará el manejador de evento asociado.
    
    Formas de manejar eventos:

    •	Mediante atributos HTML: <button onClick="miFuncion ()">Presiona Aquí!</button>

    •	Mediante propiedades JavaScript: elemento.onClick = miFuncion (){ …código… }

    •	Mediante addEventListener():  la forma más recomendable es hacer uso del método .addEventListener(), 
        el cuál es mucho más potente y versatil para la mayoría de los casos.

    Con el método .addEventListener() podemos añadir una "escucha" del evento indicado en el primer parámetro, 
    y en el caso de que ocurra, se ejecutará la función asociada indicada en el segundo parámetro.
*/



// Ejemplo (mediante Atributos HTML) - (en el archivo index2.html sobre el id="parrafo"):
function cambiarTexto(){
    parrafo.innerHTML = "Cambie por el evento de atributo HTML: onMouseOver"
}
function cambiarTexto2(){
    parrafo.innerHTML = "Cambiar de nuevo por el evento de atributo HTML: onMouseLeave"
}




// Ejemplo (mediante propiedad en JavaScript) - (en el archivo index2.html sobre el id="boton")
// Seleccion de elemento
const botonDeCambio = document.getElementById("boton");

//Evento mediante propiedad, usando funcion de flecha
botonDeCambio.onclick = function(){
    alert("Alert generado mediante la propiedad onClick() en javaScript");
}




// Ejemplo (Mediante addEventListener() ) - (en el archivo index2.html sobre el id="boton2")
// elemento.addEventListener: agrega un controlador de eventos a un elemento seleccionado.

// Seleccion de elemento al cual se añadira la escucha
let boton2 = document.getElementById("boton2");


// definiendo manejadores

//Manejador creado con funcion anonima
const manejador1 = function(){
    //eliminar clases anteriores
    document.body.classList.remove("bg-gradient-to-br", "from-yellow-400", "to-yellow-900");

    //añadir nuevas clases
    document.body.classList.add("bg-gradient-to-br", "from-sky-400", "to-sky-900");

};

//Manejador creado con funcion de flecha o Arrow-Function
const manejador2 = () => {
    //eliminar clases anteriores
    document.body.classList.remove("bg-gradient-to-br", "from-sky-400", "to-sky-900");
    
    //añadir nuevas clases
    document.body.classList.add("bg-gradient-to-br", "from-yellow-400", "to-yellow-900");
};


// Añadiendo escucha de evento: parametros( tipo_de_evento, manejador/funcion a realizar )
boton2.addEventListener("mousedown", manejador1);
boton2.addEventListener("mouseup", manejador2);



/* 
    Esta es una lista de algunos de los eventos mas usados.
    - focus: ocurre cuando el elemento gana el foco.
    - blur: Cuando el elemento pierde el foco.
    - click: ocurre cuando el usuario hace clic sobre el elemento.
    - dblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
    - mousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
    - mouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    - mouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
    - mouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
    - mousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
    - keydown: ocurre cuando el usuario presiona una tecla.
    - keyup: ocurre cuando el usuario libera la tecla.
    - keypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
*/