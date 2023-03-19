/*
    fetch() es una función de JavaScript que permite hacer peticiones HTTP (como GET o POST) 
    a un servidor y obtener una respuesta. 
    Esta función retorna una promesa que se resuelve con los datos de la respuesta.

    En resumen, fetch() es una herramienta poderosa y flexible que te permite interactuar con un 
    servidor y obtener datos dinámicos en tu aplicación web.


    Sintaxis:
    fetch("myapi.com") palabra reservada que entre parentesis y comillas contiene la ruta a consultar
    .then() contiene una funcion para tratar los datos, en este caso convertir 
    los datos recibidos en un formato json.
    .catch() contiene una funcion para tratar los errores, en este caso muestra un mensaje en consola.

*/


const busqueda = fetch("https://rickandmortyapi.com/api/character/1");

busqueda
    .then(
        (respuesta)=>{
            return respuesta.json()
        }
    )
    .then(
        (lo_que_envia_el_1er_then)=>{
            console.log(lo_que_envia_el_1er_then);
        }
    )
    .catch( 
        (error)=>{
            console.log(error)
        }
    )