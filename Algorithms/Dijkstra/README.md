# Dijkstra's Algorithm

Dijkstra's algorithm (/ˈdaɪkstrəz/ DYKE-strəz) is an algorithm for finding the shortest paths between nodes in a weighted graph.

For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined.

[Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

##### Time Complexity

Building the distances dictionary takes `O(V)` time since we add every vertex in the graph to the dictionary.

The while loop is executed once for every entry that gets added to the priority queue. An entry can only be added when we explore an edge, so there are at most `O(E)` iterations of the while loop.

The for loop is executed at most once for every vertex, since the `current_distance > distances[current_vertex]` check ensures that we only process a vertex once. The for loop iterates over outgoing edges, so among all iterations of the while loop, the body of the for loop executes at most `O(E)` times.

Finally, if we consider that each priority queue operation (adding or removing an entry) is `O(logE)`, we conclude that the total running time is `O(V+ElogE)`.

[bradfieldcs](https://bradfieldcs.com/algos/graphs/dijkstras-algorithm/)