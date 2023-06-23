// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], 
// elimina "DOM" del array. Añade en su lugar el elemento "Objetos". 
// Elimina el elemento "Arrays". Añade en su lugar el elemento "ArraysDifíciles".
// Haz una copia del array que solo incluya los últimos dos elementos. 
// Obtén el índice del elemento "Funciones".

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let indice=0;

indice=javascript1.indexOf("DOM");
javascript1[indice] ="Objetos";
indice=javascript1.indexOf("Arrays");
javascript1[indice] ="ArraysDifíciles";

console.log(javascript1);

let nuevaArray=[];
nuevaArray=javascript1.slice(-2);
console.log(nuevaArray);

console.log(javascript1.indexOf("Funciones"));






