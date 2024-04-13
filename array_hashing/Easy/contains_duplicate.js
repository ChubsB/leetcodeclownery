// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
    let numMap = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(numMap.has(nums[i])){
            return true
        } else {
            numMap.set(nums[i], 0)
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

// Brute force 
// O(n^2) time 
// I(1) memory 

// Best
// O(n) time
// O(n) memory