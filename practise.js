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

