export const dfsIterative = (graph, startNode) => {

    let stack = [startNode];
    let visited = [];

    while (stack.length > 0) {

        let node = stack.pop();

        if (visited.includes(node)) {

            continue;
        }

        visited.push(node);

        for (let neighbor of graph.get(node)) {

            stack.push(neighbor);
        }
    }

    return visited;
}
