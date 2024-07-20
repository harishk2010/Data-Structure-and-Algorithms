

// // function fact(num){
// //    
    
    
// // }
// //3**1
// // console.log(fact(3))


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(value){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }

//     append(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next

//             }
//             curr.next=node
//         }
//         this.size++
//     }


//     print(){
//         let link=""
//         let curr=this.head
//         while(curr){
//             link+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(link)
//     }
// }


// let list=new LinkedList()
// list.append(1)
// list.append(3)

// list.append(4)

// list.append(5)
// list.append(6)
// list.append(9)

// list.print()
let lesorted_list = [1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25]
let target_element = 25

function binary(arr,t){
    let left =0
    let right=arr.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(arr[middle]===t) return middle
        else if(arr[middle]<t){
            left=middle+1
        }else{
            right=middle-1
        }
    }
}

console.log(binary(lesorted_list,target_element))

function fact(n){
    // let factorial=1
    // for(let i=1;i<=n;i++){
    //     factorial=factorial*i
        
    // }
    // return factorial //normal loop
    if(n<2){
        return 1
    }
    return n*fact(n-1) ///recursion
}

console.log(fact(1))

function fibonacci(n){

    // let arr=[0,1]
    // if(n==0) return 0
    
    // for(let i=2;i<n;i++){
    //     arr[i]=arr[i-1]+arr[i-2]
    // }
    // return arr  // normal loop
    if(n<2){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2) // recursion
}

console.log(fibonacci(0))


function poweroftwo(a){
    // while(a%2===0){
    //     a/=2
    // }

    // if(a!==1) return false
    // return true

    if( a & a-1 ) return false
    return true


}

console.log(poweroftwo(64))