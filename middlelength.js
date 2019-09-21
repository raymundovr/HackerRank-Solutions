function getMiddle (str) {
    let middle = "";
    let length = str.length;
    if (length > 0) {
        let middlePosition = parseInt(length / 2);
        if (length % 2 === 1) {
            //This is the case when the length is odd.
            console.log(middlePosition);
            middle = str[middlePosition];
        } else {
            //This is the case when the lenght is even.
            middle = str[middlePosition - 1] + str[middlePosition];
        }
    }

    return middle;
}

console.log(
    getMiddle("A"),
    getMiddle("test"),
    getMiddle("testing"),
    getMiddle("middle")
);