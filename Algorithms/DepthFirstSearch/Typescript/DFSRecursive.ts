/**
 to run this: npm run dfs-rec 
 */

const dfsRecursive = (
    graph: Map<number, Array<number>>,
    currentVertex: number,
    visited: number[] = []
): number[] => {
    visited.push(currentVertex);

    for (let neighbor of graph.get(currentVertex)) {
        if (!visited.includes(neighbor)) {
            visited = dfsRecursive(graph, neighbor, visited);
        }
    }

    return visited;
};

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
