// function rotateString(s, goal) {
//   let counter = s.length;
//   let res = false;
//   let arr = s.split("");
//   while (counter > 0) {
//     arr.push(arr.shift());
//     let new_str = arr.join("");
//     if (new_str === goal) {
//       res = true;
//       break;
//     } else {
//       counter--;
//     }
//   }
//   return res;
// }

function rotateString(str, goal) {
  let counter = 0; // Start from 0 as goal might be the same
  let res = false;
  while (counter < str.length) {
    let new_str = str.slice(counter) + str.slice(0, counter);
    if (new_str === goal) {
      res = true;
      break;
    } else counter++;
  }
  return res;
}

// console.log(rotateString("jeevan", "eevanj"));
console.log(rotateString("jeevan", "jeevan"));

let x = "mvupxtoqfndcvotybmilmxdyyyyirdrmeiyphpscrtgkhtrcygryplujod";
let y = "mvupxtoqfndcvotybmilmxdyyyyirdrmeiyphpscrtgkhtrcygryplujod";

// console.log(x === y);
