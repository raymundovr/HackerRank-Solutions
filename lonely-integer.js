function lonelyinteger(a) {
    let numbers = new Set();
    for (let i = 0; i < a.length; i++) {
        if (numbers.has(a[i])) {
            numbers.delete(a[i]);
        } else {
            numbers.add(a[i]);
        }
    }
    return [...numbers][0];
}

