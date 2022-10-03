const user = "cliente";
const pass_cliente = "pass1234";

function solicitoDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contrasenia");

    if (validarDatos (usuario, pass)){
        iniciarCarrito();
    }else{
        alert("Usuario y/o contrasenia ivalida");
    }
}

function validarDatos(usuario,pass){
    if (usuario === user && pass === pass_cliente){
        return true ;
    }else{
        return false ;
    }
}

function iniciarCarrito(){
    let lista = "" ;
    let finalizar_carrito = false ;

    while(!finalizar_carrito){
        let cod = prompt("Ingrese codigo de su producto");
        let producto = obtenerProducto(cod);

        if (producto){
            console.log("Producto agregado con exito :"+producto);
            lista += "\n"+producto;
        }else{
            if (cod === null){
                finalizar_carrito = true ;
            }else{
                alert("Ingresar un codigo de producto valido");
            }
        }
    }

    if(lista != ""){
        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){
            alert("Gracias por comprar en nuestra tienda online");
        }
    }
}