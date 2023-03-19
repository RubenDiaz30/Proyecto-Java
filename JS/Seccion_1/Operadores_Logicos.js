/*
    Se comoce como operadores logicos a los simbolos que nos permiten
    realizar operaciones logicas binarias (true - false).

    Ejemplo:
*/

// &: este simbolo se llama ampersand.

//  AND / Y (&&): devuelve true si AMBOS operandos son true;
//  Si uno de los comparandos es false devuelve false.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log((1<2) && (4==4));
console.log((1>2) && (4==4));
console.log( 1 && '2');
console.log(false && 'uno');
console.log('uno' && false);
console.log("uno" && true);
console.log(false && 2);
console.log(false && undefined);
console.log(null && undefined);
console.log((true && 1) && true);
console.log(true && undefined);


// |: Este simbolo se llama barra vertical.
//  OR / O || : Devuelve true si ALGUNO de los operandos es true.
//  SI AMBOS SON FALSOS, devuelve false.
console.log((5 == 5) || (4 == 3));
console.log(true  || false);
console.log(true  || true);
console.log(false || false);
console.log(false || true);
console.log((1>2) || (5>1));
console.log(("1" == 1) || (6 > 7));
console.log((1 === "1") || ((1 == "1") || ( 5 > 6)));
console.log(((5 === "5") || (1 > 0)) && (10 >= "10" || (9 < 6) ));



//  NOT / Negacion ! : Invierte el valor booleano de su operando, es decir...
// Si es true retornara false, si es false retornara true.
console.log(!false);
console.log(!true);
console.log(!0);
console.log(!1);
console.log( !(5 > 4) );

/* ----- ACTIVIDAD PARA REALIZAR EN CLASE ----- */
    
    // (Facil)
    var uno = !true || false;
    var dos = false && !false;
    var tres = true && !false;

    //(Medio)
    var cuatro = (5 === 5) || (!true);
    var cinco = (!0) || (5 < 0);
    var seis = (3 > 4) && (!0); 

     //Avanzado
    var siete = ( ((false || true) && (!false && true) )) || (true && false);
    var ocho = (6 === 3+3) && (9/3 >= 3);
    var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); 

     //Hardcore
    var diez = !(!true) === !( !( 5 >= 5 ) );
    var once = !( true && (!true === !( !(8 === 4*2) )) );

     //Ultra-Hardcore
    var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);

    //Leyenda
    var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));




    uno;
    dos;
    tres;
    cuatro;
    cinco;
    seis;
    siete;
    ocho;
    nueve;
    diez;
    once;
    doce;
    trece;