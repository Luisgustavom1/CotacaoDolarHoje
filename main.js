const dolar = document.querySelector('.dolar')

function dollarVariation(price){
    let minimum = 0
    if(price.USDBRL.high > minimum){
        const divDolar = document.querySelector(".preço.dolar")
        minimum = price.USDBRL.high
        divDolar.classList.toggle('up')
    } else {
        divDolar.classList.delete('up')
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
        dolar.innerHTML = `U$D${dolarFormation(data)}`  
    })
})
.catch(event => console.log(`Deu Erro: ${event.USDBRL.status}`))

