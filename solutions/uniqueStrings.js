// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only 
// spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    //remove spaces, lowercase and sort unique list of words, using map to get unique letters only
    let newArr = arr.map(x => Array.from(new Set(Array.from(x.toLowerCase().replace(/\s/g, '')).sort().join(''))).join(''))
    
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] !== newArr[i+1] && newArr[i+1] === newArr[i+2])
            return arr[i]
        if(newArr[i] !== newArr[i+1] && newArr[i+1] !== newArr[i+2])
            return arr[i+1]
        if(newArr[i] !== newArr[i+2] && newArr[i+1] !== newArr[i+2])
            return arr[i+2]
    }
}

console.log(
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))
console.log(
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));