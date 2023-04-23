/**
 * Graph implementation using an adjacency list (as opposed to an adjacency matrix)
 * source: https://ricardoborges.dev/data-structures-in-typescript-graph
 *
 * run this: npm run graph
 */
var GraphNode = /** @class */ (function () {
    function GraphNode(data, comperator) {
        this.data = data;
        this.adjacent = [];
        this.comperator = comperator;
    }
    GraphNode.prototype.addAdjacentNdoe = function (node) {
        this.adjacent.push(node);
    };
    GraphNode.prototype.removeAdjacentNode = function (data) {
        var _this = this;
        var index = this.adjacent.findIndex(function (node) { return _this.comperator(node.data, data) === 0; });
        if (index > -1) {
            return this.adjacent.splice(index, 1)[0];
        }
        return null;
    };
    return GraphNode;
}());
var Graph = /** @class */ (function () {
    function Graph(comperator) {
        this.nodes = new Map();
        this.comperator = comperator;
    }
    Graph.prototype.addNode = function (data) {
        // check if the data already exists
        var node = this.nodes.get(data);
        if (node)
            return node;
        // create new node with data and add to graph
        node = new GraphNode(data, this.comperator);
        this.nodes.set(data, node);
        return node;
    };
    Graph.prototype.addEdge = function (source, destination) {
        // use addNode since it will get the node if it already exists
        // or create a new one if it doesn't
        var sourceNode = this.addNode(source);
        var destinationNode = this.addNode(destination);
        sourceNode.addAdjacentNdoe(destinationNode);
    };
    Graph.prototype.removeNode = function (data) {
        // check if data exists in graph
        var nodeToRemove = this.nodes.get(data);
        if (!nodeToRemove)
            return null;
        // remove the node from each node's adjacency list
        this.nodes.forEach(function (node) {
            node.removeAdjacentNode(nodeToRemove.data);
        });
        // remove the node from the graph
        this.nodes.delete(data);
        return nodeToRemove;
    };
    Graph.prototype.removeEdge = function (source, destination) {
        var sourceNode = this.nodes.get(source);
        var desinationNode = this.nodes.get(destination);
        if (sourceNode && desinationNode) {
            sourceNode.removeAdjacentNode(desinationNode.data);
        }
    };
    Graph.prototype.toString = function () {
        var str = '';
        this.nodes.forEach(function (node) {
            str = str + "".concat(node.data, " => {\n\tdata: ").concat(node.data, ",\n\tadjacent: ").concat(node.adjacent.toString(), "\n},\n");
        });
        return str;
    };
    return Graph;
}());
var comparator = function (x, y) {
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
};
var graph = new Graph(comparator);
graph.addNode(3);
graph.addNode(15);
graph.addEdge(15, 7);
graph.addEdge(3, 7);
graph.addEdge(3, 1);
console.log(graph.toString());
graph.removeNode(7);
console.log(graph);
graph.removeEdge(3, 1);
console.log(graph);
