var isAnagram = function (s, t) {
	if (s.length !== t.length) return false; 
    let tallyS = new Map();
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        tallyS.set(char, (tallyS.get(char) || 0) + 1);
    }
    for(let i = 0; i < t.length; i++) {
        let char = t.charAt(i);
        if (!tallyS.has(char) || tallyS.get(char) === 0) return false;
        tallyS.set(char, tallyS.get(char) - 1);
    }
    return true;
};

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("a", "ab"));

// Best
// O(n) time
// O(n) memory