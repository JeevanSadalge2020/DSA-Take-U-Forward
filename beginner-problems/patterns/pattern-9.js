let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_nine(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = (n - i); j > 0; j--) {
            res = res + " "
        }
        for (let k = 1; k <= i; k++) {
            res = res + "*"
        }
        for (let l = (1); l < (i); l++) {
            res = res + "*"
        }
        console.log(res);
    }
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

pattern_nine(input)