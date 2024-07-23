const arr = [1, 2, 3, 4, 5, 6]
const target = 1

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (arr[middle] === target) {
            return middle
        }
        else if (arr[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }

    }
    return -1

}

console.log(binarySearch(arr, target))

///linear search

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target) return i
         
    }
    return -1
}

console.log(linearSearch(arr,2))


let str="the book is in the shelf"
str=str.split(" ").reverse().join(" ")
console.log(str)

