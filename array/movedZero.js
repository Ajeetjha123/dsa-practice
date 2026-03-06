var moveZeroes = function (nums) {
  //     let k = 0;
  //     for(const val of nums) {
  //         if(val !== 0){
  //             nums[k++] = val;
  //         }
  //     }
  //    while(k < nums.length){
  //     nums[k++] = 0
  //    }
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
};
const ans = moveZeroes([0, 1, 0, 3, 12]);
console.log(ans);
