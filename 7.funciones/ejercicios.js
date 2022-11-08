
//hacer un programam que muestre el facctorial de un numero


function facctorial(n){
    var r=n;    

    if (n==0, n==1)
    return 1;
    while (n>1){
        n--;
        r=r*n;
    }
    return r;
}

let n=3

console.log(facctorial(n))




//hacer un programam que determine si un texto es palimdromo

function palimdromo(str){
    var res= /[^A-Za-z0-9]/g;
    var lowRegStr = str.toLowerCase().replace(res, '');
    var reverseStr= lowRegStr.split('').reverse().join('');
    return reverseStr == lowRegStr;
}
str="uwu"
console.log(palimdromo(str))


//hacer un programa que mueste los n primeros numeros de la serie de fibonacci

function fibonacci(numero){
    let numeros=[0,1];
    for (let i=2;i<numero; i++){
        numeros[i]=numeros[i-2] + numeros[i-1];
    }
return numeros;
}
console.log(fibonacci(10))
