class Producto {
    constructor(nombre, marca, precio, img){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.img = img


    }
}

//Productos
let p1 = new Producto("Whisky", "Jack Daniels Honey", "$4400", "/E-Commer_Licores/public/img/1.png")
let p2 = new Producto("Whisky", "Johnny Walker Black Label", "$4000", "/E-Commer_Licores/public/img/2.png")
let p3 = new Producto("Whisky", "Chivas Regal 12y Blended Scotch", "$4500","/E-Commer_Licores/public/img/3.png")
let p4 = new Producto("Vino", "Finca Altamira Malbec 2015", "$6000", "/E-Commer_Licores/public/img/4.png")
let p5 = new Producto("Vino", "Los Haroldos Chardonnay 2013", "$5000", "/E-Commer_Licores/public/img/5.png")
let p6 = new Producto("Vino", "Cavit Cabernet Sauvignon", "$1700", "/E-Commer_Licores/public/img/6.png")
let p7 = new Producto("Vino", "Henri Lurton Sauvignon", "$3200", "/E-Commer_Licores/public/img/7.png")
let p8 = new Producto("Cerveza", "Andes Origen 1L Roja", "$170", "/E-Commer_Licores/public/img/8.png")
let p9 = new Producto("Cerveza", "Corona 330ml Rubia", "$150", "/E-Commer_Licores/public/img/9.png")
let p10 = new Producto("Cerveza", "Club Colombia 330ml Negra", "$670", "/E-Commer_Licores/public/img/10.png")

//Lista de productos
let productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10]
productos.className = 'PP'

for(let i = 0; i < productos.length; i++){
    let producto = productos[i]


    //Nombre del producto
    let parrafo = document.createElement("p")
    parrafo.innerText = productos[i].marca
    parrafo.className = "nombre"
    let contenedor = document.createElement("div")
    contenedor.className = "productos"
    if(producto.nombre === "Whisky"){
        contenedor.setAttribute('category', 'Whisky')
    }else if(producto.nombre === "Cerveza"){
        contenedor.setAttribute('category', 'Cervezas')
    }else if(producto.nombre === "Vino"){
        contenedor.setAttribute('category', 'Vinos')
    }    

    let container = document.getElementById("items")
    container.appendChild(contenedor)
    contenedor.appendChild(parrafo)    
    
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



//Buscador 



// const inputSearch = document.querySelector('#inputSearch')
// const buscarButton = document.querySelector('#buscarButton')
// const resultado = document.querySelector('#resultado')

// const filtrar = ()=>{
//     resultado.innerHTML = '';

//     const texto = inputSearch.value.toLowerCase();
    
//     for(producto of productos){
//         let nombre = producto.marca.toLowerCase();
//         let tipo = producto.nombre.toLowerCase();
//         if(nombre.indexOf(texto) !== -1){
//             resultado.innerHTML += `
//             <li>${producto.marca} - Valor: ${producto.precio}</li>
//             `
//         }
//         if(tipo.indexOf(texto) !== -1){
//             resultado.innerHTML += `
//             <li>${producto.nombre} - Marca: ${producto.marca} - Precio: ${producto.precio}</li>
//             `
//         }
//     }  
    
//     if(resultado.innerHTML === ''){
//         resultado.innerHTML += `
//             <li>Producto no encontrado</li>
//             `
//     }
// }

// buscarButton.addEventListener('click', filtrar)




