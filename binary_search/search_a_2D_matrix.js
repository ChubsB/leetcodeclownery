var searchMatrix = function(matrix, target) {
    let row = -1
    let isFound = false
    for(let i = 0; i < matrix.length; i++){
		console.log(matrix[i][matrix[i].length - 1])
        if(target <= matrix[i][matrix[i].length - 1]){
            row = i
			break
        }
    }
	console.log(row)
    if(row == -1){
        return isFound
    } else {
        let start = 0
        let stop = matrix[row].length - 1 
        let mid = Math.floor((start + stop) / 2)
        while(start <= stop){
            mid = Math.floor((start + stop) / 2)
            if(matrix[row][mid] === target){
                isFound = true 
                break
            }
            if(matrix[row][mid] > target){
                stop = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    return isFound
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))