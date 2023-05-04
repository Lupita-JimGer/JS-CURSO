alert ("BIENVENIDO, ESTA PÁGINA AYUDA A CALCULAR UN RESUMEN DE LOS GASTOS DE UNA SEMANA");

alert("ES NECESARIO INGRESAR LOS DATOS QUE SE TE PIDEN PARA REALIZAR LA OPERACIÓN");

//CAPTURANDO NOMBRE

console.log("Ingresaremos Nombre");

let nombre;

function validarNombre() 
{
    while(true)
    {
        nombre= prompt("INGRESA TU NOMBRE:");
        if(nombre != null && nombre != '')
        {
            break;
        }
        else
        {
            alert("AÚN NO INGRESAS TU NOMBRE");
            continue;
        }
    }
    
}

validarNombre();

//INGRESANDO CAPITAL

console.log("Ingresando Capital");

let capital = 0;

while (true)
{
    capital = parseFloat(prompt("¿CUÁL ES EL PRESUPUESTO INICIAL DE ESTA SEMANA?"));
    
    if (!isNaN(capital) && capital != null && capital != " ")
    {
        break;
    }
    else
    {
        alert("¡AÚN NO INGRESAS TU CAPITAL!");
        continue;
    }
}
// INGRESANDO GASTOS
 class gastos
 {
    constructor(nombreGasto,cantidad)
    {
        this.nombreGasto= nombreGasto.toUpperCase();
        this.cantidad = parseFloat(cantidad);
        this.noGasto = false;
    }
 }

 let misGastos = [];

 let respuesta = "SI";

console.log("Ingresaremos la lista de gastos");


do {
  let nombreGasto = prompt("INGRESA EL NOMBRE O RAZÓN DEL GASTO");
  let cantidad = prompt("MONTO DEL GASTO");
  const unGasto = new gastos(nombreGasto, cantidad);
  misGastos.push(unGasto);
  respuesta = prompt("¿INGRESARÁS MAS GASTOS? SI/NO");
} while (respuesta.toUpperCase() !== "NO");


let suma = 0;
for (const unGasto of misGastos) {
  suma = suma + unGasto.cantidad;
}
    let total= capital - suma; 

    console.log("Mostrando resultados");

    alert (nombre.toUpperCase() + " " + "\n" + "INICIASTE LA SEMANA CON: $"+ capital + "\n" + "EN TOTAL HAS GASTADO: $" + suma + "\n" + "TE QUEDAN: $" + total);


