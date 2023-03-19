//Colores con intervalo de tiempo
let arrayDeColores = ["red","pink","blue","green","orange","brown","yellow","purple","gray","greenyellow"];
let indice = 0;


function cambiar(){
    setInterval(()=>{
        console.log(indice);
        document.body.style.backgroundColor = arrayDeColores[indice];
        if(indice <= 8){
            indice++;
        }else{
            indice = 0;
        }
    },700);
};





// Calculadora basica
let total = document.getElementById("pantalla")
let botonSumar = document.getElementById("sumar");

function sumar(){
    let input1 = document.getElementById("primerInput"); 
    let input2 = document.getElementById("segundoInput");

    total.innerText = "Total = " + ( +input1.value + +input2.value);
};


botonSumar.addEventListener("click",sumar);





//Reloj
let reloj = document.getElementById("hora");

setInterval(
    ()=>{
        let hora = new Date;
        reloj.innerText = hora.toLocaleTimeString();
    },1000)




//Eval
document.getElementById("btnCalcular").addEventListener("click",()=> document.getElementById("total").innerText = eval(document.getElementById("operacion").value));




//llenado de caja/div
let boton = document.getElementById("llenado"); 
let contenedor = document.getElementById("cajaDeParrafos");
let contador = 0;

function llenado(){
    //Crear nuevo elemento
    let nuevoParrafo = document.createElement("p");

    //llenar el elemento
    nuevoParrafo.innerText = contador++;

    //Añadir elemento al div
    contenedor.appendChild(nuevoParrafo);
}


boton.addEventListener("click",llenado);