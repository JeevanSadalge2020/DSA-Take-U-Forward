let prompt = require('prompt-sync')();

let input = prompt('Enter a positive integer - ');

function pattern_one(n) {
    for (let i = 1; i <= n; i++) {
        let res = '';
        for (let j = 1; j <= n; j++) {
            res = res + '*'
        }
        console.log(res);
    }
}

pattern_one(input)