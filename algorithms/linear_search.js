const array = [1, 6, 25, 32, 51, 94, 123]

const binary_search = (array, target) => {
	let flag = false
    array.forEach(element => {
		if(target == element) {
			flag = true
		}
	});
	return flag
};

console.log(binary_search(array, 123));

/*
	Complexity
	log(n)
*/
