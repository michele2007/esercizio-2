function sanitize(san) {

    return san.trim();
}


function getRint(max) {
    
    
    return Math.floor(Math.random() * max);
    
}



let out = 1
let Tcounter = 5
let Botnum = getRint(1)
let max = 100


while (out === 1) {

let number = prompt("inserisci un numero: ")

    while (number === null)
    {

     number = prompt("inserisci un numero: ")
    }
    getRint(100)
    number = sanitize(number)
    number = parseInt(number)

    if (number === Botnum)
    {

        console.log("il numero è corretto,  hai vinto!")
        alert("il numero è corretto")
        out = 0
        
    }
    else
    {
        Tcounter  = Tcounter - 1 
        console.log("il numero è sbagliato, il numero generato era: ",Botnum," ti rimangono ",Tcounter," tentativi")
        alert("il numero è sbagliato, il numero generato era: " + Botnum+ " ti rimangono " + Tcounter + " tentativi")
        
    }

    if (Tcounter === 0)
        {
            out = 0
            console.log("hai terminato i tentativi")
            alert("hai terminato i tentativi!")
        }

}
