const prompt = require('prompt-sync')();

const n = prompt('Enter an integer - ');

function pattern_eleven(n) {
    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let j = 0; j < i; j++) {
            let x = (i + j) % 2;
            res = res + " " + x;
        }
        console.log(res.trim());
    }
}

pattern_eleven(n)