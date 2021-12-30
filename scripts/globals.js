// ARRAY de objetos-cursos.

const cursos = [
    {
      index: 1,
      nombreNivel: "principiante",
      costo: 1000,
      descuento: 0.9,
      descuentoUsuario: "10%",
    },
    {
      index: 2,
      nombreNivel: "intermedio",
      costo: 2000,
      descuento: 0.8,
      descuentoUsuario: "20%",
    },
];
  
  cursos.push({
    index: 3,
    nombreNivel: "avanzado",
    costo: 3000,
    descuento: 0.9,
    descuentoUsuario: "10%",
  });

let cursosInscritos = []



// apuntamos elementos de html en variables mediante sus Id´s

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let nivelElegido = document.getElementById("nivel"); 
let respuestaEstudiante = document.getElementById("respuestaEstudiante");
let precioFinal = 0




//primero hacemos variable que apunte a div infoCursos.
let infoCursos = document.getElementById("infoCursos");
//hacemos un loop que recorra cada curso de array cursos
for (const nivel of cursos) {
  // aquí creamos un div para recibir la info de cada curso del array
  let cajaCurso = document.createElement("div");

  //aqui inyectamos codigo html en cada div que guardará info del curso.

  cajaCurso.innerHTML = `<h3> ${nivel.nombreNivel}</h3>
                      <p> precio: $ ${nivel.costo} .00 </p>
                      <p> Descuento estudiantil: ${nivel.descuentoUsuario}</p>
                      `;
  // aquí hacemos de cada caja, un hijo del id "infoCursos" creada en HTML
  infoCursos.appendChild(cajaCurso);

 
  

}

let botonImprime = document.getElementById("imprimeInfo");

botonImprime.addEventListener("click", renderizeInfo);


