// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.
   
// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, 
// return the original text without a change.



function replaceNth(text, n, oldValue, newValue) {
    text = text.split('');
    let count = 1;
    for(let i = 0; i < text.length; i++){
        //if current letter is target letter increment counter
        if(text[i] === oldValue && count === n){
            text[i] = newValue
            count = 1
        }
        if(text[i] === oldValue && count != n)
            count++
    }
    return text.join('')
}

replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!"
replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'), "Vader said: No, I am your fother!"
replaceNth("Vader said: No, I am your father!", 6, 'a', 'o'), "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", 0, 'a', 'o'), "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", -2, 'a', 'o'), "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", 1, 'i', 'y'), "Vader sayd: No, I am your father!"

replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'), "Luke cries: Noooooioooooioooo!"