// run command: npm run js-stack

import { Stack } from "./stack.mjs";

const stack = new Stack();
console.log(stack.isEmpty());
stack.push('a');
stack.push('b');
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
