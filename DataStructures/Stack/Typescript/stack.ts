export class Stack<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }
    
    push(item: T): void {
        this.items.push(item);
    }

    pop(): T {
        let item = null;
        if (this.isEmpty) {
            return null;
        }
        return this.items.pop();
    }

    peek(): T | void {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length-1];
    }

    size(): number {
        return this.items.length;
    }

    toString(): string {
        return this.items.toString();
    }
}
