const convertButton = document.querySelector(".convert-button")                   // 1- botão mapeado pra conversão
const currencySelect = document.querySelector(".currency-select-conversor")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value        // 3- mapear o input e pegar apenas o value dele ou seja o valor digitado para conversão 
    const valorPraConverter = document.querySelector(".valor-digitado")                    // 5 - valor em real 
    const valorConvertidor = document.querySelector(".valor-conversor")                // 6 - outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.7

    if(currencySelect.value == "dolar"){    // Se o select estiver selecionado o valor de dolar, execute aqui
        valorConvertidor.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){     // Se o select estiver selecionado o valor de euro, execute aqui
        valorConvertidor.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){    // Se o select estiver selecionado o valor de dolar, execute aqui
        valorConvertidor.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }
    
    valorPraConverter.innerHTML = new Intl.NumberFormat("pt-BR", {                  // 7 - uma ferramenta para formatar os números em sua respectiva moeda
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".img-conversor")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    convertValues()

}



currencySelect.addEventListener("change",changeCurrency)                          // 8 - adicionando o evento de troca de imagem e texto das moedas
convertButton.addEventListener("click",convertValues)                            // 2- ouvindo o botão ao ser clicado e chamar á função convertValues