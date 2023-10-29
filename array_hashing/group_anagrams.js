var groupAnagrams = function(strs) {
    let map = new Map();

    for (let str of strs) { 
        let sorted = [...str].sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    return [...map.values()];
}

// Test cases
let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input1)); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

let input2 = [""];
console.log(groupAnagrams(input2)); // [[""]]

let input3 = ["a"];
console.log(groupAnagrams(input3)); // [["a"]]

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


/*
	Step 1: find anagrams
		- Hash
			- ate eat tea
			{
				a - 1
				t - 1
				e -1 
			}

			{
				a - 1
				t - 1
				e -1 
			}

			{
				a - 1
				t - 1
				e -1 
			}
	Step 2: Group them together
		- match each word against all words?
*/
