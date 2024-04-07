// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  let stack = [];
  const matcher = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const bracket of s) {
    if (matcher.has(bracket)) {
      if (stack.length && stack[stack.length - 1] == matcher.get(bracket)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
console.log(isValid("(({()))")); // false
// [ '(', ')']
