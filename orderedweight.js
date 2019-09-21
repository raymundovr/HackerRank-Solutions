const getWeight = str => {
    //This function parses to int the characters and returns the sum of all the characters
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
};



function orderWeight(strng) {
    //Let's first split the input string to obtain the individual numbers
    let numbersString = strng.split(' ');
    let orderedWeights = [];
    let orderedObject = {};
    for (let strIndex = 0; strIndex < numbersString.length; strIndex++) {
        let str = numbersString[strIndex];
        let weight = getWeight(str);
        if (orderedObject[weight] === undefined) {
            orderedObject[weight] = [str];
        } else {
            orderedObject[weight].push(str);
        }
    }
    for (var k in orderedObject) {
        if (orderedObject.hasOwnProperty(k)) {
            orderedWeights.push(...orderedObject[k].sort());
        }
    }
    /*console.log(weightKeys);
    weightKeys.sort();
    console.log(weightKeys);*/
    console.log(orderedWeights.join(' '));
}

console.log(
    orderWeight("103 123 4444 99 2000"),
    orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
);