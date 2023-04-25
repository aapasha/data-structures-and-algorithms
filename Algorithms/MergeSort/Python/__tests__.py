import unittest

from DataStructures.LinkedList.Python.linked_list import LinkedList
from merge_sort_list import merge_sort_list
from merge_sort_linked_list import merge_sort_linked_list


class TestMergeSort(unittest.TestCase):

    def test_sort_list(self):
        
        ll = [32, 14, 40, 18, 7, 13, 28, 99, 7, 14, 3, 14]
        merge_sort_list(ll)
        self.assertEqual(ll, [3, 7, 7, 13, 14, 14, 14, 18, 28, 32, 40, 99])

        ll = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]
        merge_sort_list(ll)
        self.assertEqual(ll, [-5, -4, -3, -2, -1, 0, 1 , 2, 3, 4, 5])
    
    def test_sort_same_element_list(self):

        ll = [1,1,1,1,1]
        merge_sort_list(ll)
        self.assertEqual(ll, [1,1,1,1,1])
    
    def test_sort_single_element_list(self):

        ll = [1]
        merge_sort_list(ll)
        self.assertEqual(ll, [1])

    def test_sort_linked_list(self):

        ll = LinkedList([4, 5, 2, 3, 1])
        ll.head = merge_sort_linked_list(ll.head)
        
        cur_node = ll.head
        for i in range(1, 6):
            self.assertEqual(cur_node.data, i)
            cur_node = cur_node.next


# unittest.main()
