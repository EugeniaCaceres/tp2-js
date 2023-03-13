/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado. */

let texto = prompt("Ingresar Texto:");
let i = 0;
let bandera = true;

do {
  let letra = texto[i];
  switch (texto.toUpperCase()[i]) {
    case "A":
      bandera = false;
      break;
    case "E":
      bandera = false;
      break;
    case "I":
      bandera = false;
      break;
    case "O":
      bandera = false;
      break;
    case "U":
      bandera = false;
      break;
    default:
      i = i+1;
      break;
  }
} while (bandera === true);
document.write(i);
