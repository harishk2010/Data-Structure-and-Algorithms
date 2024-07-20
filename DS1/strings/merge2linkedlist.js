class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head=null
        
        this.size=0

    }
    thesize(){
        console.log(this.size)
        return this.size
    }
    
    isEmpty(){
        //console.log("The list is empty")
        return this.size===0
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head;
            this.head=node
        }
        this.size++
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }

    removeMiddle(){
        let curr=this.head
        let middle=Math.ceil((this.thesize())/2)
        let i=0
        while(i!==middle-2){
            curr=curr.next
            i++
        }
        let middlenode=curr.next
        curr.next=middlenode.next
        this.size--
    }

    static merge(list1,list2){
        let dummy = new Node();
        let tail = dummy;
        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 && l2) {
            if (l1.value < l2.value) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 ? l1 : l2;
        let mergedList = new LinkedList();
        mergedList.head = dummy.next;
        return mergedList;
    }

    print(){
        let link=""
        let curr=this.head
        while(curr){
            link+=`${curr.value} `
            curr=curr.next
        }
        console.log(link)
    }
}

let list= new LinkedList()
let lis2=new LinkedList()


list.prepend(1)
list.prepend(4)

list.prepend(2)
list.prepend(55)
list.append(23)

lis2.prepend(1)
lis2.append(25)
lis2.append(333)


list.print()
// list.removeMiddle()


lis2.print()
let newList=LinkedList.merge(list,lis2)
newList.print()
console.log(newList)
