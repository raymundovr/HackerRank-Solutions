'use strict';

const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => inputString += inputStdin);
process.stdin.on('end',  _ => {
    inputString.trim().split('\n').map(str => str.trim());	
    main();
});

function main() {
    console.log(inputString);
}