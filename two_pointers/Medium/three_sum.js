// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sorted_nums = nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < sorted_nums.length - 2; i++) {
        if (i === 0 || (i > 0 && sorted_nums[i] !== sorted_nums[i - 1])) {
            let start = i + 1;
            let end = sorted_nums.length - 1;
            while (start < end) {
                let sum = sorted_nums[i] + sorted_nums[start] + sorted_nums[end];
                if (sum === 0) {
                    ans.push([sorted_nums[i], sorted_nums[start], sorted_nums[end]]);
                    while (start < end && sorted_nums[start] === sorted_nums[start + 1]) start++;
                    while (start < end && sorted_nums[end] === sorted_nums[end - 1]) end--; 
                    start++;
                    end--;
                } else if (sum < 0) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4])) //[ -4, -1, -1, 0, 1, 2 ]
// console.log(threeSum([0,1,1]))
// console.log(threeSum([0,0,0]))