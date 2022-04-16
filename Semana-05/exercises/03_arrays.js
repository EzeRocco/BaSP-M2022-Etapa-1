console.log('-- EXERCISE 3: ARRAYS');

//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
// "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a:');

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[5]);
console.log(meses[11]);

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b:');

var meses_1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses_1.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c:');

var meses_2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses_2.unshift("start"),meses_2.push("end");

console.log(meses_2);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d:');

meses_2.shift(),meses_2.pop();

console.log(meses_2);

//Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e:');

meses.reverse();

console.log(meses);

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-Exercise 3.f:');

var meses_3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var meses_str= meses_3.join(" - ");

console.log(meses_str);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g:');

var meses_4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mes = meses_4.slice(4,11);

console.log(mes);





