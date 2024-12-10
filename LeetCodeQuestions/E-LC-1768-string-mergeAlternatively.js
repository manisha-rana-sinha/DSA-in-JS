var mergeAlternately = function (word1, word2) {
    const l1 = word1.length;
    const l2 = word2.length;

    const minLength = Math.min(l1, l2);
    let mergeStr = '';
    for (let i = 0; i < minLength; i++) {
        mergeStr += (word1[i] + word2[i]);
    }
    if (l1 > l2) {
        mergeStr += word1.substr(minLength);
    }
    if (l2 > l1) {
        mergeStr += word2.substr(minLength);
    }
    return mergeStr;
};

mergeAlternately('abc', 'pqrst')