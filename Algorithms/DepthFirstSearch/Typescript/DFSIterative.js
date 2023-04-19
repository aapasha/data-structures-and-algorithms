/**
 to run this: npm run def-iter
 */
var dfsIterative = function (graph, currentVertex) {
    var stack = [currentVertex], visited = [];
    while (stack.length > 0) {
        var vertex = stack.pop();
        if (visited.includes(vertex)) {
            continue;
        }
        visited.push(vertex);
        for (var _i = 0, _a = graph.get(vertex); _i < _a.length; _i++) {
            var neighbor = _a[_i];
            stack.push(neighbor);
        }
    }
    return visited;
};
var adjacencyMatrix1 = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [5]],
    [4, [6]],
    [5, [6]],
    [6, [7]],
    [7, []],
]);
console.log(dfsIterative(adjacencyMatrix1, 1));
