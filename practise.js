class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head=null
        this.tail=null
        this.size=0
    }

    theSize(){
        return this.size
    }

    isEmpty(){
        return this.size===0
    }

    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    removeFromStart(){
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removeFromLast(){
        if(this.size==1){
            this.head=null
            this.tail=null
        }else{
            let prev=this.head
            while(prev.next!==this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
        this.size--
    }
    reverse(){
        
    }
    print(){
        if(this.isEmpty()){
            console.log("empty")
            return -1
        }else{
        let curr=this.head
        let link= ""
        while(curr){
            link+=`${curr.value} `
            curr=curr.next
        }
        console.log(link)
    }
    }
}

let list=new LinkedList()
list.append(1)
list.prepend(2)
list.removeFromStart()
list.prepend(3)
list.removeFromLast()

list.print()
console.log("size",list.theSize())


function fact(n){
    if(n<2){
        return 1
    }
    return n*fact(n-1)
}

function fib(a){
    if(a<2) return a
    return fib(a-1)+fib(a-2)
}

function powoftwo(a){
    while(a%2===0){
        a/=2
    }
    if(a===1) return true
    return false
}

function bi(arr,t){
    let l=0
    let r=arr.length-1
    while(l<=r){
        let m=Math.floor((l+r)/2)
        if(t===arr[m]) return m
        else if(arr[m]>t){
            r=m-1
            
        }else{
            l=m+1
        }
    }
    return -1
}
let array=[1,3]
let a=1

console.log(fact(a),fib(a),powoftwo(a),bi(array,a))

