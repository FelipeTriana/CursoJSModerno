// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", 
    precio: 30,
    disponible: true, 
}


// const nombre = producto.nombre;

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura. Ademas de traer el valor crea la variable
const { nombre } = producto;


// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre)
console.log(precio)

// O puedes hacerlo mejor con 
//La mejor opcion!!
const {nombre, precio} = producto;