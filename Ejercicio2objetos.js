// Ejercicio 2 objetos

const datos = {
    nombre: "Hugo",
    apellido: "Salazar",
    edad: 37,
    altura: 180,
    eresDesarrollador: true
}
const edad = datos.edad;
console.log(edad);

const newList = [
    { datos },
    {
        nombre: "Diego",
        apellido: "Velez",
        edad: 35,
        altura: 185,
        eresDesarrollador: false
    },
    {
        nombre: "Robert",
        apellido: "Echeverry",
        edad: 37,
        altura: 170,
        eresDesarrollador: false
    }
]
console.log(newList)

const sortedlist = newList.sort((a, b) => b.edad - a.edad)
console.log(sortedlist)