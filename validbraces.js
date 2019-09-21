function validBraces(braces){
    //We'll use a stack to travel the string and verify that the closing item is correct
    let bracesArray = braces.split('');
    let bracesStack = [];

    //Let's iterate on the characters.
    //Whenever we encounter an open bracket we add its closing pair into the stack
    for (let i = 0; i < bracesArray.length; i++) {
        if (bracesArray[i] === '(') {
            bracesStack.push(')');
        } else if (bracesArray[i] === '[') {
            bracesStack.push(']');
        } else if (bracesArray[i] === '{') {
            bracesStack.push('}');
        } else {
            console.log(bracesStack);
            let closingBracket = bracesStack.pop();
            if (closingBracket !== bracesArray[i]) return false;
        }
    }
    console.log(bracesStack);
    return bracesStack.length === 0;
}

console.log(
    validBraces("()"),
    validBraces("[(])")
);