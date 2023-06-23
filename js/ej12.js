// 12. Crea un array que contenga al menos tres objetos con las mismas
// propiedades (al menos tres) y distintos valores. Crea una función que
// saque por consola el valor de una de las propiedades para todos los
// objetos.

let personas = [
  {
    "nombre": "Pedro",
    "edad": 50,
    "ciudad": "Madrid",
  },
  {
    "nombre": "Ramos",
    "edad": 40,
    "ciudad": "Sevilla",
  },
  {
    "nombre": "Felipe",
    "edad": 30,
    "ciudad": "A Coruña",
  },
];

const mostrar = (personas) => {
    for (let i = 0; i < personas.length; i++) {
        console.log("Es de la ciudad "+personas[i].ciudad);
    }
};

mostrar(personas);
