// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
	let numMap = new Map()
	let ans = []
	for(let i = 0; i < nums.length; i++) {
		if(numMap.has(nums[i])) {
			numMap.set(nums[i], numMap.get(nums[i]) + 1)
		} else {
			numMap.set(nums[i], 1)
		}
	}
	 let sortedArray = Array.from(numMap).sort((a, b) => b[1] - a[1]);
	 for(let i = 0; i < k; i++) {
		 ans.push(sortedArray[i][0]);
	 }
	return ans
};

// Test cases
let nums1 = [1,1,1,2,2,3]
let k1 = 2
console.log(topKFrequent(nums1,k1)); // [1,2]

let nums2 = [1]
let k2 = 1
console.log(topKFrequent(nums2,k2)); // [1]

let nums3 = [1, 2]
let k3 = 2
console.log(topKFrequent(nums3,k3)); // []