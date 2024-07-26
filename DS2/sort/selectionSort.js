let array=[1,8,0,3,-10,10,,99,-6]

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let poniter=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[poniter]){
                poniter =j
            }
        }
        let temp=arr[poniter]
        arr[poniter]=arr[i]
        arr[i]=temp
    }
}

selectionSort(array)
console.log(array);