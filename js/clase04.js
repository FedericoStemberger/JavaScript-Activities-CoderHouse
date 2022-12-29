//Declaracion de variables
let numeroIngresado;
let numeroSumado;

//Funciones de la actividad 1
const entrada = () => {
    numeroIngresado = parseInt(prompt("Ingrese un numero"));
    return numeroIngresado;
}

const procesamiento = (numero) => numero + 5;

const salida = (valor) => {
    console.log(valor);
    alert(valor);
}

//Funciones de la actividad 2

function rendondear(numero){
    alert(Math.round(numero));
}

//Funciones de la actividad 3

function impuesto(precio,porcentaje){
    let total = precio + (precio * porcentaje/100);
    alert(total);
}

//Funciones de la actividad 4
function cotizarDolar(pesos){
    let cotizacion = 314;
    let conversion = pesos / cotizacion;
    conversion = conversion.toFixed(2); //redondea a máximo 2 decimales
    alert(`$${pesos} equivalen a USD ${conversion}`);
}

function cotizarPesos(dolar){
    let cotizacion = 314;
    let conversion = dolar * cotizacion;
    conversion = conversion.toFixed(2);
    alert(`USD${dolar} equivalen a $${conversion}`);
}

//Funciones de la actividad 5
function validacion(cadena){
    if(cadena === ""){
        return false;
    }

    return true;
}



//Funciones de las Actividades
function Actividad01(){
    salida(procesamiento(entrada()));
}

function Actividad02(){
    for(let i = 0;i < 5; i++){
        let numeroUsuario = prompt("Ingrese un numero");
        rendondear(numeroUsuario);
    }
}

function Actividad03(){
    for(let i = 0;i < 5; i++){
        let precio = parseFloat(prompt("Ingrese el precio"));
        let porcentaje = parseFloat(prompt("Ingrese el porcentaje"));
        impuesto(precio, porcentaje);
    }
        
}

function Actividad04(){
    let opcion = prompt(`¿Qué cotización desea saber?
    1. Pesos a Dólares.
    2. Dólares a Pesos.`);
    let cantidad = parseFloat(prompt("Ingrese la cantidad: "));
    if(opcion == 1){
        cotizarDolar(cantidad);
    } else if(opcion == 2){
        cotizarPesos(cantidad);
    }else{
        alert("Opcion Incorrecta.");
    }
}

function Actividad05(){
    let palabra;
    palabra = prompt("Ingrese una palabra");
    do{
        if(validacion(palabra)){
            alert("Palabra ingresada con éxito.");
        }else if(!validacion(palabra)){
            alert("Usted no hay ingresado ninguna palabra");
        }
        
        palabra = prompt("Ingrese una palabra");

    }while(palabra !== "ESC");
    
}

