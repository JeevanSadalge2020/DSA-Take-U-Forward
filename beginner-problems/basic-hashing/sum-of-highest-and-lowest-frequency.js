function sumHighestAndLowestFrequency(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let cur_ele = nums[i];
    if (obj[cur_ele]) {
      obj[cur_ele]++;
    } else {
      obj[cur_ele] = 1;
    }
  }
  let values = Object.values(obj);
  return Math.max(...values) + Math.min(...values);
}

console.log(sumHighestAndLowestFrequency([1, 2, 3, 1, 2, 3, 4]));
