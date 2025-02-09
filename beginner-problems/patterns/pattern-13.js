const prompt = require('prompt-sync')();

const n = prompt('Enter an integer - ');

function pattern_thirteen(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res += " " + num
            num++
        }
        console.log(res.trim());
    }
}

pattern_thirteen(n)