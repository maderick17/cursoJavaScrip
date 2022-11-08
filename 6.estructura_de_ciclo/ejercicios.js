//ejercicio 1
for(let inicial=2; inicial<=20; inicial+=2){
    console.log(inicial)

}
//ejercicio 3
for(inicial=1; inicial<=20; inicial++)

if (inicial%2==0){
    console.log(inicial)    
 }
else {
    console.log(inicial)
}

//ejercicio 4
let vocales="aeiou"
console.log(vocales.length)
console.log(vocales[0])
for (i=0;i<=4; i++){ 
 console.log(vocales[i])
}
//ejeericcio 5
let t="hola como estas como te llamas"
console.log(t.length)
let contador=0
for (let ti=0; ti<=t.length; ti++)   
    if (t[ti]=="a"){ 
    console.log(t[ti])
    contador+=1
}
console.log('tienes',contador )

//ejecicio 6
let e="como estas tu"
console.log(e.length)
let c=0
for (let z=0; z<=e.length; z++) 
    if (e[z]=="a"){
        c+=1
    }
    else if (e[z]=="e"){
        c+=1
    }
    else if (e[z]=="i"){
        c+=1
    }
    else if (e[z]=="o"){
        c+=1
    }
    else if (e[z]=="u"){
        c+=1
    }
    
    console.log(c)
//ejercicio 7
    let r="como estas tu"
console.log(e.length)
let cont=0
for (let z=0; z<=e.length; z++){
    switch(r[z]){
        case "a": case "e": case"i": case "o": case "u":
    cont+=1
}
}
    console.log(cont)
    




