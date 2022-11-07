// EJEMPLOS 
/*---------------------------------------------------*/
//1.1 OPERADOR DE ASIGNACION
const z = (x = y); // O de forma equivalente: const z = x = y;

console.log(z); // Registra el valor de retorno de la asignación x = y.
console.log(x = y); // O registra el valor de retorno directamente.

/*---------------------------------------------------*/
// EJEMPLOS :
// 1.2 OPERADORES DE COMPARACIÓN :
var var1 = 3;
var var2 = 4;

/*---------------------------------------------------*/
//EJEMPLOS : 
// 1.3 OPERADORES ARITMÉTICOS 
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // Esto es true

/*---------------------------------------------------*/
//EJEMPLOS : 
// 1.4 OPERADORES DE BIT A BIT: 
// Antes:  1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
// Después:               1010 0000 0000 0000 0110 0000 0000 0001

/*---------------------------------------------------*/
//EJEMPLOS: 
// 1.5 OPERADORES LÓGICOS : 
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var a3 = false && true;     // f && t devuelve false
var a4 = false && (3 == 4); // f && f devuelve false
var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 =  true || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false

/*---------------------------------------------------*/
//EJEMPLOS: 
// 1.6 OPERADORES RELACIONALES: 
// Arreglos
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // devuelve true
3 in trees;        // devuelve true
6 in trees;        // devuelve false
'bay' in trees;    // devuelve false (debes especificar el número del índice,
                   // no el valor en ese índice)
'length' en trees; // devuelve true (la longitud es una propiedad de Array)

// objetos integrados
'PI' in Math;          // devuelve true
var myString = new String('coral');
'length' in myString;  // devuelve true

// Objetos personalizados
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true