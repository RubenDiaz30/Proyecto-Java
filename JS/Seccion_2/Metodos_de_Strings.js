// Los strings o cadenas de caracteres cuentan con metodos para ser manipulados, 
// entre los principales metodos se encuentran:

let saludo = " Hola Mundo, mensaje de Prueba! ";

//  length: No es un metodo, es una propiedad que devuelve la longitud de una cadena. (No recibe parametros)
    console.log(saludo.length);


//  toUpperCase() y toLowerCase(): convierten una cadena a mayúsculas o minúsculas, respectivamente. (No reciben parametros)
    console.log(saludo.toUpperCase());
    console.log(saludo.toLowerCase());


//  indexOf() y lastIndexOf(): buscan un valor específico en una cadena y devuelven su posición.
    console.log(saludo.indexOf("Prueba"));
    console.log(saludo.lastIndexOf("Prueba"));


//  slice(): extrae una porción de una cadena.
    //slice(start, end)
    console.log(saludo.slice(6,11));


//  replace(): reemplaza un valor específico en una cadena con otro valor.
    console.log(saludo.replace("Prueba","ensayo"));


//  concat(): une dos o más cadenas.
    let mensaje2 = "Esto es otro mensaje";
    console.log(saludo.concat(mensaje2));


//  split(): divide una cadena en un array de subcadenas, su argumento sirve para delimitar la cadena original.
    let articulo = "divide una cadena en un array. de subcadenas. su argumento sirve. para delimitar la cadena. original."
    console.log(articulo.split("."));
    console.log(saludo.split("s"));


//  trim(): elimina los espacios en blanco al principio y al final de una cadena. (No recibe parametros)
    console.log(saludo.trim());


//  startsWith() y endsWith(): determinan si una cadena comienza o termina 
//  con un sufijo(Secuencia al inicio) o prefijo(Secuencia al final) específico.
    let usuario = "@didacusdev"
    let spam = "diegorodriguez@gmail.com"

    console.log(usuario.startsWith("@"));
    console.log(spam.endsWith("@gmail.com"));