// run this playground: npm run ts-queue

import { Queue } from "./queue";

const q = new Queue();

q.enqueue(1);
q.enqueue(2);

console.log(q.toString());

q.dequeue();

console.log(q.toString());
