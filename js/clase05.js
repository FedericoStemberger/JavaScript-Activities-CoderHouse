function Probar(){
    console.log("Funcionando.")
}

class Tienda{
    constructor(nombre, direccion, propietario, rubro, hora){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
        this.hora = hora;
    }
    estaAbierto(){
        if((this.hora >= 8 && this.hora < 12) || (this.hora >= 15 && this.hora < 19)){
            return alert("La tienda está abierta");
        }

        return alert("La tienda está cerrada");
    }
    esPropietario(posiblePropietario){
        if(posiblePropietario == this.propietario){
            return true;
        }
        return false;
    }
}



function Actividad01(){


    const tienda1 = new Tienda("Coto", "Av. Nazca 800", "Alfredo Coto", "Supermercados");
    const tienda2 = new Tienda("Mc Donalds", "Galicia 2453", "Veronica Ramirez", "Servicio de Comida Rápida");
    const tienda3 = new Tienda("Nike", "Av. Rivadavia 8005", "Adolfo Jimenez", "Ropa deportiva");

    alert(tienda1.nombre);
    alert(tienda2.direccion);
    alert(tienda3.rubro);
}

function Actividad02(){
    let name = [];
    let adress = [];
    let owner = [];
    let sector = [];
    for(let i = 0; i < 5; i++){
        name[i] = prompt(`Ingrese el nombre de la tienda ${i+1}`);
        adress[i] = prompt(`Ingrese la direccion de la tienda ${i+1}`);
        owner[i] = prompt(`Ingrese el nombre del dueño la tienda ${i+1}`);
        sector[i] = prompt(`Ingrese el nombre del rubro la tienda ${i+1}`);
    }

    console.log(name[0]);
    console.log(adress[0]);
    console.log(name[2]);

    const tienda1 = new Tienda(name[0], adress[0], owner[0], sector[0]);
    const tienda2 = new Tienda(name[1], adress[1], owner[1], sector[1]);
    const tienda3 = new Tienda(name[2], adress[2], owner[2], sector[2]);
    const tienda4 = new Tienda(name[3], adress[3], owner[3], sector[3]);
    const tienda5 = new Tienda(name[4], adress[4], owner[4], sector[4]);

    alert(tienda1.nombre);
    alert(tienda1.direccion);
    alert(tienda3.nombre);
}

function Actividad03(){
    const tienda1 = new Tienda("Coto", "Nazca y Luis Viale", "Alfredo Coto", "Supermercados");
    for (let i = 0; i < 3; i++) {
        tienda1.hora = prompt("Ingrese una hora para saber si la tienda estará abierta o no: ");
        console.log(tienda1.estaAbierto());    
    }
    
}

function Actividad04(){
    const tienda1 = new Tienda ("Coto", "", "Alfredo Coto");
    const tienda2 = new Tienda ("Mercado Libre", "", "Marcos Galperin");
    const tienda3 = new Tienda ("Twitter", "", "Elon Musk");

    let tiendas = [tienda1, tienda2, tienda3];
    
    for (let i = 0; i < 5; i++) {
        nombre = prompt("Ingrese propietario: ");
        for (const tienda of tiendas) {
            if(tienda.esPropietario(nombre)){
                alert(`${nombre} es el propietario de ${tienda.nombre}`);
            }
            
        }
    }
    
}

function Actividad05(){
    class Cliente{
        constructor(nombre,presupuesto,tarjeta,numero){
            this.nombre = nombre;
            this.presupuesto = presupuesto;
            this.tarjeta = tarjeta;
            this.numero = numero;
        }
        transferirDinero(valor){
            if(valor > 0 && valor <= this.presupuesto){
                this.presupuesto -= valor;
                return true;
            }
            return false;
        }
    }

    const cliente1 = new Cliente("Gustavo", 15000, true, "1156487952");
    const cliente2 = new Cliente("Marcos", 80000, false, "1188749523");
    const cliente3 = new Cliente("Phillip", 981500, true, "1155984123");

    let clientes = [cliente1, cliente2, cliente3];

    for (let i = 0; i < 5; i++){
        let monto = parseInt(prompt("Ingrese un monto para transferir"));
        for (const cliente of clientes) {
            if(cliente.presupuesto >= monto){
                alert(`${cliente.nombre} tiene fondos suficientes para realizar esta transacción`);
            }else{
                alert(`${cliente.nombre} no tiene fondos suficientes`);
            }
        }
    }
}