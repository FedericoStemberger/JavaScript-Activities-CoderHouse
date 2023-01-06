localStorage.clear();
function Actividad01(){
    let nombreIngresado;
   if("nombre" in localStorage && localStorage.getItem("nombre") != "null"){
    alert(localStorage.getItem("nombre"));
   }else{
    nombreIngresado = prompt("Ingrese un nombre");
    localStorage.setItem("nombre", nombreIngresado);
   }
}

function Actividad02(){
    let comidas = [];
    if("comidas" in localStorage){
        alert(localStorage.getItem("comidas"));
    }else{
        for(let i = 0; i < 5; i++){
            comidas.push(` ${prompt("Ingrese una comida")}`);
        }
        localStorage.setItem("comidas", comidas);
    }
}

function Actividad03(){
        class Hamburguesa{
            constructor(nombre, precio, ingredientes, numeroCombo){
                this.nombre = nombre;
                this.precio = precio;
                this.ingredientes = ingredientes;
                this.numeroCombo = numeroCombo;
            }
        }

        const hamburguesa1 = new Hamburguesa("Cheddar Simple", 1000, "Carne y Cheddar", 1);
        const hamburguesa2 = new Hamburguesa("Cheddar Doble", 1400, "Carne y más Cheddar", 2);
        const hamburguesa3 = new Hamburguesa("Cheddar Triple", 1900, "Carne y mucho Cheddar", 3);
        const hamburguesa4 = new Hamburguesa("Argenta", 2000, "Carne, lechuga, tomate, bacon, Cheddar", 4);
        const hamburguesa5 = new Hamburguesa("Navideña", 1100, "Carne y Cheddar navideño", 5);

        let hamburguesas = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5];
        localStorage.setItem("hamburguesas", JSON.stringify(hamburguesas));
}

function Actividad04(){
    let hamburguesas = [];
    let comboElegido;
    hamburguesas = JSON.parse(localStorage.getItem("hamburguesas"));
    for (const hamburguesa of hamburguesas) {
        alert(`Combo: ${hamburguesa.numeroCombo}
        Nombre: ${hamburguesa.nombre}
        Ingredientes: ${hamburguesa.ingredientes}
        Precio: ${hamburguesa.precio}`);
    }
    comboElegido = parseInt(prompt("Ingrese el numero de combo deseado."));
    if(hamburguesas.some(hamburguesa => hamburguesa.numeroCombo === comboElegido)){
        alert(`Usted ha elegido el combo: ${comboElegido}`);
    }else{
        alert(`El combo ${comboElegido} no se encuentra dentro de las opciones`);
    }
}

function Actividad05(){
    console.log("Precio Inicial:\n" + localStorage.getItem("hamburguesas"));
    let hamburguesas = [];
    hamburguesas = JSON.parse(localStorage.getItem("hamburguesas"));
    // hamburguesas = hamburguesas.map(el => {
    //     return{
    //         nombre: el.nombre,
    //         precio: el.precio*1.3,
    //         ingredientes: el.ingredientes,
    //         numeroCombo: el.numeroCombo
    //     }
    // });
    hamburguesas.forEach(hamburguesa => {
        hamburguesa.precio = hamburguesa.precio * 1.3
    });
    localStorage.setItem("hamburguesas", JSON.stringify(hamburguesas));
    console.log("Aumento del 30%\n" + localStorage.getItem("hamburguesas"));
}