function Node(value) {
    this.value = value;
    this.next = null;
}

class Queue {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(item) {
        const node = new Node(item);
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque() {
        if (!this.head) {
            return undefined;
        }
        
        this.length--;
        const headValue = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        return headValue;
    }

    peek() {
        return this.head ? this.head.value : undefined;
    }
}

// Sample usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // 1
console.log(queue.deque()); // 1
