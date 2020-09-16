let Carrito = document.getElementById("Carrito")
let Logica = document.getElementById("LogicaMatematica")
let Rompecabezas = document.getElementById("Rompecabezas")
let Infantil = document.getElementById("Infantil")

Carrito.addEventListener("click", ()=>{
    document.getElementById("CarritoContenido").classList.toggle("CarritoContenido-1")
})

Logica.addEventListener("click", ()=>{
    document.getElementById("Logica").classList.toggle("Logica-1")
    document.getElementById("InfantilDiv").classList.remove("InfantilDiv-1")
    document.getElementById("RompecabezaDiv").classList.remove("RompecabezasDiv-1")
})

Rompecabezas.addEventListener("click", ()=>{
    document.getElementById("RompecabezaDiv").classList.toggle("RompecabezasDiv-1")
    document.getElementById("Logica").classList.remove("Logica-1")
    document.getElementById("InfantilDiv").classList.remove("InfantilDiv-1")
})

Infantil.addEventListener("click", ()=>{
    document.getElementById("InfantilDiv").classList.toggle("InfantilDiv-1")
    document.getElementById("Logica").classList.remove("Logica-1")
    document.getElementById("RompecabezaDiv").classList.remove("RompecabezasDiv-1")
})