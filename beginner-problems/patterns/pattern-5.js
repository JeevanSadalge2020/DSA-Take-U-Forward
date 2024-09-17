let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_five(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = n; j >= i; j--) {
            res = res + "*"
        }
        console.log(res);
    }
}

pattern_five(input)