// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range 
// includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. 
// For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the 
// range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
    // TODO: complete solution 
    let result = [];
    let tempArray = [];
    for(let i = 0; i < list.length; i++){
        if(tempArray.length === 0){
            tempArray.push(list[i])
        }else if(list[i] === tempArray[tempArray.length - 1] + 1){ //if next in the series
            tempArray.push(list[i])
        }else{ // if not next in series
            if(tempArray.length > 2){ // if long enough to be a series > 2
                result.push(tempArray)
            }else{ //if partial series, add each individual number to result array
                tempArray.forEach(element =>{
                    result.push(element)
                });
            }
            tempArray = []
            tempArray.push(list[i])
        }
    }
    if(tempArray.length < 3){
        tempArray.forEach(element =>{
            result.push(element);
        });
    }else{
        result.push(tempArray)
    }
    return formatArray(result)
}

//formatting series
function formatArray(array){
    let result = []
    array.forEach(element => {
        if(Array.isArray(element)){
            result.push(String(`${element[0]}-${element[element.length-1]}`))
        }else{
            result.push(String(element))
        }
    });
    return result.join(',')
}
    
solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 20, 20])
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 20, 20]))