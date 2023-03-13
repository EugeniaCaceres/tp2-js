/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

let texto = prompt("Ingresar texto:");

let contador = 0;
for (let i = 0; i < texto.length; i = i + 1) {
  switch (texto.toUpperCase()[i]) {
    case "A":
      contador = contador + 1;
      break;
    case "E":
      contador = contador + 1;
      break;
    case "I":
      contador = contador + 1;
      break;
    case "O":
      contador = contador + 1;
      break;
    case "U":
      contador = contador + 1;
      break;
    default:
      break;
  }
}
document.write(contador);
