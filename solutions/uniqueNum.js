// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


function findUniq(arr) {
    const map = new Map();

    for(let i = 0; i < arr.length; i++){
        if(!map.get(arr[i])){ // if map doesnt contain key add to map
            map.set(arr[i], 1)
        }else{
            map.set(arr[i], map.get(arr[i])+1) // key in map, add one to value
        }
    }
    for(let [key, value] of map.entries()){ // look for unique value in map and return it
        if(value === 1)
            return key
    }
}


console.log(findUniq([ 1, 0, 0 ]));
console.log(findUniq([ 0, 0, 1 ]));
console.log(findUniq([ 3, 10, 3, 3, 3 ]));

