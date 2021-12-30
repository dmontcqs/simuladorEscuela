contadorA = 0; //contador de renderizeInfo
// función que imprime inputs de usuario
function renderizeInfo() {
  
  if (contadorA == 0) {
    //if para detener el renderizado

    //hacer contenedor para recibir los datos del usuario:
    let contenedorCurso = document.createElement("div");
    //Definimos el innerHTML del elemento con INTERPOLACIÓN:
    contenedorCurso.innerHTML = `
                                  <h2>DETALLE DE TU CURSO </h2>
                                  <p><strong>Nombre:</strong> ${nombre.value}</p>
                                  <p><strong>correo:</strong> ${correo.value}</p>
                                  <p><strong>Producto:</strong>Curso de Ruso ${nivelElegido.value}</p>
                                  <p><strong>Aplica descuento:</strong> ${respuestaEstudiante.value}</p>
                                  <p><strong>Precio:</strong> ${costoNivel()}</p>
                                  
                                  <div>
                                  
                                  <br/>
                                  <label for="">Ingresa dinero</label>
                                  </div>
                                  <br />
                                <input type="number" required="required" id="inputDineroFinal" />
                                <div id="DivBotonInscripcion">
                                <button type="button" id="btnInscripcion">Inscribete</button>
                                </div>`;
    //Agregamos el contenedor creado al elemento de HTML que queramos
    document.getElementById("divDetalleCompra").appendChild(contenedorCurso);

    let varBtnInscripcion = document.getElementById("btnInscripcion");
    varBtnInscripcion.addEventListener("click", mensajeInscripcion); // can't access property "addEventListener", varBotonInscripcion is null
    contadorA++;
  } else {
    alert("Está lista la información de tu curso");
  }
}

// BOTON INSCRIPCIÓN

contadorB = 0;

function mensajeInscripcion() {
  

let dineroInput = document.getElementById("inputDineroFinal");
let dineroIngresado = dineroInput.value
let dineroNumber = parseInt(dineroIngresado)
// creo nodo donde va ir información
let contenedorMensaje = document.createElement("p");

if (contadorB == 0) {
  if (dineroNumber !== precioFinal) {
      contenedorMensaje.innerHTML = ` Ingresa correctamente la cantidad de ${precioFinal}`;
      document
          .getElementById("DivBotonInscripcion")
          .appendChild(contenedorMensaje);

  } else {
      // al nodo le inyecto texto con info de JS
      contenedorMensaje.innerHTML = ` Te has inscrito exitosamente a tu curso de Ruso ${nivel.value}`;
      // al nodo lo hago hijo de div declarado en HTML
      document
        .getElementById("DivBotonInscripcion")
        .appendChild(contenedorMensaje);
        contadorB++;
        guardarCurso()
  } 
   
} else {
    alert("Ya te has inscrito exitosamente");
}

  
}


//checar valoraxción 


// checar nivel elegido en input y valorar el descuento para imprimir su precio final

function costoNivel () { 
  for (const nivel of cursos) {

    if (nivelElegido.value === nivel.nombreNivel) { 
      
       if (respuestaEstudiante.value == "no") {
        precioFinal += nivel.costo
        return precioFinal
       } else if (respuestaEstudiante.value == "si"){
         
        precioFinal += nivel.costo * nivel.descuento
        return precioFinal
       }
       
    } 
  }
}

function guardarCurso(){
let cursoPagado = {}
for (const curso of cursos) {
  if (nivelElegido.value === curso.nombreNivel) {
    cursoPagado = {
      alumno: nombre.value,
      correo: correo.value,
      nivel: nivelElegido.value,
      descuento: respuestaEstudiante.value,
      costoInicial: curso.costo,
      costoConDescuento: precioFinal,
    }
  }
} 


let guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaInscritos", JSON.stringify(cursoPagado));

let almacenados = JSON.parse(localStorage.getItem("listaInscritos"));
console.log(almacenados)

}



