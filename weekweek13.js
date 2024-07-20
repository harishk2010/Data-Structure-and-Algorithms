//  function binary(arr,t){
//     let left=0
//     let right=arr.length-1

//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(arr[middle]===t) return middle
//         else if(arr[middle]>t){
//             right=middle-1

//         }else{
//             left=middle+1
//         }
//     }

//  }

//  let array=[1,2,3,4,5,6,7,8,9]
//  let target=6

//  console.log(binary(array,target))
//"how are you"
//woh era uoy

let str="how are you"
let a=str.split(" ").reverse()
console.log(a)
let arr=[]

let reverse=a.forEach(element => {
    arr.push(element.split("").reverse().join(""))
    // console.log(element)
});
console.log(arr.join(" "))

//write a program to remove duplicates in a sorted linkedList?

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isSize(){
        return this.size
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    removeDuplicate(){
        let curr=this.head
        let seen=new Set()
        let prev=null
        while(curr){
            if(seen.has(curr.value)){
                prev.next=curr.next
            }else{
                seen.add(curr.value)
                prev=curr
            }
            curr=curr.next
        }
    }
    print(){
        let curr=this.head
        let link=''
        while(curr){
            link+=`${curr.value} `
            curr=curr.next
        }
        console.log(link)
    }
}

let list=new linkedList()

list.prepend(2)
list.prepend(1)
list.prepend(1)
list.prepend(3)
list.prepend(3)
list.prepend(2)
list.prepend(4)
list.print()
list.removeDuplicate()
list.print()