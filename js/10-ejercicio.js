/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math */

let filas = parseInt(prompt("Ingrese N° de filas:"));
let columnas = (prompt("Ingrese N° de columnas:"));
let numeros = filas * columnas

document.write('<table><tbody>');

for (let ifilas = 1; ifilas <= filas; ifilas = ifilas + 1) {
  document.write('<tr>');
  for (let icelda = 1; icelda <= columnas; icelda = icelda + 1) {
    document.write('<td>', numeros ,  '</td>');
  }
  document.write('</tr>');
}
document.write('</tbody></table>');
