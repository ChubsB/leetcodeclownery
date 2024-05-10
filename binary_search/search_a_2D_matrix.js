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
    let min = 0;
    let max = matrix.length - 1;
    let selectedRow = -1;
    let isFound = false;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (matrix[mid][matrix[mid].length - 1] < target) {
            min = mid + 1;
        } else if (matrix[mid][0] > target) {
            max = mid - 1;
        } else {
            selectedRow = mid;
            break;
        }
    }

    if (selectedRow == -1) {
        return false;
    }

    min = 0;
    max = matrix[selectedRow].length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (matrix[selectedRow][mid] == target) {
            return true; 
        } else if (matrix[selectedRow][mid] > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return false;
};