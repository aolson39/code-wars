// Reverse every other word in a given string, then return the string. Throw away any leading or trailing
//  whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be 
//  treated as if they are a part of the word in this kata.

function reverse(str){
    str = str.split(' ')
    for(let i = 1; i < str.length; i+=2){
            str[i] = str[i].split('').reverse().join('')
    }
    return str.join(' ').trim()
}

reverse("Reverse this string, please!")