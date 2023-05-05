var isValidSudoku = function(board) {
    let isValid = true;

    for (let i = 0; i < 9; i++) {
        let rowMap = new Map();
        let columnMap = new Map();
        let boxMap = new Map();

        for (let j = 0; j < 9; j++) {
            // Check rows
            if (rowMap.has(board[i][j])) {
                isValid = false;
                break;
            } else {
                if (board[i][j] !== '.') {
                    rowMap.set(board[i][j], 1);
                }
            }

            // Check columns
            if (columnMap.has(board[j][i])) {
                isValid = false;
                break;
            } else {
                if (board[j][i] !== '.') {
                    columnMap.set(board[j][i], 1);
                }
            }

            // Check 3 x 3 sub-boxes
            let boxRow = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let boxCol = (i % 3) * 3 + j % 3;
            let boxValue = board[boxRow][boxCol];

            if (boxMap.has(boxValue)) {
                isValid = false;
                break;
            } else {
                if (boxValue !== '.') {
                    boxMap.set(boxValue, 1);
                }
            }
        }
        if (isValid === false) {
            break;
        }
    }
    return isValid;
};