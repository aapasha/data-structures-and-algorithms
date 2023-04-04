from typing import TypeVar, Generic

T = TypeVar('T')

class Queue(Generic[T]):

    def __init__(self) -> None:
        self.items: list[T] = []
    
    def enqueue(self, item: T) -> None:
        self.items.append(item)

    def dequeue(self) -> T:
        return self.items.pop(0)
    
    def is_empty(self) -> bool:
        return len(self.items) == 0
    
    def peek(self) -> T | None:
        if not self.is_empty:
            return self.items[0]
        return None
    
    def size(self) -> int:
        return len(self.items)
    
    def to_string(self) -> str:
        return str(self.items)