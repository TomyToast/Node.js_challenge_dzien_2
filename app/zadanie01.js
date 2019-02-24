//Twój kod
require('./data/zadanie01/input.json');

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null) {
        let JSON_DATA = JSON.parse(data);
        let sum = JSON_DATA.reduce( (total, current) => total + current, 0);
        return (
            // console.log(sum);
            fs.writeFile('./data/zadanie01/sum.txt', `${sum}`, err => {
                if (err === null) {
                console.log('Ok, zapisałeś dane!', sum);
                } else {
                    console.log('Coś się zjebało!', err);
                }
            })
        )
    } else {
        console.log(err);
    }
});