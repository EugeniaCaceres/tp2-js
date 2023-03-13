/*  16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let texto = prompt("Ingresar Texto:");

for (let i = texto.length -1; 0 <= i; i = i - 1) {
  document.write(texto[i]);
}
