// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let total = 0;
    if (s.length > 0) {
        let cursor = s[0];
        let i = 1;
        while (i < s.length) {
            if (s[i] === cursor)
                total++;
            else cursor = s[i];

            i++;
        }
    }

    return total;
}
console.log(
alternatingCharacters("AAAA"),
alternatingCharacters("BBBBB"),
alternatingCharacters("ABABABAB"),
alternatingCharacters("BABABA"),
alternatingCharacters("AAABBB")
);
