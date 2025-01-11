/* Method 1 - Brute force

function GCD(n1, n2) {
  let divisors_of_n1 = get_divisors(n1);
  let divisors_of_n2 = get_divisors(n2);

  function get_divisors(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) arr.push(i);
    }
    return arr;
  }

  return divisors_of_n1.length <= divisors_of_n2
    ? get_max(divisors_of_n1, divisors_of_n2)
    : get_max(divisors_of_n2, divisors_of_n1);
}

function get_max(arr1, arr2) {
  let max = arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2.includes(arr1[i])) {
        max = arr1[i];
      }
    }
  }
  return max;
}  */

// Method 2 - Euclid's algorithm
