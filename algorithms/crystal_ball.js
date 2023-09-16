/*
	Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1...]
*/

const array = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]

const crystal_ball = (array) => {
	const jumpAmount = Math.floor(Math.sqrt(array.length))
	let i = jumpAmount
	for(; i < array.length; i += jumpAmount) {
		if(array[i] == 1) {
			break
		} 
	}
	i -= jumpAmount
	for(let j = 0; j <= jumpAmount && i < array.length; j++, i++) {
		console.log('J ', j, ' i ', i, ' JumpAmmount ', jumpAmount)
		if(array[i] == 1) {
			return i
		}
	}
	return -1
}

console.log(crystal_ball(array))