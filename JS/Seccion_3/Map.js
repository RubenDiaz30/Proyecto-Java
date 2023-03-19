/* 
    .map() es una función de los objetos Array que permite transformar cada elemento 
    de un arreglo en un nuevo elemento mediante una función especificada. 
    
    La función ".map()" devuelve un nuevo arreglo con los elementos transformados.
    a diferencia de filter, fill, every y some, .map no realiza ninguna funcion por defecto
    mas que recorrer cada elemento de un array.

    por esta razon, la funcion .map() es mas utilizado ya que permite mayor personalizacion 
    a la hora de trabajar con rrecorridos de arrays.
*/


//Ejemplo 1 (rrecorrer un array e imprimir cada elemento x 2)
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


miArray.map(callback);

function callback(elemento,indice,algo,algo2){ 
    console.log(`${miArray[indice] = elemento * 2}`);
    //console.log(`${miArray[indice]} x 2 = ${miArray[indice] = elemento * 2} /`) 
}



//Ejemplo 2 crear un nuevo array. (rrecorrer un array y multiplicar cada elemento x 2)
let miNuevoArray = ["Diego","Richard","Mario","Alexnis","Maria","Alejandra","Valentina","Luis","Francisco"];
let miNuevoArray2 = [];
let miNuevoArray3 = [];

miNuevoArray.map(
    function(valorDelElemento,indiceDelElemento){
        console.log(valorDelElemento)
        console.log(indiceDelElemento)
        
        miNuevoArray2.push(`Hola ${valorDelElemento}`);
        miNuevoArray3.push((indiceDelElemento + 1) * 2)

    }
);

console.log(miNuevoArray);
console.log(miNuevoArray2);
console.log(miNuevoArray3);



//Ejemplo 3 (rrecorrer un array y obtener elementos tipo numero y tipo string en variables difetrentes).
let mezcla = [1,2,"3",null,undefined,"cuatro",{},true,5,"6",7,null,false,"8","9",false,10,true,"once",[],undefined];
let numeros = [];
let caracteres = [];
let booleanos = [];
let objetos = [];
let indefinidos= [];

mezcla.map(
    function(valorDelElemento,indiceDelElemento){
        if(typeof(valorDelElemento) === "string"){
            caracteres.push(valorDelElemento);
        }else if(typeof(valorDelElemento) === "number"){
            numeros.push(valorDelElemento);
        }else if(typeof(valorDelElemento) === "boolean"){
            booleanos.push(valorDelElemento);
        }else if(typeof(valorDelElemento) === "object"){
            objetos.push(valorDelElemento);
        }else if(typeof(valorDelElemento) === "undefined"){
            indefinidos.push(valorDelElemento);
        }
    }
);


caracteres;
numeros;
booleanos;
objetos;
indefinidos;
