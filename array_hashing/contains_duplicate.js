var containsDuplicate = function(nums) {
    let numberList = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(numberList.has(nums[i])) {
            numberList.set(nums[i], numberList.get(nums[i]) + 1)
            return true
        } else {
            numberList.set(nums[i], 0)
        }
    }
    return false
};
    
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// Input: nums = [1,2,3,4]
// Output: false

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))

// Brute force 
// O(n^2) time 
// I(1) memory 

// Best
// O(n) time
// O(n) memory