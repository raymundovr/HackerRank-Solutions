function solution(number){
    let sum = 0;

    for (let n = 3; n < number; n++) {
        if (n % 3 === 0) {
            sum += n;
        } else if (n % 5 === 0) {
            sum += n;
        }
    }

    return sum;
}

console.log(
    solution(10),
    solution(200)
);