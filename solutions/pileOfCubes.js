// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

//tests:
// assert.strictEqual(findNb(4183059834009), 2022)
// assert.strictEqual(findNb(24723578342962), -1)
// assert.strictEqual(findNb(135440716410000), 4824)
// assert.strictEqual(findNb(40539911473216), 3568)


function findNb(m) {
    // keep track of the sum of all cubes with counter while incrementing index
    // if counter is the same as input return the count of the number
    let counter = 1;
    let n = 1;
    while(counter < m){
        n += 1
        counter += (n ** 3)
    }
    if(counter === m){
        return n
    }
    return -1
}


console.log(findNb(1071225));
// = 45

console.log(findNb(4183059834009))
// 2022
console.log(findNb(24723578342962))
// -1
console.log(findNb(135440716410000))
// 4824
console.log(findNb(40539911473216))
// 3568