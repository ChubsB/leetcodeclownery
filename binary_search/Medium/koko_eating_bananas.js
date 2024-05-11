var minEatingSpeed = function(piles, h) {
    const eatingBananas = function(speed) {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / speed);
        }
        return hours;
    };

    let left = 1;
    let right = Math.max(...piles);
    let ans = right; // start with the maximum possible speed

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let hoursNeeded = eatingBananas(mid);
        if (hoursNeeded <= h) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};