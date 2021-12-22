// ARRAY de objetos-cursos.

const cursos = [
  {
    index: 1,
    nivel: "Principiante",
    costo: 1000,
    descuento: 0.9,
    descuentoUsuario: "10%",
  },
  {
    index: 2,
    nivel: "Intermedio",
    costo: 2000,
    descuento: 0.8,
    descuentoUsuario: "20%",
  },
];

cursos.push({
  index: 3,
  nivel: "Avanzado",
  costo: 3000,
  descuento: 0.7,
  descuentoUsuario: "10%",
});

// apuntamos elementos de html en variables mediante sus Id´s

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let curso = document.getElementById("curso");
let respuestaEstudiante = document.getElementById("respuestaEstudiante");
let dineroIngresado = document.getElementById("inputDinero");

// MOSTRAR INFO DE CURSOS MANIPULANDO DOM
//primero hacemos variable que apunte a div infoCursos.
let infoCursos = document.getElementById("infoCursos");
//hacemos un loop que recorra cada curso de array cursos
for (const curso of cursos) {
  // aquí creamos un div para recibir la info de cada curso del array
  let cajaCurso = document.createElement("div");

  //aqui inyectamos codigo html en cada div que guardará info del curso.

  cajaCurso.innerHTML = `<h3> ${curso.nivel}</h3>
                      <p> precio: $ ${curso.costo} .00 </p>
                      <p> Descuento estudiantil: ${curso.descuentoUsuario}</p>
                      `;
  // aquí hacemos de cada caja, un hijo del id "infoCursos" creada en HTML
  infoCursos.appendChild(cajaCurso);
}

let botonImprime = document.getElementById("imprimeInfo");

botonImprime.addEventListener("click", renderizeInfo);

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
    alert("ya te inscribiste");
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
  } else {alert("ya te inscribiste")}
}

// FLAG DE JS- contador.

// contador = 0;

// function mensajeInscripcion(){
//  if(contador == 0){
//   let contenedorMensaje = document.createElement("p");
//   contenedorMensaje.innerHTML = ` Te has inscrito exitosamente a tu curso de Ruso ${curso.value}`;
//   document.getElementById("botonInscripcion").appendChild(contenedorMensaje);
//   contador++
//  } else {alert("etas inscrito")}

// }

//función prueba

// function mensajeInscripcion(){
//   console.log("funcionando")
// }

// // funcion prueba
// function my_button_click_handler()
// {
// alert('Button Clcked');
// }
