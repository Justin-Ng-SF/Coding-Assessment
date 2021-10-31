/*
    works with strings with at most 12 characters
    accepts any character available from the ascii table
    outputs a 16 character hash consisting of characters from the ascii table ranging from 33 to 126
*/
function hash(stringToHash) {
    //length of this array will represent the length of the newly hashed string length, 16 characters
    //this array will affect the hashed string and therefore must be stored as a key
    let seed = [68, 55, 73, 99, 31, 95, 83, 60, 27, 91, 67, 58, 92, 97, 48, 81];
    //will also affect the hashed string and should be stored as a key
    let key = 5;
    let shiftedBits = 1;

    
    //convert s into a number by getting each character and transforming each of them into a 2 digit number
    stringToHash = parseInt([...stringToHash].map(char => (
        (char.charCodeAt(0) - 32)
    )).join(''));
    
    //remap seed values with hashed numbers that will represent characterse from the ascii table
    seed = seed.map(x => {
        stringToHash ^= key;
        key <<= shiftedBits;
        //93 being the amount of characters from the table that can be represented
        return (x ^ stringToHash) % 93;
    });
  
    //remap with characters, will return hashed string;
    return seed.map(x => {
        x = x < 0 ? -x : x;
        return String.fromCharCode(33 + x)
    }).join('');
}

console.log(hash('abc12'))
console.log(hash('abc123'))
console.log(hash('abc124'))
/*

*/
