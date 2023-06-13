# Priority Queue 

In computer science, a priority queue is an abstract data-type similar to a regular queue or stack data structure. Each element in a priority queue has an associated priority. In a priority queue, elements with high priority are served before elements with low priority. In some implementations, if two elements have the same priority, they are served in the same order that they were enqueued in. In other implementations, the order of elements with the same priority is undefined.

While priority queues are often implemented using heaps, they are conceptually distinct from heaps. A priority queue is an abstract data structure like a list or a map; just as a list can be implemented with a linked list or with an array, a priority queue can be implemented with a heap or another method such as an unordered array. 

[Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)


Priority queue can be implemented using an array, a linked list, a heap data structure, or a binary search tree. Among these data structures, heap data structure provides an efficient implementation of priority queues.

A comparative analysis of different implementations of priority queue is given below.

| Operations | Peek | Insert | Delete |
| -----------| -----| -------| -------|
| Linked List | `O(1)` | `O(n)` | `O(1)`|
| Binary Heap | `O(1)` | `O(log n)` | `O(log n)`|
| Binary Search Tree | `O(1)` | `O(log n)` | `O(log n)`|


[Programiz](https://www.programiz.com/dsa/priority-queue)