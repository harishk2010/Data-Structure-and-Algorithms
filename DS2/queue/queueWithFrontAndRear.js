class Queue{
    constructor(){
        this.item={}
        this.front=0
        this.rear=0
    }
    enqueue(element){
        this.item[this.rear]=element
        this.rear++
    }
    dequeue(){
        let remItem=this.item[this.front]
        delete this.item[this.front]
        this.front++
        return remItem
    }
    size(){
        return this.rear-this.front
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    print(){
        console.log(this.item)
    }
    peek(){
        return this.item[this.front]
    }
}

let queue=new Queue()
queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(500)
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())