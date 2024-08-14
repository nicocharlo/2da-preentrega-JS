

/* Objetivos específicos

Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
 */



const precios = [500, 560, 600, 480, 499]
const empresa = [1, 2, 3, 4, 5]
const selloMejorPrecio = [false, false, false, false, false]
let mejorOferta = precios[0];
const difPrecio = [0, 0, 0, 0, 0]
const difPorcPrecio = [0 , 0, 0, 0, 0]
   


function obtenerMejorOferta(){
for (let i = 1; i < precios.length; i++){
    if(precios[i] < mejorOferta){
        mejorOferta = precios[i];
    }
    }
}

obtenerMejorOferta();

alert("La mejor oferta es de" + mejorOferta + "pesos");

function obtenerDifPrecio(){
    for (let i = 0; i < difPrecio.length; i++){
        difPrecio[i] = ((difPrecio[i] / mejorOferta) -1);;
        alert("La diferencia de precio respecto a la mejor oferta es de" + mejorOferta + "pesos");
    }
}

obtenerDifPrecio();

function obtenerDifPorc(){
    for (let i = 0; i < difPorcPrecio.length; i++){
        difPrecio[i] = difPorcPrecio[i] - mejorOferta;
        alert("La diferencia porcentual de precio respecto a la mejor oferta es de" +  (difPrecio[i] * 100).toFixed(2) + "%");
    }
}

obtenerDifPorcPrecio();

function selloMejorPrecio(){
    for (let i = 0; i < selloMejorPrecio.length; i++){
       if(precios[i] = mejorOferta){
        selloMejorPrecio[i] = true;
        alert("La empresa" +  empresa[i] + "tiene el precio mas bajo.");
       }else{
        selloMejorPrecio[i] = false;
        alert("La empresa" +  empresa[i] + "no tiene el precio mas bajo.");
       }        
    }
}

selloMejorPrecio();
