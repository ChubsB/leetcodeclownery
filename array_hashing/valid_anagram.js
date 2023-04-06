var isAnagram = function (s, t) {
  let tallyS = new Map();
  let tallyT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (tallyS.has(s.charAt(i))) {
      tallyS.set(s.charAt(i), tallyS.get(s.charAt(i)) + 1);
    } else {
      tallyS.set(s.charAt(i), 0);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (tallyT.has(t.charAt(j))) {
      tallyT.set(t.charAt(j), tallyT.get(t.charAt(j)) + 1);
    } else {
      tallyT.set(t.charAt(j), 0);
    }
  }
  for (const [key, value] of tallyT) {
	console.log(key, value)
    if (tallyS.has(key)) {
      if (value !== tallyS.get(key)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// console.log(isAnagram("anagram", "nagaram"))
console.log("Final", isAnagram("a", "ab"));
