# adjacency list representation of a weighted Graph in Python
# source: https://algorithmtutor.com/Data-Structures/Graph/Graph-Representation-Adjacency-List-and-Matrix/


from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(dict)

    def add_edge(self, u, v, weight = 1, directed = True):
        self.graph[u][v] = weight
        if not directed:
            self.graph[v][u] = weight

    def __str__(self):
        to_return = ''
        for vertex in self.graph:
            to_return += str(vertex) + ': '
            for edge in self.graph[vertex]:
                to_return +=  '(' + str(edge) + ', ' + str(self.graph[vertex][edge]) + ')'
                to_return += '   '

            to_return += '\n'
        return to_return

g = Graph()
g.add_edge(1, 2, 7, False)
g.add_edge(1, 3, 2, False)
g.add_edge(2, 3, 1, False)
g.add_edge(2, 4, 5, False)
g.add_edge(2, 5, 3, False)
g.add_edge(3, 5, 11, False)
g.add_edge(4, 5, 10, False)
g.add_edge(4, 6, 7, False)
g.add_edge(5, 6, 4, False)
print(g)