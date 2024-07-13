const arr = [1,2,6,9,10];
const target = 9;


function binarySearch(arr, target){
    return search(arr, target , 0 , arr.length-1)
}

function search(arr, target , left , right){
    if(left > right) return - 1
    let middle = Math.floor((left+right)/2);
    if(arr[middle] == target){
        return middle
    }else if(arr[middle] < target){
        return search(arr, target , middle+1 , right)
    }else{
        return search(arr, target, left , middle -1 )
    }
    
}



console.log(search(arr, target))