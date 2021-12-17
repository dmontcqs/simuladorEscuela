// SIMULADOR ESCUELA PORTUGUËS

alert("BIENVENIDO A SIMULADOR ESCUELA DE RUSO");
alert("Aquí encontrás cursos de todos los niveles del idioma");

// variables globales

let correo = "";

// OBJETO constructor, CONSTRUCTOR notation: template cuando hay muchos objetos parecidos. 

// function Curso(nivel, costo, descuento) {
//   this.nivel = nivel,
//   this.cost = costo,
//   this.descuento = descuento,
//     (this.calculaDescuento = function () {
//       return this.costo * this.descuento;
//     });
// }


// INSTANCIAS DE OBJETO curso que eran contruidas con objeto constructor. 
// const curso1 = new Curso("principiante", 1000, 0.9);
// const curso2 = new Curso("intermedio", 2000, 0.8);
// const curso3 = new Curso("avanzado", 3000, 0.7);


// ARRAY de objetos. 

const cursos = [
  {
    "index": 1,
    "nivel": "principiante",
    "costo": 1000,
    "descuento": .9,
  },
  {
    "index": 2,
    "nivel": "intermedio",
    "costo": 2000,
    "descuento": .8,
  },

]

cursos.push({
  "index": 3,
  "nivel": "avanzado",
  "costo": 3000,
  "descuento": .7,
})

// ESCRIBIR PRIMERO Funciones globales. i.e,  cálculos que en todos los casos se van a ejecutar.

//  FUNCIÓN QUE SOLO INFORMA
function informa(nivel, costo) {
  alert("su curso es " + nivel);
  alert("el precio de nivel " + nivel + " es " + costo + ".00");
  correo = prompt("escriba su correo para comenzar proceso de incripción");
}

//funcion que solo calcula descuento

function calculaDescuento(costo, descuento){
  return costo * descuento
}


// 2. FUNCIÓN PRINCIPAL QUE CALCULA PRECIO SEGÚN SI USUARIO ES ESTUDIANTE :

function calcularPrecioTotal(costo, descuento) {
  let esEstudiante = prompt("Eres estudiante? si / no");


  // PRECIO SI USUARIO ES ESTUDIANTE:*************

  if (esEstudiante == "si") {

    alert("tu pago TENDRÁ DESCUENTO :)"); 

    const precioConDescuento = calculaDescuento(costo, descuento); //AQUI SE QUEDA !!! TypeError: curso.calculaDescuento is not a function

    let pagoDescuento = prompt("ingrese la cantidad de " + precioConDescuento); 

    //validación de pago para estudiantes:

    while (pagoDescuento != precioConDescuento) {
      alert("revisa que la cantidad sea exacta");
      pagoDescuento = prompt(
        "ingresa cantidad de " + precioConDescuento + " correctamente"
      );
    }
    // mensaje  ÉXITO usuario con descuento: 

    alert("Felicidades. Se ha inscrito con éxito. Enviaremos un corre a: " + correo + " con los pasos a seguir.");
    
    // PRECIO SI USUARIO NO ES ESTUDIANTE:*********************

  } else if (esEstudiante == "no") {
    alert("su pago es de " + costo);

    let pagoNormal = prompt(
      "ingrese la cantidad de " + costo + " para pagar curso"
    );

    // validación de pago normal:
    while (pagoNormal != costo) {
      alert("Revisa que la cantidad sea exacta");
      pagoNormal = prompt("ingresa cantidad de " + costo + " correctamente");
    }

    // mensaje  ÉXITO usuario sin descuento: 
    alert("Felicidades. Se ha inscrito con éxito. Enviaremos un corre a: " + correo + " con los pasos a seguir.");
  }

  // SI USUARIO NO INGRESA VALOR VÁLIDO SI/NO
  else {
    alert("Valor inválido. Comienza de nuevo. :(");
  }
}

//inicio PROGRAMA

function compraUsuario() {
  let curso = prompt(
    "Escribe el nivel que quieres tomar: avanzado / intermedio / principiante "
  );

  // curso avanzado 

  if (curso == cursos[2].nivel) {
    informa(cursos[2].nivel, cursos[2].costo);

    calcularPrecioTotal(cursos[2].costo, cursos[2].descuento);

  //curso intermedio 

  } else if (curso == cursos[1].nivel) {
    informa(cursos[1].nivel, cursos[1].costo);
    calcularPrecioTotal(cursos[1].costo, cursos[1].descuento);
  
    //curso principiante 

  } else if (curso == cursos[0].nivel) {
    informa(cursos[0].nivel, cursos[0].costo);
    calcularPrecioTotal(cursos[0].costo, cursos[0].descuento);
  // otro
  } else {
    alert("sorry. no tenemos ese nivel");
    return;
  }
}

//LLAMADO PARA LA EJECUCIÓN DEL PROGRAMA:

compraUsuario();
