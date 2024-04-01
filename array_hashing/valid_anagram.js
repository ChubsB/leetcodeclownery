
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
    isValid = false
    let tallyS = new Map()
    let tallyT = new Map()
    if(s.length == t.length){
        for(let i = 0; i < s.length; i ++) {
            if(tallyS.has(s.charAt(i))) {
                tallyS.set(s.charAt(i), tallyS.get(s.charAt(i)) + 1)
            } else {
                tallyS.set(s.charAt(i), 0)
            }

            if(tallyT.has(t.charAt(i))) {
                tallyT.set(t.charAt(i), tallyT.get(t.charAt(i)) + 1)
            } else {
                tallyT.set(t.charAt(i), 0)
            }
        }

        for(const [key, value] of tallyS.entries()) {
            if(tallyT.has(key) && value == tallyT.get(key)) {
                isValid = true
            } else {
                isValid = false 
                break
            }
        }
    } else {
        isValid = false 
    }
    return isValid
};

console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("a", "ab")); // false

// Best
// O(n) time
// O(n) memory