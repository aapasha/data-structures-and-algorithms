/**
 to run this: npm run ts-def-iter
 */

const dfsIterative = (
    graph: Map<number, number[]>,
    currentVertex: number
): number[] => {
    let stack = [currentVertex],
        visited = [];

    while (stack.length > 0) {
        let vertex = stack.pop();
        if (visited.includes(vertex)) {
            continue;
        }
        visited.push(vertex);
        for (let neighbor of graph.get(vertex)) {
            stack.push(neighbor);
        }
    }

    return visited;
};

const adjacencyMatrix1 = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [5]],
    [4, [6]],
    [5, [6]],
    [6, [7]],
    [7, []],
]);

console.log(dfsIterative(adjacencyMatrix1, 1));
