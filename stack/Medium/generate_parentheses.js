// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]

function generateParenthesis(n) {
    const result = [];
    const stack = [];

    function backtrack(openCount, closeCount) {
        if (openCount === n && closeCount === n) {
            result.push(stack.join(''));
            return;
        }

        if (openCount < n) {
            backtrack(openCount + 1, closeCount);
            stack.pop();
        }

        if (closeCount < openCount) {
            stack.push(')'); 
            backtrack(openCount, closeCount + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);
    return result;
}

// console.log(generateParenthesis(1)) //["()"]
console.log(generateParenthesis(2)) //["()()", "(())"]