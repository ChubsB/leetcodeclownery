var search = function(nums, target) {
    let index = -1;
    let start = 0;
    let stop = nums.length - 1; // Subtract 1 to get the correct index of the last element
    let mid = Math.floor((start + stop) / 2);

    while (start <= stop) { // Change condition from start < stop to start <= stop
        mid = Math.floor((start + stop) / 2);

        if (nums[mid] === target) {
            index = mid;
            break;
        }

        if (nums[mid] > target) {
            stop = mid - 1; // Adjust stop index to search in the left half
        } else {
            start = mid + 1; // Adjust start index to search in the right half
        }
    }

    return index;
};

console.log(search([-1,0,3,5,9,12], 9))