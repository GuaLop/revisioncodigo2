

//se le quita el signo # al form
var formulario = document.querySelector("form");
  
var n = formulario.elements[0]
var e = formulario.elements[1]
var na = formulario.elements[2]

//cambie la sintaxis de la funcion flecha
formulario.onsubmit =(ev) => {
//Agregué el default
  ev.preventDefault();

  var nombre = n.value
  var edad = e.value;
  //eliminé una variable y lo hice en una sola
  var nacionalidad = na.options[na.selectedIndex].text;
  //Coloqué está validación si se cumple validar campos, agragará a los invitados
  if (validarCampos(nombre, edad)){
    agregarInvitados(nombre, edad, nacionalidad);
  }
}
//Creé esta función y cambie la estructura del if
function validarCampos(nombre, edad) {
  if (nombre.length === 0) {
    n.classList.add("error");
    return false;
  }else if (!edad || edad < 18 || edad > 120) {
    e.classList.add("error");
    return false;
  }
  return true;
}

function agregarInvitados(nombre, edad, nacionalidad){
  var lista = document.getElementById("lista-de-invitados");

  //agregar elementos para el nombre del invitado

  lista.appendChild(crearElemento("Nombre", nombre));
  lista.appendChild(crearElemento("Edad", edad));
  lista.appendChild(crearElemento("Nacionalidad", nacionalidad));

  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  lista.appendChild(corteLinea)
  lista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove();
  }
}
// Anexé la variable elementoLista dentro de la función
function crearElemento(descripcion, valor) {
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); 

  var span = document.createElement("span")
  var input = document.createElement("input")
  var espacio = document.createElement("br")
  span.textContent = descripcion + ": "
  input.value = valor 
  elementoLista.appendChild(span);
  elementoLista.appendChild(input);
  elementoLista.appendChild(espacio);
  return elementoLista;
}
