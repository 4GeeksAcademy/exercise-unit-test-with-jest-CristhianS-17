const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const sum= (a,b) => {
    return a+b;
}

console.log(sum(7,3));

module.exports = {sum};

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}


function fromDollarToYen(euro){}

function fromEuroToDollar(euro){}

function fromYenToPound(euro){}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};