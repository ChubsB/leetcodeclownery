var containsDuplicate = function(nums) {
    const tally = new Map();
    for(let i = 0; i < nums.length; i++){
        if(tally.has(nums[i])){
            return true
        } else {
            tally.set(nums[i], i)
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