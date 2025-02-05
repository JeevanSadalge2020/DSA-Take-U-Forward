function isArmstrong(n) {
  let l = n.toString().length;
  return (
    n ===
    n
      .toString()
      .split("")
      .map((item) => +item)
      .reduce((res, cur) => res + Math.pow(cur, l), 0)
  );
}

console.log(isArmstrong(370));
console.log(isArmstrong(153));
console.log(isArmstrong(12));
