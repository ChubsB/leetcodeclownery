var circularArrayLoop = function (nums) {
  const n = nums.length;

  const getNext = (index) => {
    return (((index + nums[index]) % n) + n) % n;
  };

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;

    let slow = i,
      fast = getNext(i);

    while (
      nums[slow] * nums[fast] > 0 &&
      nums[slow] * nums[getNext(fast)] > 0
    ) {
      if (slow == fast) {
        if (slow == getNext(slow)) {
          break;
        }
        return true;
      }
      slow = getNext(slow);
      fast = getNext(getNexzt(fast));
    }
    let index = i;
    let val = nums[i];
    while (nums[index] * val > 0) {
      let next = getNext(index);
      nums[index] = 0;
      index = next;
    }
  }
  return false;
};
