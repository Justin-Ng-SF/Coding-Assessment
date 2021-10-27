/*
Write your own implementation of rounding a decimal number to the nearest whole number

- If the number is 6.5 answer should be 7
- If the number is 6.2 answer should be 6
- What are some edge case to be aware of?
- Be sure to include comments
- How could you measure your algorithm?
---
assumptions:
num is any valid decimal number (number with a decimal) of type number
num does not exceed javascript's number typing, double-precision 64-bit, if it does values will not be precise enough
assume i cant use javascripts built in math functions or any function that rounds
*/


const inputs = [
    0,
    0.1,
    -0.1,
    0.9,
    -0.9,
    1,
    -1,
    1.1,
    -1.1,
    9.5,
    -9.5,
    1.9,
    -1.9,
    99.9,
    -99.9,

];



function roundNum(num) {
    
    //if already a whole number, return
    if (num%1 === 0) {
        return num;
    }
    //we are converting to string because some operations done in javascript involving decimals are not accurate
    //ie 2.3%2 will be evaluated to 0.2999999999999998

    //turn to string to get decimal placement
    let numString = num.toString();
    //check if its negative
    let isNegative = num<0 ? -1 : 1;
    // console.log(isNegative)

    //get first digit after decimal
    const decimalIndex = numString.indexOf('.');
    const decimalDigit = numString[decimalIndex + 1];

    //check if its rounds up or not
    let roundedDigit = decimalDigit >= 5;

    //prepare whole number 
    let integerValue = parseFloat(numString.substring(0, decimalIndex));

    //return value, if rounded return left, if not rounded return right
    return roundedDigit ? integerValue + isNegative : integerValue

}

inputs.forEach(val => {
    console.log('==================================================');
    console.log('input: ' + val + '\noutput: ' + roundNum(val));
});






