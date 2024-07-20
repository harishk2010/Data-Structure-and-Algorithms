// Write a function to perform a binary search on a sorted array of integers to find the index of a given target value. If the target is not found, return -1.
const array = [1, 2, 3, 4, 5, 6]
const target = 6

function binarySearch(arr,t){
    let left=0
    let right=arr.length
    while(left<right){
        let middle=Math.floor((left+right)/2)
        if (arr[middle]===t) return middle
        else if(arr[middle]>t){
            right=middle-1
        }else {
            left=middle+1
        }
    }
    return -1
}

console.log(binarySearch(array,target))


// Given a sorted array, write a function to find the first and last position of a target value using binary search.