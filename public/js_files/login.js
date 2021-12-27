if(localStorage.getItem("username")){
    const saludo = "SALIR"
    const button = document.getElementById("botonLogin")
    button.innerText = saludo

    button.onclick = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        window.location.href= "index.html"
    }    
}else{
    const p = document.getElementById("botonLogin")
    p.innerText = "INGRESA"
}


