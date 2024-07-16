//EJEMPLOS DE USO DE VENTANAS EMERGENTES

function saludar() {
    console.log("Buenos días");
}

function noTocar() {
    alert("No toques allí");
    let titular = document.getElementById("encabezado");
    titular.innerHTML = "¡Tengo un titulo nuevo!";
}

function botonDeConfirmar() {
    if (confirm("¿Estás seguro de tu elección?")) {
        alert("Elección confirmada")
    }
    else {
        alert("Elección cancelada, vuelva a elegir")
    }
}

function saludoPersonalizado() {
    let nombre = prompt("¿Cuál es tu nombre?");
    alert("Buenos dias " + nombre);
}

//FUNCIONES DE CREAR Y AGREGAR ELEMENTOS HTML

function subirComentario() {
    //Primero: busco que puso el usuario en el input
    let comentarioDeUsuario = document.getElementById("comentario").value;
    //Segundo: creo un parrafo vacio
    let nuevoElemento = document.createElement("p");
    //Tercero: coloco el texto del usuario en el parrafo vacio
    nuevoElemento.innerHTML = comentarioDeUsuario;
    //Cuarto: busco la zona donde voy a agregar el parrafo
    let zona = document.getElementById("coments")
    //Quinto: agrego a la zona de comentario el parrafo con el comentario
    zona.appendChild(nuevoElemento)

    //Paso opcional: cambiar color al comentar
    //zona.style.backgroundColor = "blue";

}

function eliminarComentario(){
    //Elimina el primer elemento de la zona de comentarios
    
    //Primero: busca el elemento padre, del que quiere eliminar un elemento hijo
    let zona = document.getElementById("coments");
    //Segundo: busca el primer elemento hijo y lo guarda en una variable
    let elementoAEliminar = zona.children[0];
    //Tercero: quita el elemento hijo de dentro del elemento padre
    zona.removeChild(elementoAEliminar)

}

function cambiarColor(){
//
    let zona = document.getElementById("coments");

    zona.style.backgroundColor = "red";

}


//EJEMPLO DE OBJETO

let autoMio = {
    modelo: "Clio",
    año: 2016,
    kilometros: 50000,
    patente: "AJJ720",
    arrancar: function () {
        console.log("Brooom")
    },
}

//auto.arrancar();

//EJEMPLO DE AGREGAR ELEMENTOS AL FINAL DEL BODY
function publicar() {
    let nuevo = document.createElement("h2");
    nuevo.innerHTML = "Publicacion nueva";

    let zona = document.getElementById("zonaComentarios")

    zona.appendChild(nuevo);


}


//EJEMPLO DE REDIRECCIONAR CON EL OBJETO WINDOW
function iniciarSesion(){
    if (prompt("¿Contraseña?")==1234){
        window.location.href="https://google.com"
    }else{
        alert("Contraseña incorrecta")
    }
}




