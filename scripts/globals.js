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


