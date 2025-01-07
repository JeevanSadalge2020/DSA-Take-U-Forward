function secondMostFrequentElement(nums) {
  if (nums.length === 1 || nums.length === 2) return -1;
  else {
    let new_map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!new_map.has(nums[i])) {
        new_map.set(nums[i], 1);
      } else {
        let val = new_map.get(nums[i]);
        new_map.set(nums[i], val + 1);
      }
    }
    let values = [...new_map.values()];
    let entries = [...new_map.entries()];
    let values_sorted = [...new Set(values.sort((a, b) => a - b))];
    if (values_sorted.length === 1) return -1;
    else {
      let second_highest_freequency = values_sorted[values_sorted.length - 2];
      entries = entries.filter((arr) => {
        if (arr[1] === second_highest_freequency) return arr;
      });
      let res = entries[0][0];
      for (let i = 1; i < entries.length; i++) {
        let key = entries[i][0];
        let value = entries[i][1];
        if (value === second_highest_freequency && key < res) {
          res = key;
        }
      }
      return res;
    }
  }
}

console.log(
  secondMostFrequentElement([
    10, 2, 3, 10, 2, 3, 3, 4, 3, 4, 4, 4, 5, 5, 0, 2, 2,
  ])
);

console.log(secondMostFrequentElement([1, 2, 3]));
console.log(secondMostFrequentElement([1, 2, 2, 3, 3, 3]));
