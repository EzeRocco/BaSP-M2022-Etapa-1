console.log('-- EXERCISE 6: FUNCTIONS');

//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
//el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a:');

function suma(par1, par2){
    return par1 + par2;
}

var resultado = suma(125,25);

console.log(resultado);

//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
// mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
 console.log('-Exercise 6.b:');
function suma2(numero1, numero2){
    if((typeof numero1 !== 'number') || (typeof numero2 !== 'number')){
        window.alert('One of the two values is not numeric');
        return NaN;     
    } else{
        return numero1 + numero2;
    } 
}

 var prueba = suma2(6,'6');

 console.log(prueba);

//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c:');

function validate_integer(valor){
    return Number.isInteger(valor);
}

console.log(validate_integer(5));
console.log(validate_integer(2.5));

//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
//decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
console.log('-Exercise 6.d:');
function suma3(a, b){
    if((typeof a !== 'number') || (typeof b !== 'number')){
        window.alert('One of the two values is not numeric');
        return NaN;
    } else if (validate_integer(a) !== true){
        window.alert('the first number is not integer');
        var new_a = Math.round(a);
        return new_a;
    } else if (validate_integer(b) !== true){
        window.alert('the second number is not integer');
        var new_b = Math.round(b);
        return new_b;
    } else{
        return a + b;
    } 
}

console.log(suma3(5,37.4));
console.log(suma3(12.8,4));
console.log(suma3(5,'16'));

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('-Exercise 6.d:');

function validate_integer_2(val1){
    if(validate_integer(val1) !== true) {
        console.log('the number ' + val1 +' is not integer, it will be rounded');
        val1 = Math.round(val1);
        return val1;
    } else{
        return val1;
    }
}


function suma4(valor1,valor2){
    if((typeof valor1 !== 'number') || (typeof valor2 !== 'number')){
        console.log('One of the two values is not numeric');
        return NaN;
    } else{
        valor1 = validate_integer_2(valor1);
        valor2 = validate_integer_2(valor2);
        return valor1 + valor2;
    }
}

console.log(suma4(25,100));
console.log(suma4(2.3,5));
console.log(suma4(25,150.8));