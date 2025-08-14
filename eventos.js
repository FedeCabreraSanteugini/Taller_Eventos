
function saludar() {
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        alert("Por favor ingresa tu nombre");
    } else {
        alert("Hola " + nombre + "!");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById("contenedor-boton");

    div.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
});