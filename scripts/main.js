alert ("BIENVENIDO, ESTA PÁGINA AYUDA A CALCULAR UN RESUMEN DE LOS GASTOS DE UNA SEMANA");

alert("ES NECESARIO INGRESAR LOS DATOS QUE SE TE PIDEN PARA REALIZAR LA OPERACIÓN");

//CAPTURANDO NOMBRE Y APELLIDOS

console.log("Ingresaremos datos personales");
let nombre = "";
let validar = false;


function pedirNombre() 
{
    nombre= prompt("INGRESA TU NOMBRE:");
    
    while(validar == false)
    {
        if(!nombre)
        {
        alert("NO HAS INGRESADO TU NOMBRE");
        pedirNombre();
        validar = false;
        }
        else
        {
            validar = true;
        }
    }
    
}

pedirNombre();

// INGRESANDO GASTOS
if (validar == true)
{
console.log("Ingresaremos la lista de gastos");
let dias = parseInt(prompt("¿CUÁNTOS DÍAS VAS A CALCULAR?"));
let suma= 0;


    for (let i = 1 ; i <= dias; i++)
        {
            let gasto = parseFloat(prompt("INGRESA GASTO DEL DÍA "+ i));
            suma = suma + gasto;
        }
        console.log("Mostrando resultados");
        alert (nombre.toUpperCase() + " " + "\n" + "EN TOTAL HAS GASTADO: $" + suma);
}

