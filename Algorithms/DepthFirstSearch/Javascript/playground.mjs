import { dfsRecursive } from "./DFSRecursive.mjs";
import { dfsIterative } from "./dfsIterative.mjs";

const adjacencyMatrix = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [5]],
    [4, [6]],
    [5, [6]],
    [6, [7]],
    [7, []],
]);

console.log(dfsRecursive(adjacencyMatrix, 1));
console.log(dfsIterative(adjacencyMatrix, 1));
