const array = [5, 25, 1, 22, 21, 1, 92, 51, 7];

const bubble_sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
		if(array[j] > array[j+1]) {
			const temp = array[j+1]
			array[j+1] = array[j]
			array[j] = temp
		}
	}
  }
  return array
};

console.log(bubble_sort(array))

/*
	Complexity:
	n(n-1)/2 = n^2
*/
