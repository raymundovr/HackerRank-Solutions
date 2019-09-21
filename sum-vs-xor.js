function naive(n) {
    let matches = 1; //0
    for (let i = 1; i < n; i++) {
        if ((i + n) === (i ^ n)) {
            matches++;
        }
    }

    return matches;
}

function optimized(n) {
    let c = 0;
    while (n) {
        if (n % 2 === 0) c++;
        n = parseInt(n / 2);
        
    }    
    return Math.pow(2, c);
}

// Complete the sumXor function below.
function sumXor(n) {
    return optimized(n);
}
