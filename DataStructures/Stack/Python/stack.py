from typing import TypeVar, Generic

T = TypeVar('T')

class stack(Generic[T]):

    def __init__(self) -> None:
        self.items = []

    def is_empty(self) -> bool:
        return len(self.items) == 0
    
    def push(self, item: T) -> None:
        self.items.append(item)
    
    def pop(self) -> T:
        return self.items.pop()
    
    def peek(self) -> T:
        if not self.is_empty:
            return self.items[-1]
        return None
    
    def size(self) -> int:
        return len(self.items)
    
    def to_string(self) -> str:
        return str(self.items)
