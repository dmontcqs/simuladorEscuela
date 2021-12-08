// SIMULADOR ESCUELA INGLÉS

alert("BIENVENIDO A SIMULADOR ESCUELA INGLÉS");
alert("Aquí encontrás cursos de todos los niveles del idioma");

// variables globales

let correo = "";

// constructor notation: template cuando hay muchos objetos parecidos
function Curso(nivel, costo, descuento) {
  (this.nivel = nivel),
    (this.costo = costo),
    (this.descuento = descuento),
    (this.calculaDescuento = function () {
      return this.costo * this.descuento;
    });
}

// cursos disponibles: instancias del objeto Curso:

const curso1 = new Curso("principiante", 1000, 0.9);
const curso2 = new Curso("intermedio", 2000, 0.8);
const curso3 = new Curso("avanzado", 3000, 0.7);

// INICIO DE PROGRAMA:

// ESCRIBIR PRIMERO Funciones globales. i.e,  cálculos que en todos los casos se van a ejecutar.

                      // 1. FUNCIÓN QUE SOLO INFORMA
function informa(nivel, costo) {
  alert("su curso es " + nivel);
  alert("el precio de nivel " + nivel + " es " + costo + ".00");
  correo = prompt("escriba su correo para comenzar proceso de incripción");
}

                      // 2. FUNCIÓN QUE CALCULA PRECIO SEGÚN SI USUARIO ES ESTUDIANTE :

function calcularPrecioTotal(curso, costo) {
  let esEstudiante = prompt("Eres estudiante? si / no");


  // PRECIO SI USUARIO ES ESTUDIANTE:******************************************************************

  if (esEstudiante == "si") {
    alert("tu pago TENDRÁ DESCUENTO :)");

    const precioConDescuento = curso.calculaDescuento();

    let pagoDescuento = prompt("ingrese la cantidad de " + precioConDescuento);

    //validación de pago para estudiantes:

    while (pagoDescuento != precioConDescuento) {
      alert("revisa que la cantidad sea exacta");
      pagoDescuento = prompt(
        "ingresa cantidad de " + precioConDescuento + " correctamente"
      );
    }
    // mensaje  ÉXITO usuario con descuento: 

    alert("Felicidades. Se ha inscrito con éxito. Enviaremos un corre a: " + correo + " con tu recibo.");
    
    // PRECIO SI USUARIO NO ES ESTUDIANTE:***************************************************************

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
    alert("Felicidades. Se ha inscrito con éxito. Enviaremos un corre a: " + correo + " con tu recibo.");
  }

  // SI USUARIO NO INGRESA VALOR VÁLIDO SI/NO
  else {
    alert("Valor inválido. Comienza de nuevo. :(");
  }
}

//EJECUCIÓN DEL PROGRAMA

function compraUsuario() {
  let curso = prompt(
    "Escribe el nivel que quieres tomar: avanzado / intermedio / principiante "
  );

  if (curso == curso3.nivel) {
    informa(curso3.nivel, curso3.costo);
    calcularPrecioTotal(curso3, curso3.costo);
  } else if (curso == curso2.nivel) {
    informa(curso2.nivel, curso2.costo);
    calcularPrecioTotal(curso1, curso2.costo);
  } else if (curso == curso1.nivel) {
    informa(curso1.nivel, curso1.costo);
    calcularPrecioTotal(curso1, curso1.costo);
  } else {
    alert("sorry. no tenemos ese nivel");
    return;
  }
}

//LLAMADO PARA LA EJECUCIÓN DEL PROGRAMA:

compraUsuario();