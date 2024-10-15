let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_eight(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = 1; j <= (i - 1); j++) {
            res = res + " "
        }
        for (let k = n; k >= i; k--) {
            res = res + "*"
        }
        for (let l = (n - i); l > 0; l--) {
            res = res + "*"
        }
        console.log(res);
    }
}

pattern_eight(input)