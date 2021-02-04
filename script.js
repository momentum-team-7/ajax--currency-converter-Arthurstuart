const container = document.querySelector(".container")
const currencyRates = "https://api.exchangeratesapi.io/latest?base=${baseCurrency}"

fetch(currencyRates)
.then(response => response.json())
.then(data => {
console.log('Rates working?' currencyRates)
})



const initialCurrency = document.querySelector('#input')
const finalCurrency = document.querySelector('#output')

const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

for (let currency of currencies) {
currenc 
}
