// 14. Reutiliza la receta del ejercicio anterior y añádela a un array
// que contenga varias recetas similares, con las mismas propiedades.
// Utiliza también la función del ejercicio anterior y saca por consola
// todas las recetas de tu array.

let recetas = [
  {
    nombre: "Tortilla de patatas",
    tiempo: 45,
    ingredientes: ["patatas", "huevo", "cebolla", "aceite", "sal"],
  },
  {
    nombre: "Tarta",
    tiempo: 60,
    ingredientes: ["harina", "huevo", "mantequilla", "aceite", "azucar"],
  },
];

const mostrarRecetas = (recetas) => {
  for (let i = 0; i < recetas.length; i++) {
    console.log("Nombre de la receta: " + recetas[i].nombre);
    console.log("Tiempo de preparacion (min): " + recetas[i].tiempo);
    console.log("Total de ingredientes: ");
    for (let j = 0; j < recetas[i].ingredientes.length; j++) {
      console.log(recetas[i].ingredientes[j]);
    }
    console.log("--------------");
  }
};
mostrarRecetas(recetas);
