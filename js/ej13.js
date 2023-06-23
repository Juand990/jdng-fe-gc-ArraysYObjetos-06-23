// 13. Crea un objeto que contenga una receta de cocina, con propiedades
// asignadas a su nombre, tiempo de preparación e ingredientes.
// Haz una función que saque por consola el nombre, el tiempo y una lista
// de los ingredientes.

let receta = {
  "nombre": "Tortilla de patatas",
  "tiempo": 45,
  "ingredientes": ["patatas", "huevo", "cebolla", "aceite", "sal"]
};

const mostrarReceta = (receta)=>{
    console.log("Nombre de la receta: "+receta.nombre);
    console.log("Tiempo de preparacion (min): "+receta.tiempo); 
       console.log("Total de ingredientes: ");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log(receta.ingredientes[i]);        
    }
}
mostrarReceta(receta);
