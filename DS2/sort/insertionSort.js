function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let  n=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>n){
            arr[j+1]=arr[j]
            j--

        }
        arr[j+1]=n
        
    }

}

const array = [-7, 22, -8, -1, 0, 6, 3, 0]
insertionSort(array)
console.log(array) /// Big-O(n^2)
