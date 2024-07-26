class Stack{
    constructor(){
        this.item=[]
    }
    size(){
        return this.item.length
    }
    isEmpty(){
        return this.item.length===0
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        return this.item.pop()
    }
    print(){
        console.log(this.item.toString())
    }
    peek(){
        return this.item[this.item.length-1]
    }
}

let stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()
console.log(stack.pop())
console.log(stack.peek())
stack.print()