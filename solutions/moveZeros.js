//DESCRIPTION:
//Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(array){
    let zeros = array.filter(val => val === 0);
    let result = array.filter(val => val !== 0);

    return result.concat(zeros)
}




console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]));
console.log(moveZeros([
    9, 9, 1, 2, 1, 1,
    3, 1, 9, 0, 9, 0,
    0, 0
  ]));