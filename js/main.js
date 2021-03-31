
const buyCar = [];
const data = productosData;
let totalPrice = 0;
const prefijo = "productoID";

class ProductsByCar{
    constructor(product){
        this.idCar = product.id;
        this.name = product.name;
        this.price = parseFloat(product.price);
    }   
}

function priceSummary(price){    
    totalPrice = parseFloat(totalPrice) + parseFloat(price)
    return totalPrice;
}

function priceRest(price){    
    totalPrice = parseFloat(totalPrice) - parseFloat(price)
    return totalPrice;
}

for (let productos of data){
    generateProducts(productos)
}

function generateProducts(productos){
    let idRemove = prefijo+productos.id;
    let padres = document.getElementsByClassName("options")
    for (let padre of padres) {
        let container       = document.createElement("div")
        container.innerHTML = ` <div class="options--products">
                                    <img src="${productos.img} " alt="${productos.img}">
                                    <div class="texts">
                                        <p class="name"><strong>${productos.name}</strong> </p>
                                        <p class="descript">${productos.description} </p>
                                        <button class="btn-buy" id=${productos.id}  href="#"> ${productos.price} </button>
                                        <button class="btn-buy" id=${idRemove} href="#"> X </button>
                                    </div>
                                </div>`
        padre.appendChild(container);
    }
    document.getElementById(productos.id).onclick = addCar;
    document.getElementById(idRemove).onclick = deleteCar;
}

let items = document.getElementById("shopList");
let iconShop = document.getElementById("shop");
iconShop.addEventListener("click", showItemsCar);

function showItemsCar(){
    if (buyCar.length > 0){
        buyCar.map((element) => {
            let containerList       = document.createElement("div");
            containerList.innerHTML = `<p>${element.name}</p>
                                        <p>${element.price}</p>
                                        <button href="#">X</button>` 
            items.appendChild(containerList);
        })  
    } else {
        let containerList       = document.createElement("div");
            containerList.innerHTML = `<p>No hay elementos</p>` 
            items.appendChild(containerList);
    }
}

function addCar(event){
    let index = parseInt(event.target.id) - 1
    buyCar.push(new ProductsByCar(data[index]));
    priceSummary(data[index].price);
}

function deleteCar(event){
    let newId = event.target.id.substring(10,12);
    let index = parseInt(newId) - 1
    console.log(newId) 
    buyCar.filter(data[index]);
    console.log(buyCar);
    priceRest(data[index].price);
    console.log(totalPrice);
}

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














