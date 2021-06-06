const dolar = document.querySelector('.dolar')

function dollarVariation(price){
    let minimum = price.USDBRL.high
    const divDolar = document.querySelector(".preço.dolar")
    if(Number(price.USDBRL.high) > minimum){
        minimum = price.USDBRL.high
        divDolar.classList.toggle('up')
    } else {
        divDolar.classList.remove('up')
        divDolar.classList.toggle('down')
    }
}

function dolarFormation(price){
    dollarVariation(price)
    return Number(price.USDBRL.high).toFixed(2)
}

const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
}

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, options)
.then(response => {
    response.json()
    .then(data => {
        console.log(data)
        dolar.innerHTML = `U$D${dolarFormation(data)}`  
    })
})
.catch(event => console.log(`Deu Erro: ${event.USDBRL.status}`))

