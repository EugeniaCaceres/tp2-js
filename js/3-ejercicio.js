/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

do {
  let texto = prompt("Ingresar texto:");
  document.write(texto, "-");
} while (confirm("¿Quiere continuar ingresar más texto?"));
