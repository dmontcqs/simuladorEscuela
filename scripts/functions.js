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
                                  <p><strong>Producto:</strong>Curso de Ruso ${curso.value}</p>
                                  <p><strong>Aplica descuento:</strong> ${respuestaEstudiante.value}</p>
                                  <div>
                                  <br/>
                                  <label for="">Ingresa dinero</label>
                                  </div>
                                  <br />
                                <input type="number" required="required" id="inputDinero" />
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
  // creo nodo donde va ir información

  if (contadorB == 0) {
    let contenedorMensaje = document.createElement("p");
    // al nodo le inyecto texto con info de JS
    contenedorMensaje.innerHTML = ` Te has inscrito exitosamente a tu curso de Ruso ${curso.value}`;
    // al nodo lo hago hijo de div declarado en HTML
    document
      .getElementById("DivBotonInscripcion")
      .appendChild(contenedorMensaje);
    contadorB++;
  } else {
    alert("Te has inscrito exitosamente");
  }
}

//checar valoraxción 

if (dineroIngresado.value == curso.costo){
    alert("muy bien")
} else {alert("checa dinero")}
