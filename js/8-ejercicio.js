/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/
let numero_usuario = parseInt(prompt("Ingresar número:"));

for (let i = 1; i <= numero_usuario && numero_usuario <= 50; i = i + 1) {
  for (
    let indice_interior = 1;
    indice_interior <= i;
    indice_interior = indice_interior + 1
  ) {
    let texto = indice_interior.toString();
    document.write(texto);
  }
  document.write("<br/>");
}
