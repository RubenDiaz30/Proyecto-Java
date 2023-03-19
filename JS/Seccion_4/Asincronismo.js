/* 
    La asincronía es uno de los conceptos principales de Javascript. 
    cuando aprendemos a programar, realizamos tareas de forma síncrona,
    es decir realizando tareas secuenciales que se ejecutan una detrás de otra, 
    de esta manera el orden o flujo del programa es sencillo y fácil de observar 
    en el código.

    Sin embargo, tarde o temprano las tareas asincronicas seran necesarias, 
    para realizar procesos que tienen que esperar a que ocurra un determinado 
    suceso que no depende de nosotros, y reaccionar realizando otro proceso sólo 
    cuando dicho suceso ocurra.

    Javascript es un lenguaje no bloqueante, es decir que las tareas que realizamos no se quedan
    bloqueadas esperando ser finalizadas y evitando la continuidad en la ejecucion del resto de tareas.

    Es importante tener en cuenta que pueden existir múltiples tareas asíncronas, 
    dichas tareas pueden terminar correctamente (o no) y ciertas tareas pueden 
    depender de otras, por lo que deben respetar un cierto orden. 
    Es muy habitual que no sepamos cuanto tiempo va a tardar en terminar una tarea,
    por lo que necesitamos un mecanismo para controlar todos estos factores, 
    estos mecanismo se conocen como promesas.
*/


// setTimeout(): Realiza solo una accion luego de transcurrido el tiempo indicado
setTimeout(saludo,1000)

function saludo(){
    console.log("Este mensaje se muestra luego de pasar 10 segundos");
}


//setInterval() Realiza una accion cada cierto tiempo.
let segundero = setInterval(incremento,1000);

let contador=0;
function incremento(){
    contador+= 1;
    console.log(contador);
}


// clearInterval() detiene la ejecucion de setInterval()
setTimeout( ()=> clearInterval(segundero), 10)





let hora = setInterval(actualizarHora,1000);

function actualizarHora(){
    let fecha = new Date(); 
    console.log(fecha.toLocaleTimeString())
}

let objetoFecha = new Date();
console.log(objetoFecha);
console.log(objetoFecha.getFullYear());
console.log(objetoFecha.getMonth());
console.log(objetoFecha.getDay());
console.log(objetoFecha.getHours());
console.log(objetoFecha.getMinutes());
console.log(objetoFecha.getSeconds());
console.log(objetoFecha.getMilliseconds());
console.log(objetoFecha.toDateString());
console.log(objetoFecha.toLocaleTimeString());
console.log(objetoFecha.toLocaleDateString());