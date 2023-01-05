// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let result = []
    // split number into String array
    num = (num + '').split('')
    // iterate through array to square each number and push to result
    num.map(n => {
        result.push(Number(n) ** 2)
    })
    // return the result cast as a number
    return Number(result.join(''))
}

console.log(squareDigits(3212))