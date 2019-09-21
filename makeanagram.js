const countCharacters = str => {
    let characters = {};
    for (let i = 0; i < str.length; i++) {
        if (characters[str[i]] === undefined) characters[str[i]] = 1;
        else ++characters[str[i]];
    }
    return characters;
};

function makeAnagram(a, b) {
    let achars = countCharacters(a);
    let bchars = countCharacters(b);
    let set = new Set(Object.keys(achars). concat(Object.keys(bchars)));
    let totalToRemove = 0;
    set.forEach(s => {
        if (achars[s] !== undefined && bchars[s] !== undefined) {
            totalToRemove += Math.abs(achars[s] - bchars[s]);
        }
        else if (achars[s] !== undefined) {
            totalToRemove += achars[s];
        }
        else if (bchars[s] !== undefined) {
            totalToRemove += bchars[s];
        }
    });
    console.log(totalToRemove);
    return totalToRemove;
}

makeAnagram("cde", "abc");