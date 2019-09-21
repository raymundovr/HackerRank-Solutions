function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let tl = 0;
    let tr = 0;
    let i = 1;
    while (i <= n) {
        if (i >= p) break;
        tl++;
        i++;
    }
    i = n;
    while (i >= 1) {
        if (i <= p) break;
        tr++;
        i--;
    }
    return Math.min(tl, tr);
}

