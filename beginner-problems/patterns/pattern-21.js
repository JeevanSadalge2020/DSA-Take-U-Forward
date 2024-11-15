function pattern_twenty_one(n) {
  for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === 1 || i === n) {
        res = res + "*";
      } else {
        res += " ";
      }
    }
    console.log(res);
  }
}

console.log("res");

pattern_twenty_one(10);
