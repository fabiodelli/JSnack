const firstWord = prompt("inserisci una parola")
/* console.log(firstNumber) */

const secondWord = prompt("inserisci una parola")
/* console.log(secondNumber) */

if (firstWord.length > secondWord.length){
    console.log(`${secondWord}${firstWord} la prima parola è piu lunga`)}
    else if (secondWord.length > firstWord.length) {
        console.log(`${firstWord}${secondWord} la seconda parola è piu lunga`)
    }
    else {
        console.log(`le parole hanno la solita lunghezza`)
    }
