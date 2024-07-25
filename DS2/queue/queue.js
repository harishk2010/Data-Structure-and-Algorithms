class Queue{
    constructor(){
        this.item=[]
    }

    enqueue(element){
        this.item.push(element)
        
    }

    dequeue(){
        return this.item.shift()
    }

    print(){
        console.log(this.item.toString())
    }
    size(){
        return this.item.length===0
    }
    isEmpty(){
        return this.item.length
    }
    peek(){
        return this.item[0]
    }
}

let queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.peek())
queue.dequeue()
queue.print()