var characterReplacement = function(s, k) {
    let start = 0, maxCount = 0, maxLength = 0;
    let count = new Map();

	for(let end = 0; end < s.length; end++) {
		count.set(s[end], (count.get(s[end]) || 0) + 1)
		maxCount = Math.max(maxCount, count.get(s[end]))
		
		while(end - start - maxCount + 1 > k) {
			count.set(s[start],count.get(s[start]) - 1)
			start++
		}

		maxLength = Math.max(maxLength, end - start + 1)
	}
	return maxLength
};


console.log(characterReplacement("AABABBA", 1))