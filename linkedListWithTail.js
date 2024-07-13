class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
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

    removeFromStart(){
        if(this.isEmpty()) return null
        let node=this.head.value
        if(this.size===1){
           
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
        }
        this.size--
        return node
    }

    removeFromEnd(){
        if(this.isEmpty()) return null
        let node=this.tail.value
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            let curr=this.head
            while(curr.next!==this.tail){
                curr=curr.next
            }
            curr.next=null
            this.tail=curr
        }
        this.size--
    }

    arrayToLinkedList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
       
    }

    print() {
        if (this.isEmpty()) {
            console.log("The list is Empty")
        } else {
            let curr = this.head
            let linked = ""
            while (curr) {

                linked += `${curr.value} `
                curr = curr.next
            }
            console.log(linked)
        }

    }
}

let list = new LinkedList()

// list.prepend(20)
// list.prepend(10)

 list.append(2)

// list.print()
//  list.removeFromStart()

// list.removeFromEnd()
// let array=[2,3,4,5]
// list.arrayToLinkedList(array)
 list.print()


