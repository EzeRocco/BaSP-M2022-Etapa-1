console.log('-- EXERCISE 2: STRINGS');

// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('-Exercise 2.a:');

var estado = 'california';

var may = estado.toUpperCase();

console.log(may);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b:');

var objeto = 'banderines';

var medio_s = objeto.substring(0,5);

console.log(medio_s);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
//guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c:');

var palabra = 'abundancia'

var tres_letras = palabra.substring(7);

console.log(tres_letras);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
//y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var palabra2 = 'radioactivo';
//dejamos toda la palabra en mayuscula
var upper = palabra2.toUpperCase();
//elegimos la primera letra en mayuscula
var letra = upper.substring(0,1);
//volvemos a poner toda la palabra en minuscula
var lower = palabra2.toLocaleLowerCase();
//nos quedamos con la palabra menos su primera letra
var resto = lower.substring(1);
//sumamos la primera letra en mayuscula con el resto de la palabra en minuscula
var primer_may = letra + resto;

console.log(primer_may);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco 
//y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e:');
var frase= 'Hola mundo';

var posición= frase.indexOf(' ');
console.log('El espacio en la frase se encuentra en la posicion '+ posición );

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
//anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf,
//substring, toUpperCase, toLowerCase y el operador +).
console.log('-Exercise 2.f:');

var ciencia = 'inteligencia artificial';
//sacamos la posicion del espacio
var pos_espacio = ciencia.indexOf(' ');

var primer_pal = (ciencia.toUpperCase()).substring(0,1) + ciencia.substring(1,pos_espacio);

var segunda_pal = (ciencia.toUpperCase()).substring(pos_espacio + 1, pos_espacio + 2) + ciencia.substring(pos_espacio + 2);

var nueva_pal = primer_pal + ' ' + segunda_pal;

console.log(nueva_pal);


