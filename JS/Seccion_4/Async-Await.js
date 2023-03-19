/* 
    Async-Await es en escencia lo mismo que las promesas, azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.

    Async-Await se basa en convertir una funcion normal en una funcion asincrona.
*/

// Ejemplo 1

//Variable que contiene datos (Simula un servidor)
const misDatos = [
    {
        nombre:"Diego",
        apellido:"Rodriguez",
        sexo:"Hombre"
    },
    {
        nombre:"Marcos",
        apellido:"Lopez",
        sexo:"Hombre"
    },
    {
        nombre:"Maria",
        apellido:"Rondon",
        sexo:"Mujer"
    },
    {
        nombre:"Diana",
        apellido:"Ramones",
        sexo:"Mujer"
    },
    {
        nombre:"Isaac",
        apellido:"Duarte",
        sexo:"Hombre"
    }
];


console.log(misDatos.length)

// Promesa de obtencion de datos
const obtenerDatos = ()=>{
    let misDatos2 = [];
    return new Promise(
        (resolve, reject)=>{
            if(misDatos.length < 6){
                setTimeout(
                    ()=>{
                        misDatos.map(
                            (indice)=>{
                                misDatos2.push(indice.nombre);
                            }
                            )
                            resolve("Se cumplio la promesa\nSe obtuvieron los siguientes datos:\n" + misDatos2)
                    },3000);
            }else{
                reject("La promesa no se cumplio")
            }
        }
    )
};


// Funcion que espera que la promesa "obtenerDatos" se cumpla para mostrar los datos luego de 3 segundos.
// (Esto simila el tiempo de espera entre clientr y servidor)


async function buscarDatos(){
    const datosObtenidos = await obtenerDatos();
    console.log(datosObtenidos);
};

buscarDatos();