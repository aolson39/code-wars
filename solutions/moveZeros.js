//DESCRIPTION:
//Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        if(array[i] === 0){
            array.splice(i, 1);
            //console.log(`array[i] = ${array[i]}`)
            array.push(0)
        }
    }
    console.log(array)
}




moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])