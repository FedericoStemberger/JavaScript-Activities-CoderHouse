function Actividad01(){
    console.clear();
    let nombre = "Homero";
    let apellido = "Simpson";
    let edad = 35;

    console.log(`${nombre} ${apellido} tiene ${edad} años:`)
}

function Actividad02(){
    console.clear();
    const ciudad1 = "Buenos Aires";
    const ciudad2 = "Rio de Janeiro";
    const ciudad3 = "Mendoza";
    const ciudad4 = "Asuncion";
    const ciudad5 = "Montevideo"

    console.log(ciudad1);
    console.log(ciudad2);
    console.log(ciudad3);
    console.log(ciudad4);
    console.log(ciudad5);
}

function Actividad03(){
    console.clear();
    let nombre = "Federico";
    let apellido = "Stemberger";
    let ciudad = "Ciudad de Buenos Aires";
    let pais = "Argentina";
    let vencimiento = "24/05/2024";
    let carnet = `Nombre: ${nombre}\nApellido: ${apellido}\nCiudad: ${ciudad}\nPaís: ${pais}\nVencimiento: ${vencimiento}`;
    console.log(carnet);
}

function Actividad04(){
    let usuario1 = prompt("Ingrese un nombre:");
    let usuario2 = prompt("Ingrese otro nombre:");
    let usuario3 = prompt("Ingrese otro nombre mas:");
    let usuario4 = prompt("Un par mas y estamos:");
    let usuario5 = prompt("El último:");

    alert(`Los nombres ingresados fueron ${usuario1}, ${usuario2}, ${usuario3}, ${usuario4} y ${usuario5}`);
}

function Actividad05(){
    let importe = parseFloat(prompt("Ingrese un importe:"));
    let descuento = parseFloat(prompt("Ingrese el descuento que desea hacer:"));
    importe -= (importe*descuento/100);
    alert(`Con un ${descuento}% de descuento el importe seria ${importe}.`);
}