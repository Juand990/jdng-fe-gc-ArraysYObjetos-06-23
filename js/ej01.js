// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función
// que saque por consola la longitud del array. Crea otra función que obtenga un
// elemento aleatorio del array y lo saque por consola

let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const longitudArray = (letras) => {
  console.log("El Array es de " + letras.length + " tamaño.");
};

const RandomElementoArray = (letras) => {
  let random = Math.floor(Math.random() * letras.length);
  console.log("EL elemento aleatorio es: " + letras[random]);
};

longitudArray(letras);
RandomElementoArray(letras);
