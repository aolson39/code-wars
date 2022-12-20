// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same 
// l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random 
// tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.


function longestRepetition(s) {
    let max = 0;
    let char = '';
    let c = 1;
    for(let i = 1; i <= s.length; i++){
        if(s[i] === s[i-1]){
            c++;
        }else{
            if(c > max){
                char = s[i - 1];
                max = c;
            }
            c = 1;
        }
    }
    return [char, max]
}

console.log(longestRepetition("bbbaaabaaaa"));







