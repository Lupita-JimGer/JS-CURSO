alert ("BIENVENIDO, ESTA PÁGINA AYUDA A CALCULAR UN RESUMEN DE LOS GASTOS DE UNA SEMANA");

alert("ES NECESARIO INGRESAR LOS DATOS QUE SE TE PIDEN PARA REALIZAR LA OPERACIÓN");

//CAPTURANDO NOMBRE Y APELLIDOS
console.log("Ingresaremos datos personales");

let nombre= prompt("INGRESA TU NOMBRE:");
const nombre_vacio = "";

if (nombre == nombre_vacio)
{
    alert("ES NECESARIO INGRESAR TU NOMBRE");
}

let primerApellido= prompt("INGRESA TU PRIMER APELLIDO");
const primerApellido_vacio= "";

if (primerApellido == primerApellido_vacio)
{
     alert ("ES NECESARIO INGRESAR TU PRIMER APELLIDO");
}


let segundoApellido= prompt("INGRESA TU SEGUNDO APELLIDO");
const segundoApellido_vacio="";

if (segundoApellido == segundoApellido_vacio)
{
    alert("ES NECESARIO INGRESAR TU SEGUNDO APELLIDO");
}

// INGRESANDO GASTOS

console.log("Ingresaremos la lista de gastos");

let gasto1 =parseFloat(prompt("INGRESA GASTO DEL DÍA LUNES"));
let gasto2 =parseFloat(prompt("INGRESA GASTO DEL DÍA MARTES"));
let gasto3 =parseFloat(prompt("INGRESA GASTO DEL DÍA MIÉRCOLES"));
let gasto4 =parseFloat(prompt("INGRESA GASTO DEL DÍA JUEVES"));
let gasto5 =parseFloat(prompt("INGRESA GASTO DEL DÍA VIERNES"));
let gasto6 =parseFloat(prompt("INGRESA GASTO DEL DÍA SÁBADO"));
let gasto7 =parseFloat(prompt("INGRESA GASTO DEL DÍA DOMINGO"));

//SE SUMARAN LOS GASTOS
let suma = gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6 + gasto7;



alert(nombre.toUpperCase() +" "+ primerApellido.toUpperCase() + " " + segundoApellido.toUpperCase()+ "\n" + "EN TOTAL HAS GASTADO: " + suma );
