// Write a function to perform a linear search on an array of integers to find the index of a given target value. If the target is not found, return -1.
// let array=[0,1,2,3,4,5,6,7,8,9]
// let target=9
// function search(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target) return i
//     }
//      return -1
// }

// console.log(search(array,target))

// Modify the linear search algorithm to find all occurrences of a target value in an array and return their indices as an array.

// let array = [1, 2, 3, 3, 4, 5, 6, 4, 3]
// let target = 3
// function search(arr, target) {
//     let array = []
//     let i = 0
//     while (i < arr.length) {
//         if (arr[i] === target) array.push(i)
//             i++
//     }
//     return array
// }
//  console.log(search(array,target))

 //Using linear search, write a function to find the minimum and maximum values in an array.

//  let array=[10,2,1,88,3,44,5,60]
//  let target = 2
//  function search(arr){
//     let large=arr[0]
//     let minimum=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>large){
//             large=arr[i]
//         }
//         if(arr[i]<minimum){
//             minimum=arr[i]
//         }
//     }
//     return {large,minimum}
//  }

//  console.log(search(array))

 //Write a function that uses linear search to check if there are any duplicate values in an array.

//  let array=[10,2,1,88,3,44,5,60]

// function duplicateFind(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr.indexOf(arr[i])!=arr.lastIndexOf(arr[i])){
//             console.log("There are Duplicates")
//             return -1    
//         }
        
//     }
//     return 1
// }

// console.log(duplicateFind(array))


// Given a 2D array (matrix), write a function to perform a linear search for a target value in the matrix. Return the position of the value as a pair of coordinates.

let jaggedArray=[[1,2,3],[9,6,3,7],[99,20],[1],[8,9,10]]
let target=3

function search(arr,t){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(t==arr[i][j]) return [i,j]
        }
    }
    return -1
}

console.log(search(jaggedArray,target))