/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = 0
    let max = nums.length - 1
    let mid = Math.floor((min + max) / 2)
    let minValue = nums[mid]
    while(min <= max) {
        mid = Math.floor((min + max) / 2)
        if(nums[mid] < minValue) {
            minValue = nums[mid]
        }
        if(nums[max] < nums[mid] && nums[max] < nums[min]) {
            min = mid + 1
        } else {
            max = mid - 1
        }
    }
    return minValue
};

console.log(findMin([3,4,5,1,2])) // 1

console.log(findMin([0,2,3,5,8,9,10])) // 0

console.log(findMin([5,8,8,10,3,2,0])) // 0

console.log(findMin([4,5,6,7,0,1,2])) // 0

console.log(findMin([11,13,15,17])) // 11