export const dfsRecursive = (graph, currentNode, visited=[]) => {

    visited.push(currentNode);

    for (let neighbor of graph.get(currentNode)) {

        if (!visited.includes(neighbor)) {

            visited = dfsRecursive(graph, neighbor, visited);
        }
    }

    return visited;
}
