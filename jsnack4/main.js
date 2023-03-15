
 const invitedList = ["simone","francesca","luca","matteo","arianna"]

const insertName = prompt("Inserisci il tuo nome")
console.log(insertName)

for(let i = 0 ; i < invitedList.lenght ; i++ ){
    if(insertName == invitedList ) {
        console.log("ammesso")
    }  else  {
        console.log("non ammesso")
    }
}



/* while (i <= 10) {
   const insertNumber = Number(prompt("Inserisci un numero"))
    tot = tot + insertNumber 
    i++
}
console.log(tot) */