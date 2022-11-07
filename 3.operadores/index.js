//Alvarojavier2020@outlook.es
//magalilaparamirez@gmail.com
/*_____________________________________________________________*/
//TIPOS DE OPERADORES DE JAVASCRIPT 

// 1.1 OPERADORES DE ASIGNACION 

// Es un operador que asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
// Los operadores de asignaciòn se devuelven el valor del objeto especificado por el operando izquierdo después de la asignación.
// El operador de asignaciòn simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo.

// // ASIGNACION: X = Y    Se interpreta que X = Y
// ASIGNACION DE ADICIÓN: x += y Se interpreta que x = x + y
// ASIGNACIÒN DE RESTA:  x -= y Se interpreta que x = x - y
//ASIGNACION DE MULTIPLICACIÓN: x *= y Se interpreta que x = x * y
// ASIGNACION DE DIVISIÓN: x /= y Se interpreta que : x = x / y
//ASIGNACION DE RESIDUO: x %= y Se interpreta que : x = x % y
//ASIGNACION DE EXPONENCIACIÓN: x **= y Se interpreta que: x = x ** y
// ASIGNACION DE DESPLAZAMIENTO A LA IZQUIERDA: x <<= y Se interpreta que: x = x << y
// Asignación de desplazamiento a la derecha	x >>= y	x = x >> y
// Asignación de desplazamiento a la derecha sin signo	x >>>= y	x = x >>> y
// Asignación AND bit a bit	x &= y Se interpeta que: x = x & y
// Asignación XOR bit a bit	x ^= y Se interpeta que: x = x ^ y
// Asignación OR bit a bit	x |= y Se interpeta que: x = x | y
// Asignación AND lógico	x &&= y Se interpeta que: x && (x = y)
// Asignación OR lógico	x ||= y	x | Se interpreta que: | (x = y)
// Asignación de anulación lógica	x ??= y Se interpreta que: 	x ?? (x = y)
 
//CONCLUSIÓN: 
// El segundo operador siempre está sera definido por el primer operador, en otras palabras el primer operador asigna al segundo operador.

/*---------------------------------------------------*/
// 1.2 OPERADOR DE COMPARACIÓN:
// Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false).

// (OPERADOR) --- (DESCRIPCIÓN)                             --- (EJEMPLOS QUE DEVUELVEN TRUE)
// Igual (==) ---	Devuelve true si los operandos son iguales.
//No es igual (!=)	Devuelve true si los operandos no son iguales.	
//Estrictamente igual (===)	Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS.	3 === var1
//Desigualdad estricta (!==)	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	var1 !== "3" 3 !== '3'
//Mayor que (>)	Devuelve true si el operando izquierdo es mayor que el operando derecho.	var2 > var1 "12" > 2
//Mayor o igual que (>=)	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.	var2 >= var1 var1 >= 3
//Menor que (<)	Devuelve true si el operando izquierdo es menor que el operando derecho.	var1 < var2 "2" < 12
//Menor o igual (<=)	Devuelve true si el operando izquierdo es menor o igual que el operando derecho.	var1 <= var2 var2 <= 5

// CONCLUSIÓN :
// Ambos operadores se comparan dando como respuesta un resultado binario, dependiendo de la condicional.

/*---------------------------------------------------*/
//1.3 OPERADORES ARITMÉTICOS 
//Toman valores numéricos como sus operandos y devuelver un solo valor numérico.
// (+)
// (-)
// (*)
// (/)
 // CONCLUSIÓN : 
 // Ambos operadores se resuelven en función a la condicional dándo como respuesta un solo resultado.

 /*---------------------------------------------------*/
 // 1.4. OPERADORES DE BIT A BIT
 // Un operador bit a bit trata a sus operandos como un conjunto de 32 bits (ceros y unos)
 
 // Los operadores de bit a bit ralizan sus operaciones en tales representaciones binarias pero devuelven sus valores standar númericos de javascript.
//OPERADORES DE BIT A BIT JAVASCRIPT.
 //  AND a nivel de bits	a & b	Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.
// OR a nivel de bits	a | b	Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros.
// XOR a nivel de bits	a ^ b	Devuelve un cero en cada posición de bit para la que los bits correspondientes son iguales. [Devuelve uno en cada posición de bit para la que los bits correspondientes son diferentes].
// NOT a nivel de bits	~ a	Invierte los bits de su operando.
// Desplazamiento a la izquierda	a << b	Desplaza a en representación binaria b bits hacia la izquierda, desplazándose en ceros desde la derecha.
// Desplazamiento a la derecha de propagación de signo	a >> b	Desplaza a en representación binaria b bits a la derecha, descartando los bits desplazados.
// Desplazamiento a la derecha de relleno cero	a >>> b	Desplaza a en representación binaria b bits hacia la derecha, descartando los bits desplazados y desplazándose en ceros desde la izquierda.  

/*---------------------------------------------------*/
//1.5. OPERADORES LÓGICOS: 
//Los operadores lógicos se utilizan normalmente con valores booleanos, cuando lo son, devuelven un valor booleano. 
// Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano.

// Los operadores se decriben a continuación: 
// AND Lógico (&&)	expr1 && expr2	Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
// OR lógico (||)	expr1 || expr2	Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
// NOT lógico (!)	!expr	Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.

/*---------------------------------------------------*/
//1.6. OPERADORES RELACIONES: 
// Un operador realacional compara sus operando y devuelve un valor booleando, basado en si la comparación es verdadera
// La sintaxis es: 
// propNameOrNumber in objectName
// donde propNameOrNumber es una expresión de cadena, numérica o de símbolo que representar un nombre de propiedad o índice de arreglo, y objectName es el nombre de un objeto.
