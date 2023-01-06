function Actividad01(){
    let ciudades = ["Rosario", "Buenos Aires", "Usuahia", "Resistencia"]; //OK
    let div = document.getElementById("ciudades");
    for (const ciudad of ciudades) {
        let elementoNuevo = document.createElement("h2");
        elementoNuevo.innerHTML = ciudad;
        div.append(elementoNuevo);
    }
}

function Actividad02(){
    let tareas = []
    let contenedor = document.getElementById("contenedor");
    for(let i = 0; i < 5; i++){
        let tarea = prompt("Ingrese una tarea: ");
        let lista = document.createElement("ul");
        lista.innerHTML = `<li>${tarea}</li>`;
        contenedor.append(lista);
        tareas.push(tareas);
    }
}


function Actividad03(){
    let paises = ["Argentina", "Italia", "Alemania", "Peru", "Uruguay", "Brasil", "Inglaterra"];
    let contenedor = document.getElementById("contenedorEj3");
    let select = document.getElementById("select");
    for(let i = 0; i < paises.length; i++){
        select.innerHTML += `<option value=${i}>${paises[i]}</option>`;
    }
    contenedor.appendChild(select);
}

function Actividad04(){
    let contenedor = document.getElementById("contenedorEj4");
    class Cantante{
        constructor(nombre, pais){
            this.nombre = nombre;
            this.pais = pais;
        }
    }
    let cantante1 = new Cantante("Mercedes Sosa", "Argentina");
    let cantante2 = new Cantante("Miley Cyrus", "Estados Unidos");
    let cantante3 = new Cantante("Chris Martin", "Inglaterra");
    let cantante4 = new Cantante("Andrea Bocelli", "Italia");
    let cantante5 = new Cantante("Daddy Yankee", "Puerto Rico");
    let cantantes = [cantante1, cantante2, cantante3, cantante4, cantante5];
    
    for (const cantante of cantantes) {
        console.log(cantantes.indexOf(cantante));
        let div = document.createElement("div");
        div.innerHTML = `<ul>
        <li>Cantante ${cantantes.indexOf(cantante)+1}:
                        <ul><li>Nombre: ${cantante.nombre}</li>
                        <li>Pais: ${cantante.pais}</li>
                        </li></ul>
                        </li>
                        </ul>`;
        contenedor.append(div);
    }
}


function Actividad05(){
    let contenedor = document.getElementById("contenedorEj4");
    class Cantante{
        constructor(nombre, pais, id){
            this.nombre = nombre;
            this.pais = pais;
            this.id = id;
        }
    }
    let cantante1 = new Cantante("Mercedes Sosa", "Argentina", "la negra");
    let cantante2 = new Cantante("Miley Cyrus", "Estados Unidos", "miley");
    let cantante3 = new Cantante("Chris Martin", "Inglaterra", "chris");
    let cantante4 = new Cantante("Andrea Bocelli", "Italia", "andre");
    let cantante5 = new Cantante("Daddy Yankee", "Puerto Rico", "daddy");
    let cantantes = [cantante1, cantante2, cantante3, cantante4, cantante5];
    
    for (const cantante of cantantes) {
        console.log(cantantes.indexOf(cantante));
        let div = document.createElement("div");
        div.innerHTML = `<ul>
        <li>Cantante ${cantantes.indexOf(cantante)+1}:
                        <ul><li>Nombre: ${cantante.nombre}</li>
                        <li>Pais: ${cantante.pais}</li>
                        </li></ul>
                        </li>
                        </ul>
                        <button id="${cantante.id}">Contratar</button>`;
        contenedor.append(div);
    }
}