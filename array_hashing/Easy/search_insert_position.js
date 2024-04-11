// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let max = nums.length
    let min = 0
    while(min < max) {
        let midpoint = Math.floor((max + min) / 2)
        if(nums[midpoint] == target) {
            return midpoint
        } else if(nums[midpoint] > target) {
            max = midpoint
        } else {
            min = midpoint + 1
        }
        if(!(min < max)) {
            return min
        }
    }
};