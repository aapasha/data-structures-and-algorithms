from typing import List


def mergesort_array(array: List[int]) -> List[int]:
    
    if len(array) <= 1:
        return
    
    mid = len(array) // 2
    left = array[:mid]
    right = array[mid:]

    # recursive call on each half
    mergesort_array(left)
    mergesort_array(right)

    # pointers for traversing the two halves
    i = j = 0

    # pointer for the main list
    k = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1
        k += 1
    
    # get any remaining values from either half
    while i < len(left):
        array[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        array[k] = right[j]
        j += 1
        k += 1
