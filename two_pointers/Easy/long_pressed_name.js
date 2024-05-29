var isLongPressedName = function(name, typed) {
   	let pointer = 0
    let typedName = ''
    for(let i = 0; i < typed.length; i++) {
        if(name.charAt(pointer) == typed.charAt(i)) {
            typedName = typedName + typed.charAt(i)
            pointer++
        }
    }
	return typedName
    if(typedName == name) {
        return true
    } else {
        return false
    }
};

console.log(isLongPressedName("alex", "aaleexa"))