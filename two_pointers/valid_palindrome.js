var isPalindrome = function(s) {
    const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let isValidPalindrome = true
    for(let i = 0; i <= ~~(replaced.length / 2); i++){
        if(replaced.charAt(i) !== replaced.charAt((replaced.length - 1) - i)){
            isValidPalindrome = false
        }
    }
    return isValidPalindrome
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))