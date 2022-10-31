

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const libro1 = new Producto(1, "Libro1", 100, "../img/portada1.png");
const libro2 = new Producto(2, "Libro2", 100, "../img/portada2.png");
const libro3 = new Producto(3, "Libro3", 100, "../img/portada5.png");
const libro4 = new Producto(4, "Libro4", 100, "../img/portada9.png");
const libro5 = new Producto(5, "Libro5", 100, "../img/portada12.png");
const libro6 = new Producto(6, "Libro6", 100, "../img/portada14.png");
const libro7 = new Producto(7, "Libro7", 100, "../img/portada15.png");
const libro8 = new Producto(8, "Libro8", 100, "../img/portada16.png");

//Array con catalogo de productos

const productos = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8];

// array carrito

let carrito = [];

//cargar al carrito desde el localStorage

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//console.log(productos);

//Modificando DOM mostrando productos:

const contenedorProductos = document.getElementById("contenedorProductos");

//funcion para mostrar productos:

const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = ` 
        <div class="card">
        <img src=" ${producto.img} " class="card-img-top imgProductos" alt=" ${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title"> ${producto.nombre} </h5>
        <p class="card-text"> ${producto.precio} </p>
        <button class="btn colorBoton" id="boton${producto.id}"> Agregar al carrito </button>
        </div>
        </div> 
        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })

    })
}


//funcion agregar al carrito

const agregarAlCarrito = (id) =>{
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        //localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    
    calcularTotal();
}

mostrarProductos();


//MOSTRAR CARRITO DE COMPRAS

const contenedorCarrito = document.getElementById("contenedorCarrito");

const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

//funcion para mostrar el carrito

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML="";
    carrito.forEach((producto) =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = ` 
        <div class="card">
        <img src=" ${producto.img} " class="card-img-top imgProductos" alt=" ${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title"> ${producto.nombre} </h5>
        <p class="card-text"> ${producto.precio} </p>
        <p class="card-text"> ${producto.cantidad} </p>
        <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
        </div>
        </div> 
        `
        contenedorCarrito.appendChild(card);

        //eliminar productos del carrito
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () =>{
            eliminarDelCarrito(producto.id);
        })
    })

    calcularTotal();
}




//funcion para eliminar producto del carrito

const eliminarDelCarrito = (id) =>{
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//vaciar todo el carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})


//funcion para eliminar todo el carrito

const eliminarTodoElCarrito = () =>{
    carrito = [];
    mostrarCarrito();

    //localStorage

    localStorage.clear();
}

//mostrar el total de la compra

const total = document.getElementById("total");
const calcularTotal= () =>{
    let totalCompra = 0; 
    carrito.forEach((producto) =>{
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML= `Total: $ ${totalCompra}`;
}


