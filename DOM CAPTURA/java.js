// let obj= {
//     id: "hijo"

// }

// let body={
//     childofbody:{
//         div:{
//             p :{
//                 value : "hola"
//             }           
//         }
//     }
// }
// console.log(body.childofbody.div.p.value)
const  contenido=document.querySelector("#contenido")
contenido.textContent ="hola mundo"

const contenido2 = document.createElement("div")
contenido2.textContent= "rats and cats"
const subcontenido =document.createElement("div")
subcontenido.textContent = "cats and dogs"
contenido.appendChild(contenido2)
contenido2.appendChild(subcontenido)


