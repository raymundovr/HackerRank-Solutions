const getSequence = (x, lastAnswer, n) => {
    return (x ^ lastAnswer) % n;
};

const initSequences = n => {
    let sequences = [];
    for (let i = 0; i < n; i++) {
        sequences[i] = new Array();
    }

    return sequences;
};

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    const sequences = initSequences(n);
    let lastAnswer = 0;

    let result = [];
    queries.forEach(query => {
        let qType, x, y;
        [qType, x, y] = [...query];
        let seq = getSequence(x, lastAnswer, n);
        switch (qType) {
            case 1:
                sequences[seq].push(y);
                break;
            case 2:
                let elem = y % sequences[seq].length;
                lastAnswer = sequences[seq][elem];
                result.push(lastAnswer);
                break;
        }
    });
    
    return result;
}
