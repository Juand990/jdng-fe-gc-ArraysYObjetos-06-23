// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
// y javascript2 =["Objetos", "Arrays", "ParseInt"], crea una función
// que determine si se repite algún elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

const repetidos = (javascript1, javascript2) => {
  for (let i = 0; i < javascript1.length; i++) {
    for (let j = 0; j < javascript2.length; j++) {
      if (javascript2[j] == javascript1[i]) {
        console.log("Se repite: "+javascript2[j]);
      }
    }
  }
};

repetidos(javascript1, javascript2);
