var twoSum = function (nums, target) {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }
};

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

console.log(twoSum([2, 5, 5, 11], 10));
