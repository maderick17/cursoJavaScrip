// ESTRUCTURA DESICIÓN:
 
// CONCEPTO:
// Una estructura de decisión permite que la ejecución de un algoritmo tome distintos caminos, que llevan a distintos resultados, 
// dependiendo de la condición o condiciones presentes en la estructura de decisión.


// tarea:
//hacer un programa que apartir de una variable edad determine si es mayor o menor.

var edad=15
if(edad>=18){
    console.log("eres mayor de edad")
}
else{ console.log("es menor de edad") 
}


//hacer un programa que almacene en una variable un password y evalue si el paswowrd es corecto, imprime un mensaje de bienvenida si es
//igual, y en mensaje error si no lo es.

let contraseña='MAYCOL'
let password='MAYCOl'

if(contraseña==password){
    console.log('bienvenido')
}else{
    console.log('error')
}
//hacer un programa que almacene dos dividendo y divisor numeros si su divisor es cero se debera mostrar un mensaje de error caso contrario
//imprimira el resultado de la división.

let dividendo = 20
let divisor = 0
if(divisor == 0){
    console.log('error')
}else{
    console.log(dividendo/divisor)
}


numeroMes=7
switch(numeroMes){
    case 1:
     console.log('enero')
     break
    case 2:
     console.log('febrero')
     break
    case 3:
     console.log('marzo')
     break
    default:
     console.log('error mes no encontrado')
}



numeroMes='2'
switch(numeroMes){
    case 'a':
     console.log('es una vocal')
     break
    default:
 console.log('no es una vocal')
}

// la estructura de desicion 
// seguira un camino distinto
// segun la condicion


vocal='vocal'
switch(vocal){
    case 'a': case 'e': case 'i': case 'o': case 'u':
     console.log('la letra ${vocal}, es una vocal')
     break
    default:
     console.log('no es una vocal')
}




vocal='vocal'
switch(vocal){
    case 'a': case 'e': case 'i': case 'o': case 'u':
     console.log('la letra ${vocal}, es una vocal')
     console.log('la letra ,',vocal,', es una vocal')
     console.log("la letra vocal, es una vocal")
     console.log('la letra ${vocal}, es una vocal')
     break
    default:
     console.log('no es una vocal')



    