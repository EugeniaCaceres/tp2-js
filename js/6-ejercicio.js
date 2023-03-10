/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:

1
22
333
4444
55555
666666
…….
*/

for (let num = 1; num <= 30; num = num + 1) {
  let texto = num.toString();
  document.write(texto.repeat(num), "<br/>");
}
