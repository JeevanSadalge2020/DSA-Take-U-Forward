const prompt = require('prompt-sync')();

const n = prompt('Enter an integer - ');

function pattern_fourteen(n) {
    for (let i = 1; i <= n; i++) {
        let num = 65;
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += "" + String.fromCharCode(num);
            num++
        }
        console.log(res.trim());
    }
}

pattern_fourteen(n)