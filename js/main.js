const buyCar = [];
let totalPrice = 0;
const data = productosData;

class ProductsByCar{
    constructor(product){
        this.id = product.id;
        this.name = product.name;
        this.price = parseFloat(product.price);
    }   
}

//Se recorre el Array de productos
for (let productos of data){
    generateProducts(productos)
}

//Generar productos
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

    //Efecto bontón "Agregar"
    $(".btn-buy").mouseover(function() { 
        $(this).text("Agregar")
    });

    //Efecto bontón Retorna a su precio
    $(".btn-buy").mouseout( function() { 
        $(this).text(`${productos.price}`)
    });    
}

let items = document.getElementById("shopList");
let iconShop = document.getElementById("shop");
iconShop.addEventListener("click", showItemsCar);

//Mostrar productos al carrito de compra
function showItemsCar(){
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
        //Mensaje de carrito vacio
        let containerList           = document.createElement("div");
            containerList.innerHTML = `<p>No hay elementos aún</p>` 
            items.appendChild(containerList);
    }
    //Total de precios de productos en el carrito
    let totalPriceDiv       = document.createElement("div");
    totalPriceDiv.innerHTML = `<p>Precio total: <strong>${totalPrice}</strong></p> `
    items.appendChild(totalPriceDiv);
}

// Función añadir productos al carrito de compra
function addCar(event){
    let index = parseInt(event.target.id) - 1
    buyCar.push(new ProductsByCar(data[index]));
    priceSummary(data[index].price);
}

// Función eliminar productos del carrito de compra
function deleteCar(event){
    for( let nuevoBuyCar in buyCar){        
        let indice = buyCar[nuevoBuyCar].id;
        if (indice == event.target.id){            
            let index = nuevoBuyCar;            
            priceRest(buyCar[index].price)
            buyCar.splice(index, 1);            
        }
    }
    showItemsCar()
}

// Función de sumar
function priceSummary(price){    
    totalPrice = parseFloat(totalPrice) + parseFloat(price)
    return totalPrice;
}

// Función de restar
function priceRest(price){    
    totalPrice = parseFloat(totalPrice) - parseFloat(price)
    return totalPrice;
}





