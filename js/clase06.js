function Actividad01(){
    let jugadores = ["Lionel Messi", "Dibu Martinez", "Rodrigo De Paul", "Nicolas Tagliafico"];
    for (const jugador of jugadores) {
        alert(`JUGADORES
        Nombre: ${jugador}
        Posicion en array: ${jugadores.indexOf(jugador)}`);
    }
}

function Actividad02(){
    let jugadores = [];
    let salida = "ESC";
    let palabraIngresada;
    do{
        palabraIngresada = prompt("Ingrese un jugador:");
        if(palabraIngresada !== "ESC"){
            jugadores.push(palabraIngresada);
        }

    }while(palabraIngresada !== "ESC");
    alert("Ingreso finalizado");
    for (const jugador of jugadores) {
        alert(`JUGADORES
        Nombre: ${jugador}
        Posicion en array: ${jugadores.indexOf(jugador)}`);
    }

    if(jugadores.length === 0){
        alert("No se han ingresado jugadores");
    }
    
}

function Actividad03(){
    class Jugador{
        constructor(nombre, numeroCamiseta, edad, lesion){
            this.nombre = nombre;
            this.numeroCamiseta = numeroCamiseta;
            this.edad = edad;
            this.lesion = lesion;
        }
    }

    const jugador1 = new Jugador("Lionel Messi", "10", 35, false);
    const jugador2 = new Jugador("Julian Alvarez", "9", 22, true);
    const jugador3 = new Jugador("Alexis Mac Allister", "8", 21, false);
    const jugador4 = new Jugador("Emiliano Martinez", "1", 29, false);
    const jugador5 = new Jugador("Angel Di Maria", "11", 35, true);

    let jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5];
}

function Actividad04(){
    class Jugador{
        constructor(nombre, numeroCamiseta, edad, lesion){
            this.nombre = nombre;
            this.numeroCamiseta = numeroCamiseta;
            this.edad = edad;
            this.lesion = lesion;
        }
    }

    const jugador1 = new Jugador("Emiliano Martinez", "23", 30, false);
    const jugador2 = new Jugador("Nahuel Molina", "26", 24, true);
    const jugador3 = new Jugador("Cristian Romero", "13", 24, true);
    const jugador4 = new Jugador("Nicolás Otamendi", "19", 34, true);
    const jugador5 = new Jugador("Nicolás Tagliafico", "3", 30, true);
    const jugador6 = new Jugador("Angel Di Maria", "11", 34, true);
    const jugador7 = new Jugador("Rodrigo De Paul", "7", 28, false);
    const jugador8 = new Jugador("Enzo Fernández", "24", 21, true);
    const jugador9 = new Jugador("Alexis Mac Allister", "20", 24, true);
    const jugador10 = new Jugador("Lionel Messi", "10", 35, false);
    const jugador11 = new Jugador("Julian Alvarez", "9", 22, true);
    let nombre;

    let seleccion = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11];

    function buscarJugador(equipo, jugador){
        if(equipo.find(e => e.nombre === jugador)){
            return true;
        }
        return false;
    }

    for(let i = 0; i < 5; i++){
        nombre = prompt("Ingrese el nombre del futbolista");
        if(buscarJugador(seleccion, nombre)){
            alert(`El jugador ${nombre} ha sido convocado para jugar la final del mundo.`)
        }else{
            alert(`El jugador no ha sido convocado.`)
        }
    }
}

function Actividad05(){
    class Jugador{
        constructor(nombre, numeroCamiseta, edad, lesion){
            this.nombre = nombre;
            this.numeroCamiseta = numeroCamiseta;
            this.edad = edad;
            this.lesion = lesion;
        }
    }

    const jugador1 = new Jugador("Emiliano Martinez", "23", 30, false);
    const jugador2 = new Jugador("Nahuel Molina", "26", 24, true);
    const jugador3 = new Jugador("Cristian Romero", "13", 24, true);
    const jugador4 = new Jugador("Nicolás Otamendi", "19", 34, true);
    const jugador5 = new Jugador("Nicolás Tagliafico", "3", 30, true);
    const jugador6 = new Jugador("Angel Di Maria", "11", 34, true);
    const jugador7 = new Jugador("Rodrigo De Paul", "7", 28, false);
    const jugador8 = new Jugador("Enzo Fernández", "24", 21, true);
    const jugador9 = new Jugador("Alexis Mac Allister", "20", 24, true);
    const jugador10 = new Jugador("Lionel Messi", "10", 35, false);
    const jugador11 = new Jugador("Julian Alvarez", "9", 22, true);
    let seleccion = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11];
    let edadIngresada;

    function filtroJugadores(equipo, edad){
        const jugadoresMismaEdad = equipo.filter(el => el.edad === edad)
        if(jugadoresMismaEdad.length === 0){
            return false;
        }
        return jugadoresMismaEdad;
    }

    for(let i = 0; i < 5; i++){
        edadIngresada = parseInt(prompt("Ingrese la edad deseada:"));
        let jugadores = filtroJugadores(seleccion,edadIngresada);
        if(!jugadores){
            alert("No se han encontrado jugadores con dicha edad.");
        }else{
            if(jugadores.length > 1){
                alert(`SE HAN ENCONTRADO ${jugadores.length} JUGADORES CON ${edadIngresada} AÑOS`);
            }else{
                alert(`SE HA ENCONTRADO 1 JUGADOR CON ${edadIngresada} AÑOS`);
            }
            for (const jugador of jugadores) {
                alert(`JUGADOR ${jugadores.indexOf(jugador)+1}
                Nombre: ${jugador.nombre}
                Dorsal: ${jugador.numeroCamiseta}`);
            }
        }

    }

}