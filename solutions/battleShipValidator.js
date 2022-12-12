function validateBattlefield(field) {
    // write your magic here
    let battleships = [];
    //check horizontal first and add all battleships to array
    field.forEach(array => {
        //if there are battleships, add to battleship array
        if(battleshipsArray(array).length > 0)
            battleships.push(battleshipsArray(array))
    });
    //check vertical rows and add all battleships to array
    for(let c = 0; c < field.length; c++){
        let array = [];
        //create array of columns
        for(let r = 0; r < field.length; r++){
            array.push(field[r][c])
        }
        if(battleshipsArray(array).length > 0)
            battleships.push(battleshipsArray(array))
    }
    //check that no other ships are within one space
    // and add all single 1's (submarines)


    console.log(battleships);
}

//this method returns all battleship lengths in a given array
function battleshipsArray(array){
    let counter = 0;
    let battleships = [];
    for(let x = 0; x < array.length; x++){
        let currentNum = array[x]
        if(currentNum === 1)
            counter++;
        if(currentNum === 0){
            if(counter > 1){
                battleships.push(counter)
            }
            counter = 0
        }
    }
    return battleships
}



validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
])

