// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

var evalRPN = function(tokens) {
    let stack = []
    let operators = new Map([
        ["+", 1],
        ["-", 1],
        ["*", 1],
        ["/", 1]
    ])
    for(let i = 0; i < tokens.length; i++) {
        if(operators.has(tokens[i])) {
            let value = 0
            let v2 = parseInt(stack.pop())
            let v1 = parseInt(stack.pop())
            if(tokens[i] === "+") {
                value = v1 + v2
            }
            if(tokens[i] === "-") {
                value = v1 - v2
            }
            if(tokens[i] === "*") {
                value = v1 * v2
            }
            if(tokens[i] === "/") {
                value = Math.trunc(v1 / v2);
            }   
            stack.push(value)
        } else {    
            stack.push(tokens[i])
        }
    }
    return stack[0]
};


// console.log(
// 	evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
//   );

console.log(
	evalRPN(["2","1","+","3","*"])
  );

