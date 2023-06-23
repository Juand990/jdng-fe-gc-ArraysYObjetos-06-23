// 6. Crea un array con al menos 10 números y una función que los divida
//en otros dos arrays: uno para pares y otro para impares.
//A continuación, saca por consola ambos arrays resultantes concatenados.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = [];
let impar = [];
let concatenados = [];

const separar = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      pares.push(numeros[i]);
    } else {
      impar.push(numeros[i]);
    }
  }
  concatenados = pares.concat(impar);
  return concatenados;
};

console.log(separar(numeros));
