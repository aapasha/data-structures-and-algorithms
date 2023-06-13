from typing import List, Dict, Tuple
from collections import defaultdict
import heapq


def dijkstra1(graph, startingNode):

    # keep track of nodes that have already been visited
	visited = set()

    # priority queue and push a tuple (0, source node) in the 
    # Priority Queue (heap), representing (the cost to the 
    # node from the source node, the node itself)
	pq = []
	heapq.heappush(pq, (0, startingNode))

    # keep track of minimum costs for reaching different 
    # nodes from the source node, and initialize the cost for 
    # the source node as 0
	distances = defaultdict(lambda: float('inf'))
	distances[startingNode] = 0
 
	while pq:

		# go greedily by always extending the shorter cost nodes first
		_, node = heapq.heappop(pq)
		visited.add(node)
 
		for neighbor, weight in graph[node].items():
			if neighbor in visited:	continue
				
			cur_distance = distances[node] + weight
			if cur_distance < distances[neighbor]:
				distances[neighbor] = cur_distance
				heapq.heappush(pq, (cur_distance, neighbor))
        
	return distances


def dijkstra2(graph, starting_vertex):

    # set default distance of 'infinity' for ever vertex 
    # except for the starting vertex which has a distance 
    # of zero of course
    distances = {vertex: float('infinity') for vertex in graph}
    distances[starting_vertex] = 0

    # priority queue based on distance
    pq = [(0, starting_vertex)]

    while len(pq) > 0:

        cur_distance, cur_vertex = heapq.heappop(pq)

        # nodes can get added to the priority queue multiple times
        # we only process a vertex the first time we remove it from
        # the priority queue
        if cur_distance > distances[cur_vertex]:
            continue

        for neighbor, weight in graph[cur_vertex].items():
            distance = cur_distance + weight                       

            # only consider this new path if its better than any
            # path we've already found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances


graph = {
    'U': {'V': 2, 'W': 5, 'X': 1},
    'V': {'U': 2, 'X': 2, 'W': 3},
    'W': {'V': 3, 'U': 5, 'X': 3, 'Y': 1, 'Z': 5},
    'X': {'U': 1, 'V': 2, 'W': 3, 'Y': 1},
    'Y': {'X': 1, 'W': 1, 'Z': 1},
    'Z': {'W': 5, 'Y': 1},
}

print(dijkstra1(graph, 'X'))
print(dijkstra2(graph, 'X'))