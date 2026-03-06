function removeDuplicates(nums) {
  let k = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
const ans = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(ans);
