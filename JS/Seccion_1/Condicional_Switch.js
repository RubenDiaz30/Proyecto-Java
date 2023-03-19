/*

    Switch: Permite ejecutar un bloque de codigo basandose en casos.
        La sintaxis de switch consiste en una expresion a evaluar y en base a los resultados esperados,
        se desarrollan los casos a ejecutar, adicional se coloca break para evitar que se ejecuten los demas
        casos y default para uns respuesta por defecto en caso de que ningun caso se cumpla.
*/

/**/
let producto = prompt(
    `Minimarket 🛒
    ¿Que desea comprar?:
    1) Carne
    2) Verduras
    3) Frutas
    4) Dulces
    5) Bebidas
    6) Productos de aseo personal
    7) Productos de Limpieza
    8) Papeleria
    9) No veo lo que busco`
);

switch(producto){
    case "1":
        alert("Compraste Carne!");
        break;
    case "2":
        alert("Compraste Verduras!");
        break;
    case "3":
        alert("Compraste Frutas!");
        break;3
    case "4":
        alert("Compraste Dulces");
        break;
    case "5":
        alert("Compraste Bebidas!");
        break;
    case "6":
        alert("Compraste Productos de aseo Personal!");
        break;
    case "7":
        alert("Compraste Productos de limpieza!");
        break;
    case "8":
        alert("Compraste Papeleria!");
        break;
    case "9": 
        alert("Lo sentimos, muy pronto habran mas productos!");
        break;
    default:
        alert("Error - Opcion NO valida");
}



/* ACTIVIDAD - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    verde, amarillo, rojo.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) verde
    2) amarillo
    3) rojo
    OTRO) Opcion invalida


    Si se ingresa un color valido, crea otro mensaje en pantalla que muestre una situacion con el color 
    ingresado previamente y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color rojo(variable color), ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    En caso de que la luz sea verde, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.
    
    
    En caso de que la luz sea amarillo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    En caso de que la luz sea rojo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    PISTA: en algun momento necesitaras usar if y OR/||
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/


let color = prompt(
    `Hola, escribe un color para iniciar:
    1) verde
    2) amarillo
    3) rojo
    OTRO) Opcion invalida`
);

let accion;

if((color == "verde") || (color == "amarillo") || (color == "rojo")){
    accion = prompt(
        `El semaforo esta de color ${color}, ¿Que desea hacer?
        Ingrese el numero que represente tu respuesta
        Pasar normalmente: 1
        Acelerar: 2
        Esperar: 3
        OTRO: Opcion invalida`
    );
    console.log(`${color} - ${accion}`);
}else{
    alert("Opcion invalida");
}

if((accion == 1) || (accion == 2) || (accion == 3)){
    switch(color){
        case "verde":
            if(accion == "1"){
                alert("Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
            }else if(accion == "2"){
                alert("Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
            }else{
                alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌");
            };
            break;


        case "amarillo":
            if(accion == "1"){
                alert("Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌");
            }else if(accion == "2"){
                alert("Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁");
            }else{
                alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞");
            };
            break;



        case "rojo":
            if(accion == "1"){
                alert("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞");
            }else if(accion == "2"){
                alert("Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌");
            }else{
                alert("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁");
            };
            break;
    }
}else{
    alert("opcion invalida");
}