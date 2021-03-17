
const carroCompra = [];
const data = productosData;

for (let productos of data){
    generarProductos(productos)
}

function generarProductos(productos){
    let padres = document.getElementsByClassName("options")
    for (let padre of padres) {        
        let contenedor       = document.createElement("div")
        contenedor.innerHTML = ` <div class="options--products">
                                <img src="${productos.img} " alt="${productos.img}">
                                <div class="texts">
                                    <p class="name"><strong>${productos.name}</strong> </p>
                                    <p class="descript">${productos.descripcion} </p>
                                    <a class="btn-buy" href="#"> ${productos.precio} </a>
                                </div>
                            </div> `
        padre.appendChild(contenedor);
    }
    
}

//Eventos de botón de compra
var cantidadPedido = 0;

//Ensayando con JQUERY
/*
$(".btn-buy").click(() => {
    cantidadPedido = prompt(`No te arrepentirás \n¿qué cantidad desesas de este producto?`);
    $(".btn-buy").prepend(`<p>Quiero ${cantidadPedido}</p>`)
})
*/

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












