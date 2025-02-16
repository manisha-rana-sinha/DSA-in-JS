/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i=0, j=1, count = 1, compressedStr='';
    while(j<=chars.length) {
        if(chars[i] === chars[j]) {
            count++;
        }else {
            compressedStr+=(count>1 ? chars[i]+count : chars[i]);
            i=j;
            count=1;
        }
        j++;
    }
    chars.splice(0, chars.length, ...compressedStr.split(''));
    return chars.length;
}; 

compress(["a","a","b","b","c","c","c"]);
compress(["a","b","b","b","a","a","c","c","c","d","d"]);
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);
