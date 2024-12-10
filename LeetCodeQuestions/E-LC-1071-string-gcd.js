/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let maxStrlength = Math.max(str1.length, str2.length);

    for (let i=1; i<=maxStrlength; i++) {
        let divisorStr = str1.substr(0, i);
        for(let j=0; j<maxStrlength; j+=i) {
            if(divisorStr !== str1.substr(j,i) || divisorStr !== str2.substr(j, i)) {
                break;
            }
        }
        return divisorStr;
    }
};

console.log(gcdOfStrings('ABCABC', 'ABC')); // 'ABC'
console.log(gcdOfStrings('ABABAB', 'AB')); // 'AB'
console.log(gcdOfStrings('LEET', 'CODE')); // ''