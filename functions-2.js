// Create a function that takes an array and retuen types of the elements (data types ) in a new array
//ex: arrTypes([1,3, "Ali", []]) -> ["number", "number", "string", "object"]
//ES5
function arrTypes(arr) {
    let newArray = []
    for(let i = 0; i<arr.length; i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}
//console.log(arrTypes([1,3, "Ali", []]))

// ES6 
const arrTypesNew = arr => arr.map(x => typeof x)

//Create a function that takes 2-D arrarys and returns the sum on min values in each row
/*
Ex: sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
])
output -> 1+6+11 = 18
*/

function sumMinArrays(arr) {
    let sumTotal = 0;

    for(let i = 0; i < arr.length; i++) {
        let y = arr[i][0]
        for(let x = 0; x<arr[i].length; x++) {
            if(y > arr[i][x]) {
                y = arr[i][x]
            }
    }
    sumTotal += y
    }
   return sumTotal
}

//ES6
const sumMinArraysNew = arr => arr.reduce((a,b) => a + Math.min(...b),0)

//Create a function that takes an array, return duplicate numbers in new array.
//ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) output -> [5,1]

//ES5 -Your answer


//ES6 - inline comments here
const ArraysDuplicateNumbers = arr => (
    arr= [...new Set([...arr.filter(num => 
        arr.indexOf(num) !== arr.lastIndexOf(num)
    )])].sort((a,b) => a-b),
    arr.length ? arr: null
)

console.log(ArraysDuplicateNumbers([1,2,3,4,3,6,1]))

