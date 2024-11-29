function mostFrequentElement(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let cur_ele = nums[i];
    if (obj[cur_ele]) {
      obj[cur_ele]++;
    } else {
      obj[cur_ele] = 1;
    }
  }
  let entries = Object.entries(obj);
  return foo(entries);
}

function foo(arr) {
  let max_value = arr[0][1];
  let res = arr[0][0];
  for (let i = 1; i < arr.length; i++) {
    let cur_value = arr[i][1];
    let index = +arr[i][0]; /* This is very important */
    if (cur_value > max_value) {
      console.log("-");
      res = index;
      max_value = cur_value;
    } else if (cur_value === max_value) {
      if (index < res) {
        res = index;
      }
    }
  }
  return res;
}

console.log(
  mostFrequentElement([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 2, 2, 3, 3, 3, 3])
);
console.log(mostFrequentElement([4, 4, 5, 5, 6, 1, 1]));
console.log(mostFrequentElement([3, 1, 3, 10]));
console.log(mostFrequentElement([2, 7, 5, 4, 10, 6]));
