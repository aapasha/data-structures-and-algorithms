# Queue in Typescript

A queue can easily be created using typescript's array data structure. The implementation provided in `queue.ts` is really just a glorified verson of what is presented below. The following would suffice for solving most problems.

Creating a queue is simple with an array:

```
let queue = [];
```

To enqueue, just use the array `push` function:

```
queue.push(1);  // queue is now [1]
queue.push(2);  // queue is now [2, 5]
```

To dequeue, use the array `shift` function:

```
let i = queue.shift();  // queue is now [5]
```
