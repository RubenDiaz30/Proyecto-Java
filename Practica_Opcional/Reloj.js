// 1ero se selecciona el elemento que tendra la informacion del reloj
let parrafo = document.getElementById("Reloj");
let parrafo2 = document.getElementById("Fecha");

// Se establece la funcion asincrona que realizara el llamado de la funcion
// que llenara el parrafo cada 1 segundo.
let hora = setInterval(actualizarHora,1000);


// Funcion que obtiene informacion del equipo (fecha) y actualiza un elemento
// HTML Seleccionado.
function actualizarHora(){ 
    let fecha = new Date();
    parrafo.textContent = fecha.toLocaleTimeString();
    parrafo2.innerHTML = fecha.toLocaleDateString();
}




// Realizar un cronometro que pueda ser iniciado y detenido metiante botones.
// Opcional, este cronometro debe llevar un registro de los tiempos (vueltas) registrados.
// Opcional2, en caso de mostrar los registros se debe habiltar un boton para reiniciar los registros.
