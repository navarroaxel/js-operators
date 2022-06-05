const fs = require('fs');

fs.readFile('domain.txt', 'utf8',  (err, data) => {
    console.log(data);
    princePrice(data);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const princePrice = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        const rates = await response.json();
        const price = rates.find(r => r.pairCode === 'BTC/DAI').ask
        console.log(price);
    }
}

princePrice('https://api.belo.app/public/price');


