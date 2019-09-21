function matchingStrings(strings, queries) {
    let dictionary = {};
    let response = [];
    strings.forEach(str => {
        if (dictionary[str] === undefined) dictionary[str] = 1;
        else dictionary[str]++;
    });
    
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        if (dictionary[query] !== undefined) {
            response[i] = dictionary[query];
        } else {
            response[i] = 0;
        }
    }
    return response;
}
