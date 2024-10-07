let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_seven(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = (n - i); j >= 1; j--) {
            res = res + " "
        }
        for (let k = 1; k <= i; k++) {
            res = res + "*"
        }
        for (let l = 1; l <= (i - 1); l++) {
            res = res + "*"
        }
        console.log(res);
    }
}

pattern_seven(input)