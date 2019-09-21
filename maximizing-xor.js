function maximizingXor(l, r) {
    let max = 0;
    for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
            if (i !== j) {
                let xor = i ^ j;
                max = xor > max ? xor : max;
            }
        }
    }
    return max;
}
