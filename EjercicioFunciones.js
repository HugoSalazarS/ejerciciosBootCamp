/// Ejercicio funciones

function siempre() {
    return true;
}

function as(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000)
        console.log("Hola, soy una promesa");  
    })  
} 
as()

function* paresId() {
    let id = 0;
    while (true) {
        id = id + 2; 
        yield id   
    }   
}

const gen = paresId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

