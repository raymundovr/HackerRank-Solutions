function weightedUniformStrings(s, queries) {
    let uniformWeights = new Set();
    let rep = 1;
    let lastChar = '';
    let lastUniform = '';
    for (let i = 0; i < s.length; i++) {        
        if (s[i] === lastChar) {
            lastUniform += s[i];
            rep++;
        } else {
            lastChar = s[i];
            lastUniform = s[i];
            rep = 1;
        }
        let weight = (s.charCodeAt(i) - 96) * rep;
        uniformWeights.add(weight);
    }
    let result = [];
    queries.forEach(q => {
        if (uniformWeights.has(q)) result.push("Yes")
        else result.push("No");
    });
    return result;
}
