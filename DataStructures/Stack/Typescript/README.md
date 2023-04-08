# Stack in Typescript

A stack can easily be created using typescript's array data structure. The implementation provided in `stack.ts` is really just a glorified version of what is presented below. The following would suffice for solving most problems.

Creating a stack is simple with an array:

```
let stack = [];
```

To push, just use the array `push` function:

```
stack.push(1);  // stack is now [1]
stack.push(2);  // stack is now [1, 2]
```

To pop an element, use the array `pop` function:

```
let i = stack.pop();  // stack is now [1]
```
