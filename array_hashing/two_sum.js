var twoSum = function(nums, target) {
    const map = {}
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index]
      const complement = target - element
      if (map[complement] !== undefined) {
        return [map[complement], index]
      } else {
        map[element] = index
      }
    }
    return []
};