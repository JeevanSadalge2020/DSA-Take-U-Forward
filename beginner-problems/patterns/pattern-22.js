function pattern_twenty_two(n) {
  for (let i = 1; i < 2 * n; i++) {
    let res = "";
    for (let j = 1; j < 2 * n; j++) {
      let num = "*";
      for (let k = 1; k <= n; k++) {}
      res += num;
    }
    console.log(res);
  }
}

pattern_twenty_two(3);
