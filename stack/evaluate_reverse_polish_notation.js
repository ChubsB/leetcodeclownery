// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

function evalRPN(tokens) {
    const stack = [];
    tokens.forEach(token => {
        if (['+', '-', '*', '/'].includes(token)) {
            const num2 = stack.pop();
            const num1 = stack.pop(); 
            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(Math.trunc(num1 / num2));
                    break;
            }
        } else {
            stack.push(parseInt(token, 10));
        }
    });
    return stack.pop();
}

// console.log(
// 	evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
//   );

