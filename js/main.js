

//BURGERS
class Burgers {
    constructor(nombre, proteina, precio) {
        this.nombre  = nombre.toUpperCase();
        this.proteina = proteina;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.16;
    }
    vender() {
        this.vendido = true;
    }
}
const burger1 = new Burgers("Burger1", "cerdo" , "25000");
const burger2 = new Burgers("Burger2", "res" , "26000");
const burger3 = new Burgers("Burger3", "pez" , "22000");
const burger4 = new Burgers("Burger4", "res" , "21000");
const burger5 = new Burgers("Burger5", "pollo" , "25000");

burger1.sumaIva();

console.log(burger1);

//HOTDOGS
class Hotdogs {
    constructor(nombre, proteina , precio) {
        this.nombre  = nombre.toUpperCase();
        this.proteina = proteina;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.16;
    }
    vender() {
        this.vendido = true;
    }
}

const hotdog1 = new Hotdogs("Hotdog1", "res" , "22000");
const hotdog2 = new Hotdogs("Hotdog2", "pollo" , "24000");
const hotdog3 = new Hotdogs("Hotdog3", "pez" , "21000");
const hotdog4 = new Hotdogs("Hotdog4", "cerdo" , "22000");
const hotdog5 = new Hotdogs("Hotdog5", "pollo" , "21000");

//PIZZAS
class Pizzas {
    constructor(nombre, proteina , precio) {
        this.nombre  = nombre.toUpperCase();
        this.proteina = proteina;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.16;
    }
    vender() {
        this.vendido = true;
    }
}

const pizzas1 = new Pizzas("Pizza1", "pollo" , "25000");
const pizzas2 = new Pizzas("Pizza2", "pollo" , "20000");
const pizzas3 = new Pizzas("Pizza3", "cerdo" , "22000");
const pizzas4 = new Pizzas("Pizza4", "cerdo" , "23000");
const pizzas5 = new Pizzas("Pizza5", "pollo" , "21500");

//PAPAS
class Fries {
    constructor(nombre, proteina , precio) {
        this.nombre  = nombre.toUpperCase();
        this.proteina = proteina;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.16;
    }
    vender() {
        this.vendido = true;
    }
}

const fries1 = new Fries("Papas1", "pollo" , "18000");
const fries2 = new Fries("Papas2", "pollo" , "19000");
const fries3 = new Fries("Papas3", "cerdo" , "17000");
const fries4 = new Fries("Papas4", "cerdo" , "15000");
const fries5 = new Fries("Papas5", "pollo" , "16000");


//MALTEADAS

class Milkshakes {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 0.16;
    }
    vender() {
        this.vendido = true;
    }
}

const milkshake1 = new Milkshakes("Milkshake1", "12000");
const milkshake2 = new Milkshakes("Milkshake2", "11000");
const milkshake3 = new Milkshakes("Milkshake3", "12000");
const milkshake4 = new Milkshakes("Milkshake4", "11000");
const milkshake5 = new Milkshakes("Milkshake5", "10000");

// COMBOS
const combo1 = [ burger1, fries1, ]
const combo2 = [ hotdog1, fries2, ]
const combo3 = [ pizzas1, fries3, ]

combo1.push({milkshake1})
combo2.push({milkshake2})
combo3.push({milkshake3})

console.log(combo1);
console.log(combo2);
console.log(combo3);

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
*/

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

//Eventos

let boton = document.getElementById("btnPrueba")
boton.onclick = () => {
    alert("funciona el boton")
}




