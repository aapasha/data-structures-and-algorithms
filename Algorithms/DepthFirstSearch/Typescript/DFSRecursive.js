/**
 to run this: npm run ts-dfs-rec
 */
var dfsRecursive = function (graph, currentVertex, visited) {
    if (visited === void 0) { visited = []; }
    visited.push(currentVertex);
    for (var _i = 0, _a = graph.get(currentVertex); _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (!visited.includes(neighbor)) {
            visited = dfsRecursive(graph, neighbor, visited);
        }
    }
    return visited;
};
var adjacencyMatrix = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [5]],
    [4, [6]],
    [5, [6]],
    [6, [7]],
    [7, []],
]);
console.log(dfsRecursive(adjacencyMatrix, 1));
