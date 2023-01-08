function bingo(ticket, win){
    let miniwin = 0;
    for(let i = 0; i < ticket.length; i++){ //each entry
        let ascii = ticket[i][1]
        let letters = ticket[i][0]
        for(let x = 0; x < letters.length; x++){ //letters of subarray
            //check if each letter ascii code matches the target ascii code and count it as a win
            if(letters[x].charCodeAt(0) === ascii ){
                miniwin++
                break
            }
        }
    }
    return miniwin >= win ? 'Winner!' : 'Loser!'
}

console.log(bingo([['PBYFH',90], ['FGZQSNRF',66], ['VUCKEXM',81], ['QTU',73], ['HZQ',65], ['WCFTCCE',67], ['QJOAK',87], ['EXECXD',85]], 3))//Loser!
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))//, 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))//, 'Winner!');