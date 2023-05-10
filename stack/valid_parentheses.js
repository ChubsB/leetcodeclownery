var isValid = function (s) {
	let stack = []
    let isValid = true
    const bracketMap = new Map([[")", "("],["}", "{"],["]", "["]]);
    for(let i = 0; i < s.length; i++){
        if(bracketMap.has(s.charAt(i))){ 
            if(stack.length != 0 && stack[stack.length - 1] == bracketMap.get(s.charAt(i))){
                stack.pop()
            } else {
                isValid = false 
            }
        } else {
            stack.push(s.charAt(i))
        }
    }
    console.log('Testing', stack)
    if(stack.length == 0){
        isValid = true
    } else {
        isValid = false
    }
    return isValid
};

console.log(isValid("()"))
