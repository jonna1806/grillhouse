
const carroCompra = [];
const data = productosData;

let nombre = 0

/*
function pedirNombre() {
    nombre = prompt ("Hola, bienvenido a Grill House, nos gustaría saber tu nombre");
}
pedirNombre();
function solicitarPedido() {
    pedido = prompt ("¡A lo que vinimos " + nombre + "! \n¿Qué te gustaría conocer de nuestro menú? \nHamburguesas > 1 \nHotdogs > 2 \nPizzas > 3 \nPapas > 4 \nMalteadas > 5");
}
solicitarPedido();


function quieroBurger () {
    var nuevoDiv = document.createElement("div");
    var estoQuiero = document.createTextNode("ESTO ES LO QUE QUIERO");
    nuevoDiv.appendChild(estoQuiero);

    var actualDiv = document.getElementById("burgers");
    document.body.insertBefore(nuevoDiv, actualDiv);
}

if(pedido == 1) {
    quieroBurger()
} else if(pedido == 2){
    alert("Nuestros hotdogs")
} else if(pedido == 3){
    alert("Nuestras pizzas")
 } else if(pedido == 4){
    alert("Nuestras papas")
} else if(pedido == 5){
    alert("Nuestras malteadas")
} else{
    alert("No te gustó nada :C")
}
*/

//Eventos
let boton = document.getElementById("btnPrueba")
boton.onclick = () => {
    alert("El btn funciona");
}

localStorage.setItem('Carrito', data.length);
    








