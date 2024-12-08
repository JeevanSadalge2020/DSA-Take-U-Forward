function rotateString(s, goal) {
  let counter = s.length;
  let res = false;
  let arr = s.split("");
  while (counter > 0) {
    arr.push(arr.shift());
    let new_str = arr.join("");
    if (new_str === goal) {
      res = true;
      break;
    } else {
      counter--;
    }
  }
  return res;
}

console.log(rotateString("jeevan", "evaenj"));
