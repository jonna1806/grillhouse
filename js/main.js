
const carroCompra = [];
const data = productosData;

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












