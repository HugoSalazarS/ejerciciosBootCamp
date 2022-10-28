// Ejercicio str

let nombre = "Hugo";
let apellido = "Salazar";

estudiante = nombre.concat(" ", apellido);

console.log(estudiante);

estudianteMayus = estudiante.toUpperCase();
estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMayus);
console.log(estudianteMinus);

nletras = estudiante.length;
console.log(nletras);

fletra = nombre.charAt(0);
console.log(fletra); 
uletra = apellido.charAt(6);
console.log(uletra);
nospace = estudiante.replace(/\s+/g, '');
console.log(nospace);

nmbool = estudiante.includes("Hugo");
console.log(nmbool);

