const getNext = n => {
    if (n > Number.MAX_SAFE_INTEGER) {
        let bigg = BigInt(n) + 1n;
        return bigg.toString();
    }
    return (++n).toString();
}

function separateNumbers(s) {
    if (s.length < 2) {
        console.log("NO");
        return;
    }
    let splitSize = 1;
    let smallestFirstN = '';
    let i = 0;
    while (i <= (s.length - 1 - splitSize)) {
        let current = s.substr(i, splitSize);
        let expected = getNext(parseInt(current));
        let next = s.substr(i + splitSize, expected.length);
        if (expected === next) {
            if (i === 0) smallestFirstN = current;
            i += splitSize;
            splitSize = expected.length;
        } else {
            i = 0;
            splitSize++;
            if (splitSize > (s.length / 2)) {
                console.log("NO");
                return;
            }
        }
    }
    console.log("YES " + smallestFirstN);
}

