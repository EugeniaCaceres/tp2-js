/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let acumulador = 0;

do {
  let num = parseInt(prompt("Ingrese número:"));
  acumulador = acumulador + num;
} while (confirm("¿Quiere ingresar más números?"));
document.write(acumulador);
