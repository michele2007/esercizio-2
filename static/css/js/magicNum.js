function getRint(min = 1, max = 100) {
    let number = Math.random();
    number = number * (max - min + 1) + min;
    return Math.floor(number);
}


function sanitize(Var) {
    let san;
    if (!isNaN(Var)) {
        san = parseInt(Var);
    }
    return san;
}

function callback(event) {
    console.log(event);
    let numberInsert = document.querySelector("#guess").value;
    let num = sanitize(numberInsert);
    console.log(numberInsert);

    if (isNaN(num) || num > 100 || num < 1) {
        document.querySelector("#feedback").innerHTML = `Il numero <strong>${num}</strong> non è valido.`;
        message.innerHTML =  `Inserisci un numero valido.`
    } else if (tentativi != 5 && num != number) {
        if (num > number) {
            document.querySelector("#feedback").innerHTML = `Il numero <strong>${num}</strong> è troppo alto.`;
            tentativi = tentativi + 1;
            flag = flag-1;
            message.innerHTML =  `Ti rimangono <strong>${flag}</strong> tentativi`
        } else if (num < number) {
            document.querySelector("#feedback").innerHTML =`Il numero <strong>${num}</strong> è troppo basso.`;
            flag = flag-1;
            tentativi = tentativi + 1;
            message.innerHTML =  `Ti rimangono <strong>${flag}</strong> tentativi`
        } else if (num === number) {
            document.querySelector("#feedback").innerHTML = "Hai vinto!";
            message.innerHTML =  `Il numero era effetivamente <strong>${number}</strong>!`
            button.disabled = true
        }
    }

    if (tentativi === 5) {
        document.querySelector("#feedback").innerHTML = "Hai terminato i tentativi";
        message.innerHTML =  `Il numero effetivo era <strong>${number}</strong>!`
        button.disabled = true
    }


}

// Initialize variables
let message =  document.querySelector("#message1");
let flag = 5
flag = sanitize(flag)
let button = document.querySelector("[type=button]");
button.addEventListener("click", callback);
let tentativi = 0;
let number = getRint(1, 100);
let max = 100;

