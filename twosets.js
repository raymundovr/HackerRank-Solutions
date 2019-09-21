const isFactor = (st, n) => {
    for (let x = 0; x < st.length; x++) {
        if (n % st[x] !== 0) return false;
    }
    return true;
};

const isArrayFactor = (st, n) => {
    for (let x = 0; x < st.length; x++) {
        if (st[x] %n !== 0) return false;
    }
    return true;
};

function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    let max = Math.min(...b);
    let min = Math.max(...a);
    let total = 0;
    let possible = [];
    for (let i = min; i <= max; i++) {
        if (isFactor(a, i)) possible.push(i);
    }
    console.log(possible);
    for (let i = 0; i < possible.length; i++) {
        if (isArrayFactor(b, possible[i])) total++;
    }
    return total;
}

getTotalX([2, 4], [16, 32, 96]);