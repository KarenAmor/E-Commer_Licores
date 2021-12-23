if(localStorage.getItem("username")){
    const saludo = "SALIR"
    const button = document.getElementById("botonLogin")
    button.innerText = saludo

    button.onclick = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
    }    
}else{
    const p = document.getElementById("botonLogin")
    p.innerText = "INGRESA"
}


