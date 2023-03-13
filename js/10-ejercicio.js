/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math */

let filas = parseInt(prompt("Ingresar N° de filas:"));
let columnas = parseInt(prompt("Ingresar N° de columnas:"));

document.write("<table> <tbody>");

for (let ifilas = 0; ifilas <= filas; ifilas = ifilas + 1) {
  document.write("<tr>");
  for (let icelda = 0; icelda <= columnas; icelda = icelda + 1) {
    document.write("<td> </td>");
  }
  document.write("</tr>");
}
document.write("</tbody> </table>");
