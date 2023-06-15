import { bfs } from "./bfs.mjs";

const adjacencyMatrix = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [5]],
    [4, [6]],
    [5, [6]],
    [6, [7]],
    [7, []],
]);

console.log(bfs(adjacencyMatrix, 1));
