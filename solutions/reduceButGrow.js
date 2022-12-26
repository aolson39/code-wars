// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((curr, acc) => curr * acc);
}

grow([4, 1, 1, 1, 4]) // 16
grow([2, 2, 2, 2, 2, 2]) // 64