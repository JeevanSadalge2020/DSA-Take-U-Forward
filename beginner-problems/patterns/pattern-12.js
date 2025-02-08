const prompt = require('prompt-sync')();

const n = prompt('Enter an integer - ');

function pattern_twelve(n) {
    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res += j
        }
        for (let k = (n - i); k >= 1; k--) {
            res += " "
        }
        for (let l = (n - i); l >= 1; l--) {
            res += " "
        }
        for (let m = i; m >= 1; m--) {
            res += m
        }
        console.log(res.trim());
    }
}

pattern_twelve(n)