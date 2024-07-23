class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null,
            this.size = 0
    }

    listSize() {
        return this.size
    }

    listEmpty() {
        return this.size === 0
    }

    prepend(value) {
        let node = new Node(value)
        if (this.listEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head,
                this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.listEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return false
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next

            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if (this.listEmpty()) {
            return null
        }

        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {

            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
        }
        return null


    }
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    search(value) {
        if (this.listEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    print() {
        if (this.listEmpty()) {
            console.log("List is empty")
        }
        else {
            let curr = this.head
            let listlink = ''
            while (curr) {
                listlink += `${curr.value} `
                curr = curr.next
            }
            console.log(listlink)

        }

    }
}

let list = new LinkedList()

console.log("empty", list.listEmpty())
console.log("size", list.listSize())
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(1)
list.append(2)
list.insert(7, 3)
list.print()
// list.removeFrom(3)
console.log("removed value from index =>>", list.removeFrom(3))
// list.removeValue(10)
console.log("removed by value         =>>", list.removeValue(10))
console.log("searched index           =>>", list.search(29))
list.print()
list.reverse()
list.print()