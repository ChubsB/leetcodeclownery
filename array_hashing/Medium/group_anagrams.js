// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function (strs) {
    const groups = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);
        
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index]++;
        }

        const key = count.join('#');
        
        if (!groups.has(key)) {
            groups.set(key, [str]);
        } else {
            groups.get(key).push(str);
        }
    }

    return Array.from(groups.values());
};

// Test cases
let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input1)); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

let input2 = [""];
console.log(groupAnagrams(input2)); // [[""]]

let input3 = ["a"];
console.log(groupAnagrams(input3)); // [["a"]]
