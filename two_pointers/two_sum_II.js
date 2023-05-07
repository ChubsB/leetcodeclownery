var twoSum = function (numbers, target) {
  let numMap = new Map();
  let result;
  for (let i = 0; i <= ~~(numbers.length / 2); i++) {
    if (!numMap.has(numbers[i])) {
      numMap.set(target - numbers[i], i + 1);
    } else {
      result = [numMap.get(numbers[i]), i + 1];
      break
    }
    if (!numMap.has(numbers[numbers.length - 1 - i])) {
      numMap.set(target - numbers[numbers.length - 1 - i], numbers.length - i);
    } else {
      result = [numMap.get(numbers[numbers.length - 1 - i]), numbers.length - i];
      break
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 3, 4], 6)); // [1,3]
console.log(twoSum([-1, 0], -1)); // [1,2]
