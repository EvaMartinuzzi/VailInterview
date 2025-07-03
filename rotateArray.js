#!/usr/bin/env node
module.exports = { rotateArrayLeft };

function rotateArrayLeft(arr, positions) {
    const len = arr.length;
    if (len === 0) return arr; // handle empty array
    if (positions === 0) return arr; // handle no rotation
    if (positions < 0) throw new Error('Rotation must be a non-negative integer'); // handle negative rotation

    // handle if rotation amount is greater than array length
    // if arr length is 6 and positions is 8, we actually only need to rotate 2 positions
    positions %= len;

    // reverse from the start to the positions index
    // for array [1,2,3,4,5,6,7] and positions 2, this reverses [1,2] to make it [2,1,3,4,5,6,7]
    reverse(arr, 0, positions - 1);
    // reverse from positions to the end
    // for array [1,2,3,4,5,6,7] and positions 2, this reverses [3,4,5,6,7] to make it [2,1,7,6,5,4,3]
    reverse(arr, positions, len - 1);
    // reverse whole array to get final order
    // for array [2,1,7,6,5,4,3], this reverses it to make it [3,4,5,6,7,1,2]
    reverse(arr, 0, len - 1);

    // expected result for input [1,2,3,4,5,6,7] and positions 2 is [3,4,5,6,7,1,2] 
    return arr;
}

// reverses a section of the array
function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// rotate an array left from the command line
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error('Usage: node rotateArray.js <comma-separated-numbers> <rotation>');
        process.exit(1);
    }
    const arr = args[0].split(',').map(Number);
    const rotation = parseInt(args[1], 10);
    try {
        const result = rotateArrayLeft(arr, rotation);
        console.log(result);
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}