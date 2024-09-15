let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_four(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = 1; j <= i; j++) {
            res = res + i
        }
        console.log(res);
    }
}

pattern_four(input)