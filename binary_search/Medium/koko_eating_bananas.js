var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);

    while (min <= max) {
        let speed = Math.floor((min + max) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / speed);
        }
        if (hours > h) {
            min = speed + 1;
        } else {
            max = speed - 1;
        }
    }

    return min;
};


console.log(minEatingSpeed([3,6,7,11], 8)) // 4

console.log(minEatingSpeed([30,11,23,4,20], 5)) // 30 

console.log(minEatingSpeed([30,11,23,4,20], 6)) // 23

console.log(minEatingSpeed([312884470], 312884469)) // 2