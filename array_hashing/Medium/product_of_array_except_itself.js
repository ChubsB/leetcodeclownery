// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  let output = new Array(nums.length);
    output[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log({output, nums, i, rightProduct})
        output[i] = output[i] * rightProduct;
        rightProduct *= nums[i];
    }
    return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
// [1, 1, 2, 6] //prefix
// [24, 12, 4, 1] //postfix
