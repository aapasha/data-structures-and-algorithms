from typing import TypeVar, Generic, List

T = TypeVar('T')

class Node(Generic[T]):

    def __init__(self, data: T) -> None:
        
        self.data = data
        self.next = None 

class LinkedList:

    def __init__(self, data: T) -> None:
        
        self.head = Node(data)
    
    def addToStart(self, data: List[T]) -> None:

        dummy = Node(None)
        cur_node = dummy

        for datum in data:
            cur_node.next = Node(datum)
            cur_node = cur_node.next
        
        cur_node.next = self.head
        self.head = dummy.next
    
    def addToEnd(self, data: List[T]) -> Node:
        
        old_end = self.head
        
        while old_end.next:
            old_end = old_end.next

        dummy = Node(None)
        cur_node = dummy
        
        for datum in data:
            cur_node.next = Node(datum)
            cur_node = cur_node.next
        
        old_end.next = dummy.next
        
        return dummy.next
    
    def remove(self, data: T) -> Node | None:

        node = None

        if self.head.data == data:
            node = self.head
            self.head = self.head.next
            return node
        else:
            prev_node = self.head
            cur_node = self.head.next
            while cur_node:
                if cur_node.data == data:
                    prev_node.next = cur_node.next
                    return cur_node
                prev_node = prev_node.next
                cur_node = cur_node.next

        return node 
    
    def length(self) -> int:
        
        length = 0
        cur_node = self.head
        
        while cur_node:
            length += 1
            cur_node = cur_node.next
        
        return length
    
    def printList(self) -> None:
        
        print(self.__class__.__name__, end=' | ')
        cur_node = self.head
        
        while cur_node:
            if cur_node != self.head:
                print('-->', end=' ')
            
            print(str(cur_node.data), end=' ')
            
            cur_node = cur_node.next
        
        print('|')
