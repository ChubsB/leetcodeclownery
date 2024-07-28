var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) {
        return 0
    }
    if(s.length === 1) {
        return 1
    }
    let start = 0
    let end = 1
    const subString = new Set([s.charAt(start)])
    let maxCount = 0
    while(end < s.length) {
        if(!subString.has(s.charAt(end))) {
            subString.add(s.charAt(end))
        } else {
            for(let i = start; i < end; i++) {
                if(s.charAt(i) == s.charAt(end)) {
                    subString.add(s.charAt(end))
                    start = i + 1
                    break
                } else {
                    subString.delete(s.charAt(i))
                }
            }
        }
        if(subString.size > maxCount) {
            maxCount = subString.size
        }
        end++
    }
    return maxCount
};

// console.log(lengthOfLongestSubstring('')) // 0
// console.log(lengthOfLongestSubstring('a')) // 1
// console.log(lengthOfLongestSubstring('bbbbb')) // 1
// console.log(lengthOfLongestSubstring('abc')) // 3
// console.log(lengthOfLongestSubstring('pwwkew')) // 3