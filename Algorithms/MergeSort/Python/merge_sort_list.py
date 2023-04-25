from typing import List

def merge_sort_list(list: List[int]) -> List[int]:
    
    if len(list) <= 1:
        return
    
    mid = len(list) // 2
    left = list[:mid]
    right = list[mid:]

    # recursive call on each half
    merge_sort_list(left)
    merge_sort_list(right)

    # pointers for traversing the two halves
    i = j = 0

    # pointer for the main list
    k = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            list[k] = left[i]
            i += 1
        else:
            list[k] = right[j]
            j += 1
        k += 1
    
    # get any remaining values from either half
    while i < len(left):
        list[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        list[k] = right[j]
        j += 1
        k += 1

l = [32, 14, 40, 18, 7, 13, 28, 99, 7, 14, 3, 14]
print(l)
merge_sort_list(l)
print(l)
