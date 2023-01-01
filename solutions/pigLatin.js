// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    
    str = str.split(' ')
    let punctuation = /^[.,:!?]/
    let arr = [];
    str.forEach(word => {
        if(!word.match(punctuation))
            word = word.substring(1) + word.slice(0, 1) + 'ay'
        arr.push(word)
    });
    return arr.join(' ')
}

console.log(pigIt('Pig latin is cool')) //,'igPay atinlay siay oolcay'
console.log(pigIt('This is my string ?')) //,'hisTay siay ymay tringsay ?'