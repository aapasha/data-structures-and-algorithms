# Queue in Python

A queue can easily be created using Python's list data structure. The implementation provided in `queue.py` is really just a glorified version of what is presented below. The following would suffice for solving most problems.

Creating a queue is simple with a list:

```
queue = [];
```

To enqueue, just use the list `append` function:

```
queue.append(1);  // queue is now [1]
queue.append(2);  // queue is now [1, 2]
```

To dequeue, use the list `pop` function:

```
i = queue.pop(0);  // queue is now [2]
```
