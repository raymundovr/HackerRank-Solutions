function populateSequence(stop) {    
    for (let i = sequence.length; i <= stop; i++) {
        sequence.push(sequence[i - 1] ^ i);
    }
}

function naive(l, r) {
    populateSequence(r);
    let sum = sequence[l];
    for (let i = l + 1; i <= r; i++) {
        if (sequence[i] > 0) sum ^= sequence[i];
    }
    return sum;
}

function optimized(l, r) {
    
}

// Complete the xorSequence function below.
function xorSequence(l, r) {
    return naive(l, r);
}
