
def dfs(graph, current_node, visited=[]):
    
    visited.append(current_node)

    for neighbor in graph[current_node]:
        if neighbor not in visited:
            visited = dfs(graph, neighbor, visited)
    return visited


'''
Examples
'''

# an adjacency matrix is a square matrix used to represent a finite graph
# The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph
adjacency_matrix = {1: [2, 3], 2: [4, 5],
                    3: [5], 4: [6], 5: [6],
                    6: [7], 7: []}

print(dfs(adjacency_matrix, 1))
