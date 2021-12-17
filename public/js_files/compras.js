class Producto {
    constructor(nombre, marca, variedad, precio, img){
        this.nombre = nombre
        this.marca = marca
        this.variedad = variedad
        this.precio = precio
        this.img = img


    }
}

//Productos
let p1 = new Producto("Whisky", "Jack Daniels", "Honey", "$4400 ARS", "/public/img/1.png")
let p2 = new Producto("Whisky", "Johnny Walker", "Black Label", "$4000 ARS", "/public/img/2.png")
let p3 = new Producto("Whisky", "Chivas Regal", "12y Blended Scotch", "$4500 ARS","/public/img/3.png")
let p4 = new Producto("Vino", "Finca Altamira", "Malbec 2015", "$6000 ARS", "/public/img/4.png")
let p5 = new Producto("Vino", "Los Haroldos", "Chardonnay 2013", "$5000 ARS", "/public/img/5.png")
let p6 = new Producto("Vino", "Cavit", "Cabernet Sauvignon", "$1700 ARS", "/public/img/6.png")
let p7 = new Producto("Vino", "Henri Lurton", "Sauvignon", "$3200 ARS", "/public/img/7.png")
let p8 = new Producto("Cerveza", "Andes Origen 1L", "Roja", "$170 ARS", "/public/img/8.png")
let p9 = new Producto("Cerveza", "Corona 330ml", "Rubia", "$150 ARS", "/public/img/9.png")
let p10 = new Producto("Cerveza", "Club Colombia 330ml", "Negra", "$670 ARS", "/public/img/10.png")

//Lista de productos
let productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]

for(let i = 0; i < productos.length; i++){
    let producto = productos[i]

    //Nombre del producto
    let parrafo = document.createElement("p")
    parrafo.innerText = productos[i].marca
    parrafo.className = "descripcion"
    let contenedor = document.createElement("div")
    contenedor.className = "productos"    

    let container = document.getElementById("items")
    container.appendChild(contenedor)
    contenedor.appendChild(parrafo)    
    
    //Variedad del producto
    let variedad = document.createElement("p")
    variedad.innerText = productos[i].variedad
    variedad.className = "descripcion"
    contenedor.appendChild(variedad) 
    
    //Imagen del producto
    let img = document.createElement("img")
    img.src = productos[i].img
    img.className = "imagenProducto"
    contenedor.appendChild(img)    
    
    //Precio del producto
    let precio = document.createElement("p")
    precio.innerText = productos[i].precio
    precio.className = "precio"
    contenedor.appendChild(precio) 

    //Boton añadir al carrito
    let boton = document.createElement("button")
    boton.innerText = "Añadir al carrito"
    boton.className = "addToCart"
    contenedor.appendChild(boton)   
}

