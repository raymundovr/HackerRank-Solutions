function naive(bits) {
    let diff = 32 - bits.length;
    let flipped = '1'.repeat(diff);
    for (let i = 0; i < bits.length; i++) {
        flipped += bits[i] === "0" ? "1" : "0";
    }

    return parseInt(flipped, 2);
}

// Complete the flippingBits function below.
function flippingBits(N) {
    let bitString = N.toString(2);
    return naive(bitString);
}
