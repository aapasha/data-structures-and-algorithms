
class LinkedList<T> {
    item: T;
    next: LinkedList<T> | null; 

    constructor(item: T) {
        this.item = item;
        this.next = null;
    }

    
}