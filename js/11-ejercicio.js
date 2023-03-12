/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre1 = (prompt("Ingresar nombre:"));
let edad1 = parseInt(prompt("Ingresar edades:"));

let nombre2 = (prompt("Ingresar nombre:"));
let edad2 = parseInt(prompt("Ingresar edades:"));

let nombre3 = (prompt("Ingresar nombre:"));
let edad3 = parseInt(prompt("Ingresar edades:"));

if (edad1 > edad2) {
  if (edad1 > edad3) {
    document.write(nombre1);
  } else {
    document.write(nombre3);
  }
} else {
  if (edad2 > edad3) {
    document.write(nombre2);
  } else {
    document.write(nombre3);
  }
}
