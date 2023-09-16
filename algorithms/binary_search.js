const array = [1, 6, 25, 32, 51, 94, 123]

const binary_search = (array, target) => {
    let lower_bound = 0
    let upper_bound = array.length - 1
    while(lower_bound <= upper_bound) { 
        let midpoint = Math.floor(lower_bound + (upper_bound - lower_bound) / 2); 
        if(array[midpoint] == target) {
            return midpoint;
        }
        if(array[midpoint] > target) {
            upper_bound = midpoint - 1; 
        } else {
            lower_bound = midpoint + 1;
        }
    }
    return -1;
};

console.log(binary_search(array, 123));
