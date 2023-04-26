from DataStructures.LinkedList.Python.linked_list import Node, LinkedList
from typing import Tuple


def mergesort_linked_list(head: Node) -> Node:

    if head is None or head.next is None:
        return head
    
    left, right = split_list_in_half(head)

    left = mergesort_linked_list(left)
    right = mergesort_linked_list(right)

    result = sort_and_merge(left, right) 

    return result


def split_list_in_half(head: Node) -> Tuple[Node, Node]:

    (slow, fast) = (head, head.next)

    while fast:
        fast = fast.next
        if fast:
            slow = slow.next
            fast = fast.next
    
    right_head = slow.next
    slow.next = None

    return head, right_head
    

def sort_and_merge(left: Node, right: Node) -> Node:
    
    if left is None:
        return right
    elif right is None:
        return left
     
    if left.data <= right.data:
        result = left
        result.next = sort_and_merge(left.next, right)
    else:
        result = right
        result.next = sort_and_merge(left, right.next)
    
    return result
