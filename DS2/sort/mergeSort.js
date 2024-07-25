function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))


}

function merge(left, right){
    let sortedArr=[]
    while(left.length && right.length){
        if(left[0]>right[0]){
            sortedArr.push(right.shift())
        }else{
            sortedArr.push(left.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

const array = [-7, 22, -8, -1, 0, 6, 3, 0]

console.log(mergeSort(array))