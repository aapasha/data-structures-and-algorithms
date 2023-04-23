/**
 * Graph implementation using an adjacency list (as opposed to an adjacency matrix)
 * source: https://ricardoborges.dev/data-structures-in-typescript-graph
 * 
 * run this: npm run graph
 */
class GraphNode<T> {
    data: T;
    adjacent: GraphNode<T>[];
    comperator: (a: T, b: T) => number;

    constructor(data: T, comperator: (a: T, b: T) => number) {
        this.data = data;
        this.adjacent = [];
        this.comperator = comperator;
    }

    addAdjacentNdoe(node: GraphNode<T>): void {
        this.adjacent.push(node);
    }

    removeAdjacentNode(data: T): GraphNode<T> | null {
        const index = this.adjacent.findIndex(
            (node) => this.comperator(node.data, data) === 0
        );

        if (index > -1) {
            return this.adjacent.splice(index, 1)[0];
        }

        return null;
    }
}

class Graph<T> {
    nodes: Map<T, GraphNode<T>> = new Map();
    comperator: (a: T, b: T) => number;

    constructor(comperator: (a: T, b: T) => number) {
        this.comperator = comperator;
    }

    addNode(data: T): GraphNode<T> {
        // check if the data already exists
        let node = this.nodes.get(data);
        if (node) return node;

        // create new node with data and add to graph
        node = new GraphNode(data, this.comperator);
        this.nodes.set(data, node);

        return node;
    }

    addEdge(source: T, destination: T): void {
        // use addNode since it will get the node if it already exists
        // or create a new one if it doesn't
        const sourceNode = this.addNode(source);
        const destinationNode = this.addNode(destination);

        sourceNode.addAdjacentNdoe(destinationNode);
    }

    removeNode(data: T): GraphNode<T> | null {
        // check if data exists in graph
        const nodeToRemove = this.nodes.get(data);
        if (!nodeToRemove) return null;

        // remove the node from each node's adjacency list
        this.nodes.forEach((node) => {
            node.removeAdjacentNode(nodeToRemove.data);
        });

        // remove the node from the graph
        this.nodes.delete(data);

        return nodeToRemove;
    }
    
    removeEdge(source: T, destination: T): void {
        const sourceNode = this.nodes.get(source);
        const desinationNode = this.nodes.get(destination);

        if (sourceNode && desinationNode) {
            sourceNode.removeAdjacentNode(desinationNode.data);
        }
    }
}

const comparator = (x: number, y: number): number => {
    if (x < y) return -1;

    if (x > y) return 1;

    return 0;
}

const graph = new Graph(comparator);

graph.addNode(3);
graph.addNode(15);
graph.addEdge(15, 7);
graph.addEdge(3, 7);
graph.addEdge(3, 1);
console.log(graph);

graph.removeNode(7);
console.log(graph);

graph.removeEdge(3, 1);
console.log(graph);
