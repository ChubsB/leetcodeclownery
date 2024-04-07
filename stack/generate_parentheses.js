// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    // x open && x close
	// close < open
	let stack = []
	res = []

	var backTrack = function(open, closed){
		if(open === n && closed === n) {
			res.push(stack.join(''));
			return
		}
		if(open < n) {
			stack.push('(')
			backTrack(open + 1, closed)
			stack.pop()
		}
		if(closed < open) {
			stack.push(')')
			backTrack(open, closed + 1)
			stack.pop()
		} 
	}
	backTrack(0, 0)
	return res
};

// console.log(generateParenthesis(1)) //["()"]
console.log(generateParenthesis(2)) //["()()", "(())"]