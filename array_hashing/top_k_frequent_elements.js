var topKFrequent = function(nums, k) {
	let num_map = new Map()
    nums.forEach(num => {
		if (num_map.has(num)) {
			num_map.set(num, num_map.get(num) + 1);
		} else {
			num_map.set(num, 1);
		}
	});
	let sortedOccurences= Array.from(num_map.entries()).sort((a, b) => b[1] - a[1]);
	return sortedOccurences.slice(0, k).map(item => item[0]);
};

// Test cases
let nums1 = [1,1,1,2,2,3]
let k1 = 2
console.log(topKFrequent(nums1,k1)); // [1,2]

let nums2 = [1]
let k2 = 1
console.log(topKFrequent(nums2,k2)); // [1]