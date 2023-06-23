// 11. Utiliza el objeto del ejercicio anterior y mediante
// desestructuración accede únicamente a tres de esas propiedades

let persona={
  "nombre":"Pedro",
  "apellidos":"Garcia Ramos", 
  "edad":50, 
  "direccion":"Calle Madrid", 
  "ciudad":"Madrid", 
  "pais":"España"
};

let [nombre, apellidos, edad, direccion, ciudad, pais] = [
  "Pedro",
  "Garcia Ramos",
  50,
  "Calle Madrid",
  "Madrid",
  "España",
];
console.log(nombre, apellidos, edad);
console.log(apellidos, direccion, pais);