// SIMULADOR ESCUELA INGLÉS

// variables globales
// estos son los valores con los que trabajarán funciones.

let nivel3 = "avanzado";
let costo3 = 3000;

let nivel2 = "intermedio";
let costo2 = 2000;

let nivel1 = "principiante";
let costo1 = 1000;

let descuento = 0.8;
let correo = "";

// INICIO DE PROGRAMA:

alert("BIENVENIDO A SIMULADOR ESCUELA INGLÉS");
alert("Aquí encontrás cursos de todos los niveles del idioma");

// ESCRIBIR PRIMERO Funciones globales. i.e,  cálculos que en todos los casos se van a ejecutar.

// 1. FUNCIÓN QUE SOLO INFORMA

function informaPrecioyNivel(nivel, costo) {
  //función informativa que tmb sete el correo
  alert("su curso es " + nivel);
  alert("el precio de nivel " + nivel + " es " + costo + ".00");
  correo = prompt("escriba su correo para comenzar proceso de incripción");
}

// 2. FUNCIÓN QUE CALCULA PRECIO SEGÚN SI USUARIO ES ESTUDIANTE :

function calcularPrecioTotal(costo, descuento) {
  let esEstudiante = prompt("Eres estudiante? si / no");

  // SI USUARIO ES ESTUDIANTE:
  if (esEstudiante == "si") {
    alert("tu costo será 20% menos :)");
    let descuentoCalculado = costo * descuento;

    let pagoDescuento = prompt("ingrese la cantidad de " + descuentoCalculado);

    //validación de pago para estudiantes:

    while (pagoDescuento != descuentoCalculado) {
      alert("revisa que la cantidad sea exacta");
      pagoDescuento = prompt(
        "ingresa cantidad de " + descuentoCalculado + " correctamente"
      );
    }
    alert("Felicidades. Se ha inscrito con éxito");
    alert("Enviaremos un corre a: " + correo + " con tu recibo.");

    // SI USUARIO NO ES ESTUDIANTE:
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
    alert("Felicidades. Se ha inscrito con éxito");
    alert("Enviaremos un corre a: " + correo + " con tu recibo.");
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

  if (curso == nivel3) {
    //llamados a funciones globales:

    informaPrecioyNivel(nivel3, costo3);
    calcularPrecioTotal(costo3, descuento);
  } else if (curso == nivel2) {
    informaPrecioyNivel(nivel2, costo2);
    calcularPrecioTotal(costo2, descuento);
  } else if (curso == nivel1) {
    informaPrecioyNivel(nivel1, costo1);
    calcularPrecioTotal(costo1, descuento);
  } else {
    alert("sorry. no tenemos ese nivel");
    return;
  }
}

//LLAMADO PARA LA EJECUCIÓN DEL PROGRAMA:

compraUsuario();



//PARA ACTUALIZAR EL REPOSITORIO  QUE SE TIENE EN FORMA LOCAL : 

//git add . 
// git commit -m "actualización del proyecto"
//git remote add origin https://github.com/dmontcqs/simuladorCompras.git
// fatal renoto ya exisye 
// git branch -M main 
// git push -u origin main 
//username for github:
//contraseña: 
//comienza a comprimir....