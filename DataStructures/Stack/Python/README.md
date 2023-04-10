# Stack in Python

A stack can easily be created using Python's list data structure. The implementation provided in `stack.py` is really just a glorified version of what is presented below. The following would suffice for solving most problems.

Creating a stack is simple with a list:

```
stack = [];
```

To push, just use the list `append` function:

```
stack.append(1);  // stack is now [1]
stack.append(2);  // stack is now [1, 2]
```

To pop, use the list `pop` function:

```
i = stack.pop();  // stack is now [1]
```
