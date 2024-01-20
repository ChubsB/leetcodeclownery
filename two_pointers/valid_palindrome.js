var isPalindrome = function(s) {
    const base = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseIndex = base.length - 1
    for(let i = 0; i < base.length; i++) {
        if(base.charAt(i) !== base.charAt(reverseIndex - i)) {
            return false
        }
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true