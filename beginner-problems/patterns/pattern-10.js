const prompt = require('prompt-sync')();

const n = prompt('Enter an integer - ');

function pattern_ten(n) {
    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res = res + "*";
        }
        console.log(res);
    }

    for (let i = (n - 1); i >= 1; i--) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res = res + "*";
        }
        console.log(res);
    }
}

pattern_ten(n)