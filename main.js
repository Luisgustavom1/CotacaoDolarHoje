const dolar = document.querySelector('.dolar')

const options = {
    method: "GET",
    mode: "cors",
    cache: "default"
}

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, options)
.then(response => {
    response.json()
    .then(data => {
        let dolard = Number(data.USDBRL.high).toFixed(2)
        dolar.innerHTML = `U$D${dolard}`
    })
})
.catch(event => console.log(`Deu Erro: ${event.USDBRL.status}`))

