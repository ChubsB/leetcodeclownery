// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let ans = []
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i - 1]) {
            continue
        }
        let min = i + 1
        let max = nums.length - 1
        while(min < max) {
            let value = nums[i] + nums[min] + nums[max]
             if(value < 0) {
                min++
            } else if (value > 0) {
                max--
            } else {
                ans.push([nums[i],nums[min],nums[max]])
                min++
                while(nums[i] == nums[min] && min < max) {
                    min++
                }
            }
        }
    }
    return ans
};

// console.log(threeSum([-1,0,1,2,-1,-4])) //[ -4, -1, -1, 0, 1, 2 ]
// // console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0,0]))