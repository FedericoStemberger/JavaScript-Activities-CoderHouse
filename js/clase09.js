function Actividad01(){
    const saludar = () => console.log("Estoy mandando un mensaje a traves del event listener :)")
    let contenedor = document.getElementById("contenedor1");
    contenedor.innerHTML = `<button id="btnNucleo">Boton Nucleo</button>`
    let boton = document.getElementById("btnNucleo");
    boton.addEventListener("click", saludar);
    
    
}

function Actividad02(){
    let asignaturas = ["Lengua", "Matematica", "Filosofía", "Ciencias Naturales", "Ciencias Sociales"];
    let contenedor = document.getElementById("contenedor2");
    let select = document.createElement("select");
    for (let i = 0; i < asignaturas.length; i++) {
        select.innerHTML += `<option value="${i}">${asignaturas[i]}</option>`
    }
    contenedor.append(select);
    select.addEventListener("change", (el) => {
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `Usted ha elegido ${asignaturas[el.target.value]}`;
        console.log(el);
        contenedor.append(parrafo);
    })
}

// function Actividad03(){
        
// }

let btnRegistrar = document.querySelector("#registrar");
btnRegistrar.addEventListener("submit", () => {
    console.log
})

function Actividad04(){
    
}

function Actividad05(){
    
}