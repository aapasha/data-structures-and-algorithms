# Mergesort 

#### Big-O

###### Time complexity:
`O(nlog(n))`

###### Space complexity: 
`O(n)`

Source: [Big-O Cheat Sheet](https://www.bigocheatsheet.com)

#### Intro
In computer science, merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a [divide-and-conquer](/ImportantTopics/DivideAndCongquer/README.md) algorithm.

Conceptually, a merge sort works as follows:

1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)