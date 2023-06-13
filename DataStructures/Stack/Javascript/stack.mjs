export class Stack {
    items;
    
    constructor () {
        this.items = [];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }
    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length-1];
    }

    size() {
        return this.items.length;
    }
}
