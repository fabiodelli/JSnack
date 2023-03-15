
 const invitedList = ["simone","francesca","luca","matteo","arianna"]

const insertName = prompt("Inserisci il tuo nome")
console.log(insertName)

/* for(let i = 0 ; i < invitedList.length ; i++ ){
    const currentName = invitedList[i]

    if(insertName == currentName) {
        console.log("ammesso")
    }  
} */

let i = 0

while (i < invitedList.length) {
    const currentName = invitedList[i]

    if(insertName == currentName)
        console.log("ammesso")
    i++
}
console.log()