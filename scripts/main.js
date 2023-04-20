alert ("BIENVENIDO, ESTA PÁGINA AYUDA A CALCULAR UN RESUMEN DE LOS GASTOS DE UNA SEMANA");

alert("ES NECESARIO INGRESAR LOS DATOS QUE SE TE PIDEN PARA REALIZAR LA OPERACIÓN");

//CAPTURANDO NOMBRE Y APELLIDOS

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

while (true)
{
    var capital = parseFloat(prompt("¿CUÁL ES TU CAPITAL"));
    
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



console.log("Ingresaremos la lista de gastos");

let suma= 0;


    for (let i = 1 ; i <= 7; i++)
        {
            let gasto = parseFloat(prompt("INGRESA GASTO DEL DÍA "+ i));
            suma = suma + gasto;
        }

        total= capital - suma; 

        console.log("Mostrando resultados");

        alert (nombre.toUpperCase() + " " + "\n" + "INICIASTE LA SEMANA CON: $"+ capital + "\n" + "EN TOTAL HAS GASTADO: $" + suma + "\n" + "TE QUEDAN: $" + total);


