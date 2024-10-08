class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }
    isEmpty() {
        return this.currentLength === 0
    }
    isFull() {
        return this.capacity == this.currentLength
    }
    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength+=1
            if(this.front===-1){
                this.front=this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item=this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.currentLength-=1
        if(this.isEmpty()){
            this.front=-1
            this.rear=-1
        }
        return item

    }
    peek(){
        if(this.isEmpty()) console.log("empty queue")
            return this.items[this.front]

    }

    print(){
        if(this.isEmpty()){
            return null
        }
        let i
        let str=''
        for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
            str+=this.items[i]+" "
        }
        str+=this.items[i]
        console.log(str)
    }
}

let queue=new circularQueue(5)
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
console.log(queue.dequeue());
console.log(queue.peek())
queue.print()