// DESCRIPTION:
// You have some 2*2 matrices, each matrix is represented by an array of length 4.

// such as [a, b, c, d] is matrix

// a b
// c d
// Matrix can be rotated:

// a b   90 degrees  c a  180 degrees  d c  270 degrees  b d
// c d  -----------> d b  -----------> b a  -----------> a c
// If matrix A can be obtained by rotating matrix B clockwise by 0, 90, 180 or 270 degrees, we think that A and B are the same matrix.

// For example, the following matrices are considered the same.

// 1 2
// 3 4

// 3 1
// 4 2

// 4 3
// 2 1

// 2 4
// 1 3
// The task of this kata is to count how many different matrices you have.

// Samples

// // Same as the above example.
// count_different_matrices([[1, 2, 3, 4],
//                           [3, 1, 4, 2],
//                           [4, 3, 2, 1],
//                           [2, 4, 1, 3]]);
                          
// //should return '1'

// loop through the array and build an array of the 4 possible orientations of the matricies
// pop each of the matches and repeat until there are none left
function countDifferentMatrices(matrices) {
    
    let count = 0;
    //build an array of all possible combinations for each matrix
    matrices.forEach(matrix => {
        let tempMatrix = []
        tempMatrix = [matrix, [matrix[2], matrix[0], matrix[3], matrix[1]], [matrix[3], matrix[2], matrix[1], matrix[0]],[matrix[1], matrix[3], matrix[0], matrix[2]]]
        //loop through and delete all matches in matrices and count++
        console.log(tempMatrix);
        let foundYet = false;
        tempMatrix.forEach((element,index) => {
            let found = matrices.indexOf(element)
            if(found > -1){
                console.log('matrix found!');
                console.log(element);
                console.log(`index of: ${found}`);
                console.log(`matrices was = ${matrices}`);
                matrices.splice(found, 1)
                console.log(`matrices is now = ${matrices}`);
                if(!foundYet)
                    foundYet = true
                console.log(`foundYet is now: ${foundYet}`);
                console.log(`count is: ${count}`);
            }
        });
        if(foundYet)
            count++
        console.log(matrix);
    });
    console.log(count);
    return count;
}

// countDifferentMatrices([[1, 2, 3, 4],
//                           [3, 1, 4, 2],
//                           [4, 3, 2, 1],
//                           [2, 4, 1, 3]]);

                          ms = [[1, 2, 3, 4],
                                [3, 1, 4, 2],
                                [4, 3, 2, 1],
                                [2, 4, 1, 3]];
                          countDifferentMatrices(ms)
                          //return 2

// countDifferentMatrices([[1, 2, 3, 4],
//         [3, 1, 4, 2],
//         [4, 3, 2, 1],
//         [2, 4, 1, 3]]);