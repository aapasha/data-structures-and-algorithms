from typing import List

def mergesort_list(lst: List[int]) -> List[int]:

    low = 0
    high = len(lst) - 1

    # sort list using a temporary list
    temp = 