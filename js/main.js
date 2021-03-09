
const carroCompra = [];
const data = productosData;


/*
function quieroBurger () {
    let nuevoDiv = document.createElement("div");
    let estoQuiero = document.createTextNode("ESTO ES LO QUE QUIERO");
    nuevoDiv.appendChild(estoQuiero);

    let actualDiv = document.getElementById("burgers");
    document.body.insertBefore(nuevoDiv, actualDiv);
}
quieroBurger();
*/

//Declaración de las clases
class Burgers{
    constructor(data){
        this.name        = data.name;
        this.descripcion = data.descripcion;
        this.precio      = data.precio;
    }
}

let listaBurgers = [];
listaBurgers.push(new Burgers(data[0]));
listaBurgers.push(new Burgers(data[1]));
listaBurgers.push(new Burgers(data[2]));
listaBurgers.push(new Burgers(data[3]));
listaBurgers.push(new Burgers(data[4]));

//Eventos de botón de compra
var cantidadPedido = 0;

let botones = document.getElementsByClassName("btn-buy");
for (let boton of botones){
    boton.onclick = () => {
    cantidadPedido = prompt(`No te arrepentirás \n¿qué cantidad desesas de este producto?`)
     
    function quieroBurger () {
        var nuevoDiv = document.createElement("div");
        var estoQuiero = document.createTextNode(`Quiero ${cantidadPedido} de hamburguesas`);
        nuevoDiv.appendChild(estoQuiero);
        var actualDiv = document.getElementById("burgers");
        document.body.insertBefore(nuevoDiv, actualDiv);
    }
    quieroBurger();
    }
}

//Almacenar datos en el localStorage
const productoPedido = localStorage.setItem("productosPedidos", JSON.parse(cantidadPedido));


const guardarProductos = (a, b) => {localStorage.setItem(a, b)};

for (const productos of data){
    guardarProductos("listaProductos", JSON.stringify(data));
}













