// 4. Crea una string, pásala a array y saca por consola la versión invertida 
// de la original. Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH

let palabra="hola";
console.log(palabra);
let palabraArray =[];

for (let i = 0; i < palabra.length; i++) {
    palabraArray[i]=palabra[i];    
}
console.log(palabraArray);
palabraArray=palabraArray.reverse();
console.log(palabraArray);

let palabraInversa='';
for (let i = 0; i < palabraArray.length; i++) {
    palabraInversa=palabraInversa+palabraArray[i];    
}
console.log(palabraInversa);
