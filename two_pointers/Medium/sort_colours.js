var sortColors = function(nums) {
    let left = 0
    let right = nums.length - 1
    for(let i = 0; i < nums.length; i++){
        if(nums[right] < nums[left]) {
            const temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right--
        } else {
            left++
        }
    }
    return nums
};