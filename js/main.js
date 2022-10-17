class Usuario {
    constructor(nombre, mail, contrasenia){

        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.mail = mail;
        this.activado = true;
    }


    mostrar_bienvenida(){

        alert("Bienvenido "+this.nombre+ "\n"
        +"Su email es "+this.mail + "\n"
        +"Su estado es "+this.activado);
    }
}




const nombre_usuario = "Martin";
const pass_usuario = "1234";
const mail_usuario = "martinrodriguez0618@gmail.com";


let respuesta = confirm ("Desea registrarse en la pagina?");

if (respuesta) {
    pedir_datos();
}

function pedir_datos(){
    let nombre = prompt ("Ingrese su nombre");
    let mail = prompt ("Ingrese su email");
    let pass = prompt ("Ingrese su pass");

    if(nombre && mail && pass){
        let validacion = validar_datos(nombre,mail);

      if(validacion){
        const usuario = new Usuario (nombre, mail, pass);
        usuario.mostrar_bienvenida();
      }else{
        alert("Intenta con otros datos");
      }
    
    
    
    }else{
        alert("Tenes que completar todos los datos");
    }
}


function validar_datos(nombre, mail){

    if(nombre === nombre_usuario){
        alert("ya existe ese nombre de usuario");
        return false;
    }

    return true;
}








let productoIngresado = confirm("Quiere agregar un producto?");

const todosLosProductos = [];

function agregarProducto (){
    const nombreProducto = prompt("Ingrese el producto");
    todosLosProductos.push(nombreProducto);
    console.log(todosLosProductos);
}


function quitarProducto(){
    const productoAquitar = prompt("Que producto queres borrar?");
    const existeProducto = todosLosProductos.includes(productoAquitar);

    if (existeProducto){
        const indexProducto = todosLosProductos.indexOf(productoAquitar);
        todosLosProductos.splice(indexProducto, 1);
    }else{
        alert("Ese producto no existe");
    }
}

while(productoIngresado){
    agregarProducto();
    productoIngresado = confirm("Quiere agregar otro producto?");
}


let confirmQuitar = confirm("Quiere quitar un producto?");

 while (confirmQuitar){
        quitarProducto();
        confirmQuitar = confirm("Quiere quitar otro producto?");
}

console.log("Array quedo asi: "+ todosLosProductos);
