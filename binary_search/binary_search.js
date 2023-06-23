var search = function(nums, target) {
    let index = -1;
    let start = 0;
    let stop = nums.length - 1; 
    let mid = Math.floor((start + stop) / 2);

    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);

        if (nums[mid] === target) {
            index = mid;
            break;
        }

        if (nums[mid] > target) {
            stop = mid - 1; 
        } else {
            start = mid + 1; 
        }
    }

    return index;
};

console.log(search([-1,0,3,5,9,12], 9))