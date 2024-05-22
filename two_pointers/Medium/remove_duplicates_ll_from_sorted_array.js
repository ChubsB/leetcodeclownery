var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1; 
    let index2 = n - 1;  
    let mergeIndex = m + n - 1;  

    while (index2 >= 0) {
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[mergeIndex] = nums1[index1];
            index1--;
        } else {
            nums1[mergeIndex] = nums2[index2];
            index2--;
        }
        mergeIndex--;
    }
};


console.log(removeDuplicates([1, 1, 1, 2, 2, 3])) // Output: [1, 1, 2, 2, 3]
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])) // Output: [0, 0, 1, 1, 2, 3, 3]