// Ejercicio 3 Fechas

const hoy = new Date();
const nacimiento = new Date(1984, 10, 3);

const verifica = hoy.getTime() > nacimiento.getTime();

const mesnacimiento = nacimiento.getMonth();
const anyonacimiento = nacimiento.getFullYear();

console.log(nacimiento);
console.log(verifica);
console.log(mesnacimiento+1);
console.log(anyonacimiento);