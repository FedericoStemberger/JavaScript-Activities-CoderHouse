function Actividad01(){
    console.clear();
    let numero = prompt("Ingrese un numero:");
    let texto = prompt("Ingrese un texto:");

    for(let i = 0; i < numero; i++){
        console.log(texto);
        console.log((""))
    }
}

function Actividad02(){
    console.clear();
    let numero = prompt("Ingresa un numero:");

    for(let i = 0; i < numero; i++){
        console.log(("lado"));
        if(i > 2){
            break;
        }
    }
}

function Actividad03(){
    let alumnos = "";

    for(let i = 0; i < 10; i++){
        alumnos += prompt("Ingrese alumno:") + "\n";
    }

    alert(alumnos);
    
}

function Actividad04(){
    let nombres = "";
    let nombreIngresado;

    do{
        nombreIngresado = prompt("Ingrese un nombre:");
        nombres += nombreIngresado + "\n";
    }while(nombreIngresado != "Voldemort");
    
    alert(nombres);
}

function Actividad05(){
    let numeroIngresado;
    let productos = "";
    let tomate = 0;
    let papa = 0;
    let pollo = 0;
    let carne = 0;

    do{
        numeroIngresado = prompt("Ingrese numero. Para salir escriba ESC.");
        switch(numeroIngresado){
            case "1": productos += "Tomate" + "\n";
            break;
            case "2": productos += "Papa" + "\n";
            break;
            case "3": productos += "Pollo" + "\n";
            break;
            case "4": productos += "Carne" + "\n";
            break;
        }
    }while(numeroIngresado != "ESC");

    alert(productos);
}