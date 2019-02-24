//Twój kod
const fs = require('fs');

process.argv.forEach((val, index) => {
    if (index > 1) {
        fs.readFile(`./data/zadanieDnia/${val}.txt`, 'utf8', (err, data) => {
            if(err === null) {
                const newData = data.split('').map( (element, index ) => {
                    if (index % 2) {
                        return element.toUpperCase();
                    } else {
                        return element.toLowerCase();
                    }
                }).join('');
                console.log(newData);
                fs.writeFile(`./data/zadanieDnia/${val}.txt`, `${newData}`, err => {
                    if (err === null) {
                        console.log('Dane zapisane!', newData);
                    } else {
                        console.log('Błąd! ', err);
                    }
                })
            } else {
                console.log('Błąd', err);
            }
        })
    }
  });