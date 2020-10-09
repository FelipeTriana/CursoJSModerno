// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');
   



// JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ; al final  no es obligatorio salvo que tengas 2 líneas de código en una misma.
// ejemplo

console.log('Hola')
console.log('Mundo')

// va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ; 
console.log('Hola'); console.log('Mundo');


// Obteniendo ayuda con ESLint para revisar errores de código.

// crear el archivo .eslintrc.json

// {
//     "parserOptions" : {
//         "ecmaVersion": 6
//     },
//     "rules" : {
//         "semi": ["error", "always"] // Muestra errores de código o también errores de código
//     }
// }