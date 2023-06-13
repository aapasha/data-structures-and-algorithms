"use strict";
// run this playground: npm run ts-queue
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("./queue");
var q = new queue_1.Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.toString());
q.dequeue();
console.log(q.toString());
