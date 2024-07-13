var search = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[min] <= nums[mid]) {
            if (target >= nums[min] && target < nums[mid]) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[max]) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }
    }
    
    return -1;
};