
const emptyArray=[]

for(let i = 0 ; i < 6 ; i++ ){
    const insertNumber = Number(prompt("Inserisci un numero"))
    
    if(insertNumber % 2 !== 0){
        emptyArray.push(insertNumber)
    }
    console.log(emptyArray)
}
