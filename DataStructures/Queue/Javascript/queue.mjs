// run command: npm run js-queue

export class Queue {
    items;

    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    enqueue(item) {
        this.items = [...this.items, item];
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[0];
        this.items = this.items.slice(1);
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('a');
queue.enqueue('b');
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
