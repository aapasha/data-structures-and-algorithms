from typing import TypeVar, Generic, List, Optional

T = TypeVar('T')


class Node(Generic[T]):

    def __init__(self, data: T) -> None:
        
        self.data = data
        self.next = None 


class LinkedList:

    def __init__(self, data: List[T]) -> None:
        
        self.head = self.__add_at_init(data)
    
    def __add_at_init(self, data: List[T]):
        
        dummy = Node(None)
        cur_node = dummy

        for datum in data:
            cur_node.next = Node(datum)
            cur_node = cur_node.next
        
        return dummy.next
    
    def __link_multiple_nodes(self, data: List[T]) -> List[Node]:

        dummy = Node(None)
        cur_node = dummy

        for datum in data:
            cur_node.next = Node(datum)
            cur_node = cur_node.next
        
        return [dummy.next, cur_node]

    
    def addToStart(self, data: List[T]) -> None:

        head, end = self.__link_multiple_nodes(data)

        if self.head.data != None:
            end.next = self.head
        
        self.head = head
    
    def addToEnd(self, data: List[T]) -> Node:

        if self.head.data == None:
            return self.addToStart(data)
        
        old_end = self.head
        
        while old_end.next:
            old_end = old_end.next
        
        head, end = self.__link_multiple_nodes(data)

        old_end.next = head
        
        return head
    
    def remove(self, data: T) -> Optional[Node]:

        node = None

        if self.head.data == data: 
            if self.head.next:
                node = self.head
                self.head = self.head.next
                return node
            else:
                self.head.data = None
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
