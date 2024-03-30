function Node(value) {
    this.value = value
    this.next = null
}

class Queue {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    enqueue(item) {
        const node = new Node(item)
        this.length++
        if(!this.tail) {
            this.head = this.tail = node
        }
        this.tail.next = node
        this.tail = node
    }

    deque() {
        if(!this.head) {
            this.tail = null;
            return undefined
        }
        this.length--
        const headValue = this.head.value
        this.head = this.head.next
        return headValue
    }

    peek() {
        if(!this.tail) {
            return undefined
        } 
        return this.head.value
    }
}

const queue = new Queue()
console.log(queue.peek())
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.peek())
console.log(queue.deque())
console.log(queue.peek())