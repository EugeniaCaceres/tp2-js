/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numero_usuario = parseInt(prompt("Ingresar número:"));

// for (
//   let num = 1;
//   num <= numero_usuario && numero_usuario <= 50;
//   num = num + 1
// ) {
//   let texto = num.toString();
//   document.write(texto.repeat(num), "<br/>");
// }

for (
  let num = numero_usuario;
  1 <= numero_usuario && numero_usuario <= 50;
  num = num - 1
) {
  let texto = num.toString();
  document.write(texto.repeat(num), "<br/>");
}
