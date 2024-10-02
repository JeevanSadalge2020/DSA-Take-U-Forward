let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_six(n) {
    for (let i = n; i >= 1; i--) {
        let res = '';
        for (let j = 1; j <= i; j++) {
            res = res + j
        }
        console.log(res);
    }
}

pattern_six(input)