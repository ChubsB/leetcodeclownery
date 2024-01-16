var productExceptSelf = function (nums) {
  let prefix = 1;
  let postfix = 1;
  let ans = [];
  ans.push(prefix)
  for (let index = 0; index < nums.length-1; index++) {
    prefix = prefix * nums[index];
    ans.push(prefix);
  }
  ans[ans.length-1] = ans[ans.length-1] * postfix
  for (let index = nums.length-1; index > -1; index--) {
    if(index == nums.length-1) {
		postfix = postfix * nums[index];
	} else {
		ans[index] = ans[index] * postfix
		postfix = postfix * nums[index];
	}
  }
  return ans
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
// [1, 1, 2, 6] //prefix
// [24, 12, 4, 1] //postfix
