function arrayChallenge(arr) {
  function removeChallengeToken(str, token) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!token.includes(str[i].toLowerCase())) {
        result += str[i];
      }
    }
    return result === "" ? "EMPTY" : result;
  }

  function findEqualSums(arr, halfSum) {
    const stack = [{ idx: 0, set1: [], set2: [] }];

    while (stack.length > 0) {
	  console.log("STEP : ")
	  console.log(stack)
      const { idx, set1, set2 } = stack.pop();

      if (idx === arr.length) {
        if (
          set1.reduce((a, b) => a + b, 0) === halfSum &&
          set2.reduce((a, b) => a + b, 0) === halfSum
        ) {
          return [set1.sort((a, b) => a - b), set2.sort((a, b) => a - b)];
        }
      } else {
		stack.push({ idx: idx + 1, set1: set1, set2: set2.concat(arr[idx]) });
        stack.push({ idx: idx + 1, set1: set1.concat(arr[idx]), set2: set2 });
      }
    }

    return false;
  }

  const totalSum = arr.reduce((a, b) => a + b, 0);
  if (totalSum % 2 !== 0) {
    return removeChallengeToken("-1", "j191r2t1086");
  }

  const halfSum = totalSum / 2;
  const equalSums = findEqualSums(arr, halfSum);
  if (!equalSums) {
    return removeChallengeToken("-1", "j191r2t1086");
  }

  const [set1, set2] = equalSums;
  const output = set1.join(",") + "," + set2.join(",");
  return removeChallengeToken(output, "j191r2t1086");
}

console.log(arrayChallenge([1, 2, 3, 4])); // Final Output: ",4,,3"