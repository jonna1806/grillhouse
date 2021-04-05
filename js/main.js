
const buyCar = [];
const data = productosData;
let totalPrice = 0;
const prefijoRemove = "productoID";

class ProductsByCar{
    constructor(product){
        this.id = product.id;
        this.name = product.name;
        this.price = parseFloat(product.price);
    }   
}

function priceSummary(price){    
    totalPrice = parseFloat(totalPrice) + parseFloat(price)
    return totalPrice;
}

function priceRest(price){    
    console.log("Soy resta",price);
    totalPrice = parseFloat(totalPrice) - parseFloat(price)
    return totalPrice;
}

//Se recorre el Array de productos
for (let productos of data){
    generateProducts(productos)
}

//Generar productos al sitio web
function generateProducts(productos){
    let padres = document.getElementsByClassName("products")
    for (let padre of padres) {
        let container       = document.createElement("div")
        container.innerHTML = ` <div class="product--option">
                                    <img src=${productos.img} alt=${productos.img}>
                                    <div class="product--option--details">
                                        <p class="name"><strong>${productos.name}</strong> </p>
                                        <p class="descript">${productos.description} </p>
                                        <button class="btn-buy" id=${productos.id}  href="#"> ${productos.price} </button>                                        
                                    </div>
                                </div>`
        padre.appendChild(container);
    }
    document.getElementById(productos.id).onclick = addCar;

    //Efecto bontón AGREGAR
    $(".btn-buy").mouseover(function() { 
        $(this).text("Agregar")
    });

    $(".btn-buy").mouseout( function() { 
        $(this).text(`${productos.price}`)
    });
}

let items = document.getElementById("shopList");
let iconShop = document.getElementById("shop");
iconShop.addEventListener("click", showItemsCar);

//Mostrar productos al carrito de compra
function showItemsCar(){
    console.log("buy car", buyCar);
    items.innerHTML = "";
    if (buyCar.length > 0){        
        buyCar.map((element) => {
            let containerList       = document.createElement("div");
            containerList.innerHTML = `<p>${element.name}</p>
                                        <p>$ ${element.price}</p>
                                        <button id=${element.id} class="btn btn-danger" href="#">X</button>` 
            items.appendChild(containerList);
            document.getElementById(element.id).onclick = deleteCar;
        }) 
    } else {
        let containerList           = document.createElement("div");
            containerList.innerHTML = `<p>No hay elementos aún</p>` 
            items.appendChild(containerList);
    }
}

//Añadir productos al carrito de compra
function addCar(event){
    let index = parseInt(event.target.id) - 1
    buyCar.push(new ProductsByCar(data[index]));
    priceSummary(data[index].price);
    console.log(totalPrice)
}

function deleteCar(event){
    for( let nuevoBuyCar in buyCar){
        
        let indice = buyCar[nuevoBuyCar].id;
        if (indice == event.target.id){
            console.log("Soy indice", indice)
            let index = nuevoBuyCar;
            console.log("Soy index", index);
            console.log("Soy total price antes de", totalPrice);
            priceRest(buyCar[index].price)
            buyCar.splice(index, 1);
            console.log("Soy total price después de", totalPrice);
        }
    }
    showItemsCar()
}

/*
var btnAll = document.getElementById("all").onclick = filterAll
var btnAll = document.getElementById("burgers").onclick = filterBurgers
var btnAll = document.getElementById("hotDog").onclick = filterHotDog
var btnAll = document.getElementById("pizzas").onclick = filterHotDog
var btnAll = document.getElementById("fries").onclick = filterFries
var btnAll = document.getElementById("milkshakes").onclick = filterMilkshakes
*/



//Eventos de botón de compra
var cantidadPedido = 0;

//Ensayando con JQUERY
/*
$(".btn-buy").click(() => {
    cantidadPedido = prompt(`No te arrepentirás \n¿qué cantidad desesas de este producto?`);
    $(".btn-buy").prepend(`<p>Quiero ${cantidadPedido}</p>`)
})


//Ensayando con Efectos y animaciones
$("#burgerMissPiggy").click( () => { 
    $("#burgerMissPiggy").fadeOut(2000, () => {
        $("#burgerMissPiggy").fadeIn("2000");
    });   
});

//Aparece y desaparece los nombres de los productos
$(".btn-buy").click(() => {
    $(".name").toggle("fast");
})

 

//Almacenar datos en el localStorage
const productoPedido = localStorage.setItem("productosPedidos", JSON.parse(cantidadPedido));

const guardarProductos = (a, b) => {localStorage.setItem(a, b)};

for (const productos of data){
    guardarProductos("listaProductos", JSON.stringify(data));
}

//__________________________

$( document) .ready(function(){
    console.log('El DOM está listo');
})

window.addEventListener('load', function(){
    console.log('Ventana cargada');
})

// Probando AJAX con Jquery
const URLGET = "https://jsonplaceholder.typicode.com/posts"

$("#pruebaAjax").prepend('<button id="btnPrueba">Desplegar información</button>')
$("#pruebaAjax").prepend('<button id="btnEnviar">Enviar Información</button>')

$("#btnPrueba").click(() => {
    $.get(URLGET, function (respuesta, estado){
        if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos){
                $("#pruebaAjax").prepend(`<div>
                                            <p><strong>${dato.title}</strong><p>
                                            <p> ${dato.body}</p>                                        
                                          </div>`);
                                          
            }
        }
    })    
})

$("#btnEnviar").click(() => {
    $.post(URLGET, data[0].name, (datos, estado) => {
        if(estado === "success"){
            alert ("envio exitoso");
        }
    })
})
*/














