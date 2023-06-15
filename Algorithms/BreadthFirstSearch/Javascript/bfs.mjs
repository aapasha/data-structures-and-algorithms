export const bfs = (graph, startNode) => {

    let queue = [startNode];
    let visited = [];

    while (queue.length > 0) {

        const node = queue.shift(0);

        if (visited.includes(node)) {

            continue;
        }

        visited.push(node);

        for (let neighbor of graph.get(node)) {

            queue.push(neighbor);
        }
    }

    return visited;
}
