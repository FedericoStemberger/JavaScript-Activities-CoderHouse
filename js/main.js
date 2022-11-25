function Ejercicio01() {
    console.clear();
    let nombreUsuario = "";
    let apellidoUsuario = "";
    let primeraLetra;
    let resto;
    console.log("Se activó la función 'EMPEZAR'");
    
    nombreUsuario = prompt("Ingrese su nombre").toLowerCase();
    primeraLetra = nombreUsuario[0].toUpperCase();
    resto = nombreUsuario.slice(1);
    nombreUsuario = primeraLetra + resto;

    apellidoUsuario = prompt("Ingrese su apellido").toLowerCase();
    primeraLetra = apellidoUsuario[0].toUpperCase();
    resto = apellidoUsuario.slice(1);
    apellidoUsuario = primeraLetra + resto;

    console.log("Su nombre es " + nombreUsuario + " " + apellidoUsuario);
}

function Ejercicio02() {
    console.clear();
    let numeroUsuario = prompt("Ingrese un numero");

    if(numeroUsuario.length == 1){
        console.log("El numero ingresado tiene 1 cifra.")
    }else if(numeroUsuario.length == 2){
        console.log("El numero ingresado tiene 2 cifras.");
    }else if(numeroUsuario.length == 3){
        console.log("El numero ingresado tiene 3 cifras.");
    }else if(numeroUsuario.length == 4){
        console.log("El numero ingresado tiene 4 cifras.");
    }else if(numeroUsuario.length == 5){
        console.log("El numero ingresado tiene 5 cifras.");
    }else if(numeroUsuario.length == 6){
        console.log("El numero ingresado tiene 6 cifras.");
    }else{
        console.log("El numero ingresado tiene mas de 6 cifras.");
    }
}
    
    
function Ejercicio03(){
    console.clear();
    let numero = prompt("Ingrese un numero:");
    while(numero > 15){
        numero = prompt("Ingrese un numero entre 1 y 15:");
    }
    for(let i = 0; i < numero; i++){
        console.log((i+1));
    }
}