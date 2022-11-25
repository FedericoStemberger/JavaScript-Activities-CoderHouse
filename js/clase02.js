function Actividad01(){
    console.clear();
    const nombreDefault = "fede";
    let nombreIngresado = prompt("Ingrese un nombre");
    
    if(nombreIngresado == nombreDefault){
        alert("Fui Yo");
    }else{
        alert("Yo no fui");
    }
}

function Actividad02(){
    
    let letra = prompt("Ingrese una letra");
    if(letra == "y" || letra == "Y"){
        alert("Correcto");
    }else{
        alert("Error");
    }
}

function Actividad03(){
    let numero = prompt("Ingrese un numero: ");
    switch(numero){
        case "1": alert("Elegiste a Homero");
        break;
        case "2": alert("Elegiste a Marge");
        break;
        case "3": alert("Elegiste a Bart");
        break;
        case "4": alert("Elegiste a Lisa");
        break;
    }
}

function Actividad04(){
    let numero = prompt("Ingrese un numero: ");
    if(numero >= 0 && numero <= 1000){
        alert("Presupuesto bajo");
    }else if(numero >= 1001 && numero <= 3000){
        alert("Presupuesto medio");
    }else if(numero > 3000){
        alert("Presupuesto alto");
    }
}
        
function Actividad05(){
    let producto1 = prompt("Ingrese un producto: ");
    let producto2 = prompt("Ingrese un producto: ");
    let producto3 = prompt("Ingrese un producto: ");
    let producto4 = prompt("Ingrese un producto: ");

    if(producto1 == "" || producto2 == "" || producto3 == "" || producto4 == ""){
        alert("Error: Es necesario cargar todos los productos");
    }else{
        alert(`Productos cargados:
        -${producto1}
        -${producto2}
        -${producto3}
        -${producto4}`);
    }
}