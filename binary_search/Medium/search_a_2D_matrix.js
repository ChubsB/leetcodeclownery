// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

var searchMatrix = function(matrix, target) {
    let min = 0 
    let max = matrix.length - 1
    let chosenRow = 0
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
         if (matrix[mid][0] === target) {
            return true;
        }
        if (matrix[mid][0] <= target && matrix[mid][matrix[0].length - 1] >= target) {
            chosenRow = mid
            break
        } else if (matrix[mid][0] < target) {
            min = mid + 1;
        } else {
            max = mid - 1; 
        }
    }
    min = 0 
    max = matrix[chosenRow].length - 1
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
        if (matrix[chosenRow][mid] === target) {
            return true
        } else if (matrix[chosenRow][mid] < target) {
            min = mid + 1;
        } else {
            max = mid - 1; 
        }
    }
    
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))

console.log(searchMatrix([[-8,-7,-5,-3,-3,-1,1],[2,2,2,3,3,5,7],[8,9,11,11,13,15,17],[18,18,18,20,20,20,21],[23,24,26,26,26,27,27],[28,29,29,30,32,32,34]], -5))