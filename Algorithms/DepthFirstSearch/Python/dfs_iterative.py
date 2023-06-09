
def dfs(graph, node):
    
    stack, visited = [node], []

    while stack:
        cur_node = stack.pop()
        
        if cur_node in visited:
            continue

        visited.append(cur_node)

        for neighbor in graph[cur_node]:
            stack.append(neighbor)
    
    return visited


# an adjacency matrix is a square matrix used to represent a finite graph
# The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph
adjacency_matrix = {1: [2, 3, 7, 9], 
                    2: [4, 5],
                    3: [5], 
                    4: [6], 
                    5: [6],
                    6: [7], 
                    7: [8, 10],
                    8: [],
                    9: [],
                    10: [11],
                    11: []}

print(dfs(adjacency_matrix, 1))
