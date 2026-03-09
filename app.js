
const exchangeRates = {
    "USD": 1.07,
    "JPY": 156.5,
    "GBP": 0.87
};

const fromEuroToDollar = (euroAmount) => {
    return euroAmount * exchangeRates["USD"]
};

const fromDollarToYen = (dollarAmount) => {
    let euro = dollarAmount / exchangeRates["USD"];
    return euro * exchangeRates ["JPY"]
};

const fromYenToPound = (yenAmount) => {
    let euro = yenAmount / exchangeRates ["JPY"];
    return euro * exchangeRates ["GBP"]
};

const sum = (a, b) => a + b;
    

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};