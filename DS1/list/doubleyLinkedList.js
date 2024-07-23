class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }

    listSize() {
        return this.size
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.append(value)
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node

        }
        this.size++
    }
    removeFromStart() {
        if (this.isEmpty()) {
            return null
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = this.head.next
        }
        this.size--

    }
    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
            return -1
        }
        let curr = this.head
        let link = ""
        while (curr) {
            link += `${curr.value} `
            curr = curr.next
        }
        console.log(link)
    }
    printReverse() {
        if (this.isEmpty()) {
            console.log("List is empty")
            return -1
        }
        let curr=this.tail
        let rev=""
        while(curr){
            rev+=`${curr.value} `
            curr=curr.prev
        }
        console.log(rev)
    }
}

let list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.prepend(3)
list.print()
list.printReverse()
list.removeFromStart()
list.removeFromEnd()
console.log(list.listSize())
list.print()
