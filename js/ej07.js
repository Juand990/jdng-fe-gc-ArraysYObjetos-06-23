// 7. Utilizando el array del ejercicio anterior, crea una función que saque 
// por consola únicamente los números mayores que 5

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mayorACinco = (numeros)=>{
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]>5) {
            console.log(numeros[i]);
        }        
    }
}

mayorACinco(numeros);