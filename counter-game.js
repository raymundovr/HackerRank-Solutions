const isPowerOfTwo = n => (n & (n - 1)) === 0;

const lowerPowerOfTwo = n => {    
    let base = 1;    
    while (Math.pow(2, base) < n) {
        base++;
    }    
    return Math.pow(2, base - 1);
}

// Complete the counterGame function below.
function counterGame(n) {
    if (n === 1) return "Richard";

    let turn = 1;
    let reduction = n;
    do {        
        if (isPowerOfTwo(reduction)) {
            console.log("is power of two");
            reduction = reduction / 2;
        } else {
            console.log("is not power of two");
            let lowerPower = lowerPowerOfTwo(reduction);
            console.log(lowerPower);
            reduction = reduction - lowerPower;
        }

        turn++;
        console.log(reduction);
    } while (reduction > 1);    
    
    return turn % 2 === 0 ? "Louise" : "Richard";
}
