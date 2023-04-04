export class Queue<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T): Queue<T> {
        this.items = [...this.items, item];
        return this;
    }

    dequeue(): T {
        const item = this.items[0];
        this.items = this.items.slice(1);
        return item;
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    peek(): T | void {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }

    size(): number {
        return this.items.length;
    }

    toString(): string {
        return this.items.toString();
    }
}
