// 10. Crea un objeto que almacene los datos de una persona 
// (nombre, apellidos, edad, dirección, ciudad, país... y lo que quieras).
// Crea una función que saque por consola el nombre completo 
// (nombre y apellidos) de la persona a modo de string.

let persona={
    "nombre":"Pedro",
    "apellidos":"Garcia Ramos", 
    "edad":50, 
    "direccion":"Calle Madrid", 
    "ciudad":"Madrid", 
    "pais":"España"
};
let nombreCompleto='';

const CrearNombreCompleto=(persona)=>{
    nombreCompleto=nombreCompleto+persona["nombre"]+" ";
    nombreCompleto=nombreCompleto+persona["apellidos"];
    console.log(nombreCompleto);
}
CrearNombreCompleto(persona);
