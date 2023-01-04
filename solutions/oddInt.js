// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    // set each number and the value is true if even  and false if odd.
    let isOddMap = new Map()
    let result;
    A.forEach(num => {
        if(!isOddMap.has(num)){
            isOddMap.set(num, false)
        }else{
            isOddMap.set(num, !isOddMap.get(num))
        }
    });
    isOddMap.forEach((key, value) =>{
        if(!key)
            result = value
    })
    return result
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4