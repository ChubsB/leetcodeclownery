// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function (board) {
  let isValid = true;
  let boxMap = new Map();
  for (let i = 0; i < 9; i++) {
    let rowMap = new Map();
    let columnMap = new Map();
    for (let j = 0; j < 9; j++) {
      // Row check
      if (board[i][j] != "." && rowMap.has(board[i][j])) {
        isValid = false;
        break;
      } else {
        rowMap.set(board[i][j], 1);
      }

      // Column check
      if (board[j][i] != "." && columnMap.has(board[j][i])) {
        isValid = false;
        break;
      } else {
        columnMap.set(board[j][i], 1);
      }

      // Box check
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (board[i][j] != "." && boxMap.has(boxIndex) && boxMap.get(boxIndex).has(board[i][j])) {
        isValid = false;
        break;
      } else {
        if (board[i][j] != ".") {
          if (!boxMap.has(boxIndex)) {
            boxMap.set(boxIndex, new Map());
          }
          boxMap.get(boxIndex).set(board[i][j], 1);
        }
      }
    }
    if (!isValid) {
      break;
    }
  }
  return isValid;
};


console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); //true

console.log(
  isValidSudoku([["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]])
);
