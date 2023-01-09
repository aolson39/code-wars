// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(string){
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let highestVal = 0
    let highestWord = ''
    string = string.split(' ')
    for(let i = 0; i < string.length; i++){ // for each word
        let wordValue = 0
        for(let x = 0; x < string[i].length; x++){ //iterate through letters and add value using index + 1
            wordValue += letters.indexOf(string[i][x])+1
        }
        if(wordValue > highestVal){ //check if value is greater than 'highest' value and reassign word as highest value word
            highestVal = wordValue
            highestWord = string[i]
        }
    }
    return highestWord
}

console.log(high('what time are we climbing up the volcano'))
//result expected: 'volcano'