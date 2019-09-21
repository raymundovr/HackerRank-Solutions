function encryption(s) {
    let sqrt = Math.sqrt(s.length);
    let rows = Math.floor(sqrt);
    let cols = Math.ceil(sqrt);
    if ((rows * cols) < s.length) rows++;
    let encrypted = '';
    let cc = 0;
    let cr = 0;
    console.log(sqrt, rows, cols);
    while (cc < cols) {
        let i = cc + cr * cols;
        if (s[i] !== undefined) {
            encrypted += s[i];
        }
        cr++;
        if (cr === rows) {
            encrypted += ' ';
            cr = 0;
            cc++;
        }
    }
    return encrypted;
}

console.log(
    encryption('chillout')
);