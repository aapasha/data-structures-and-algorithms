import unittest
from linked_list import LinkedList

class TestLinkedList(unittest.TestCase):

    def test_create_list(self):
        ll = LinkedList(1)
        self.assertEqual(ll.head.data, 1)
        self.assertEqual(ll.head.next, None)
    
    def test_add_to_start(self):
        ll = LinkedList(1)
        ll.addToStart([0])
        self.assertEqual(ll.head.data, 0)
        self.assertEqual(ll.head.next.data, 1)

    def test_add_list_to_start(self):
        ll = LinkedList(3)
        ll.addToStart([0,1,2])
        ll.printList()
    
    def test_add_to_end(self):
        ll = LinkedList(0)
        ll.addToEnd([1])
        self.assertEqual(ll.head.next.data, 1)

    def test_remove(self):
        ll = LinkedList(1)
        ll.addToEnd([2,3])
        ll.addToStart([0])
        self.assertEqual(ll.head.next.data, 1)
        
        ll.remove(1)
        self.assertEqual(ll.head.next.data, 2)

        ll.remove(1) # does nothing
        self.assertEqual(ll.head.next.data, 2)

        ll.remove(3)
        self.assertEqual(ll.head.next.next, None)

        ll.remove(0)
        self.assertEqual(ll.head.data, 2)
    
    def test_length(self):
        ll = LinkedList(1)
        ll.addToEnd([2,3])
        self.assertEqual(ll.length(), 3)

unittest.main()