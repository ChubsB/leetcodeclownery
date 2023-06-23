var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let output = [];

    for(let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let left_pointer = i + 1;
        let right_pointer = nums.length - 1;

        while(left_pointer < right_pointer) {
            let testSum = nums[i] + nums[left_pointer] + nums[right_pointer];

            if(testSum > 0) {
                right_pointer--;
            } else if(testSum < 0) {
                left_pointer++;
            } else {
                output.push([nums[i], nums[left_pointer], nums[right_pointer]]);
                left_pointer++;
                right_pointer--;
                
                while(left_pointer < right_pointer && nums[left_pointer] === nums[left_pointer - 1]) {
                    left_pointer++;
                }
                
                while(left_pointer < right_pointer && nums[right_pointer] === nums[right_pointer + 1]) {
                    right_pointer--;
                }
            }
        }
    }

    return output;
};