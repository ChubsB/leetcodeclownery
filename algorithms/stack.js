function Node(value) {
    this.value = value
    this.previous = null
}

class Stack {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(item) {
        const node = new Node(item)
        this.length++
        if(!this.head) {
            this.head = this.tail = node
        }
        node.previous = this.head
        this.head = node
    }

    pop() {
        if(!this.head) {
            return undefined
        }
        this.length--
        const headValue = this.head.value
        this.head = this.head.previous
        return headValue
    }

    peek() {
        return this.head ? this.head.value : undefined
    }
}

const stack = new Stack()
console.log(stack.peek())
stack.push(1)
stack.push(2)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())