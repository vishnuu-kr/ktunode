---
title: "Depth First Search and Breadth First Search"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac46"
status: "completed"
scrapedAt: "2026-05-20T16:23:07.086Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Depth First Search (DFS) and Breadth First Search (BFS)

## Introduction

This module delves into fundamental graph and tree traversal algorithms: Depth First Search (DFS) and Breadth First Search (BFS). These algorithms are crucial for exploring and analyzing the structure of trees and graphs, and have numerous applications in computer science.

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the concepts of Depth First Search (DFS) and Breadth First Search (BFS).
*   Implement DFS and BFS algorithms for traversing graphs and trees.
*   Analyze the time and space complexity of DFS and BFS.
*   Apply DFS and BFS to solve practical problems, such as finding paths, connected components, and topological sorting.
*   Distinguish the differences between DFS and BFS and select the appropriate algorithm for a given problem.

## 1. Key Concepts and Definitions

*   **Graph:** A non-linear data structure consisting of nodes (vertices) and edges. Edges can be directed (one-way) or undirected (two-way).
*   **Tree:** A hierarchical data structure consisting of nodes connected by edges. It is a special type of graph with no cycles.  A tree has a root node, and each node can have zero or more child nodes.
*   **Vertex (Node):** A fundamental unit in a graph or tree that holds data.
*   **Edge:** A connection between two vertices.
*   **Directed Graph (Digraph):**  A graph where the edges have a direction.
*   **Undirected Graph:** A graph where the edges have no direction.
*   **Weighted Graph:** A graph where each edge has a weight or cost associated with it.
*   **Path:** A sequence of vertices connected by edges.
*   **Adjacency Matrix:**  A 2D array representation of a graph, where the entry at [i][j] indicates whether there is an edge between vertex i and vertex j.
*   **Adjacency List:** A representation of a graph using a list of adjacent vertices for each vertex.  This is generally more space-efficient than an adjacency matrix for sparse graphs (graphs with relatively few edges).
*   **Traversal:** The process of visiting all vertices in a graph or tree.
*   **Connected Component:** A subgraph in which any two vertices are connected to each other by paths, and which is connected to no additional vertices in the supergraph.
*   **Queue:** A data structure that follows the First-In, First-Out (FIFO) principle.
*   **Stack:** A data structure that follows the Last-In, First-Out (LIFO) principle.
*   **Visited Array/Set:** A data structure (usually an array or set) used to keep track of which nodes have already been processed to avoid cycles and infinite loops.

## 2. Depth First Search (DFS)

*   **Definition:**  DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack (implicitly through recursion or explicitly using a stack data structure) to keep track of the vertices to be visited.

*   **Algorithm:**

    1.  Start at a chosen vertex (the root).
    2.  Mark the current vertex as visited.
    3.  For each unvisited neighbor of the current vertex:
        *   Recursively call DFS on that neighbor.
    4.  (If using iterative approach) Pop a vertex from the stack and repeat from step 2.

*   **Implementation (Recursive - Python):**

    ```python
    def dfs_recursive(graph, vertex, visited):
        """
        Performs Depth First Search recursively.

        Args:
            graph: An adjacency list representation of the graph.
            vertex: The starting vertex.
            visited: A set to keep track of visited vertices.
        """
        visited.add(vertex)
        print(vertex, end=" ")  # Process the vertex (e.g., print it)

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs_recursive(graph, neighbor, visited)

    # Example Usage:
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }

    visited = set()
    print("DFS (Recursive):")
    dfs_recursive(graph, 'A', visited)
    print()
    ```

*   **Implementation (Iterative - Python):**

    ```python
    def dfs_iterative(graph, start_vertex):
        """
        Performs Depth First Search iteratively.

        Args:
            graph: An adjacency list representation of the graph.
            start_vertex: The starting vertex.
        """
        visited = set()
        stack = [start_vertex]

        while stack:
            vertex = stack.pop()

            if vertex not in visited:
                visited.add(vertex)
                print(vertex, end=" ")  # Process the vertex

                # Add neighbors in reverse order to maintain the traversal order
                neighbors = sorted(graph[vertex], reverse=True) # sort is not usually necessary but can enforce a consistent order
                for neighbor in neighbors:
                    if neighbor not in visited:
                        stack.append(neighbor)

    # Example Usage:
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }

    print("DFS (Iterative):")
    dfs_iterative(graph, 'A')
    print()
    ```

*   **Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges. This is because in the worst-case scenario, we visit all vertices and traverse all edges.
*   **Space Complexity:**
    *   Recursive: O(V) in the worst case due to the call stack (height of the tree or graph).
    *   Iterative: O(V) in the worst case for the `visited` set and the stack.
*   **Applications:**
    *   Finding connected components.
    *   Path finding (e.g., maze solving).
    *   Topological sorting (for directed acyclic graphs).
    *   Cycle detection.
    *   Solving puzzles with only one solution (e.g., Sudoku).

## 3. Breadth First Search (BFS)

*   **Definition:** BFS is a graph traversal algorithm that explores all the neighbors of the current vertex before moving on to the next level of neighbors. It uses a queue to keep track of the vertices to be visited.

*   **Algorithm:**

    1.  Start at a chosen vertex (the root).
    2.  Enqueue the starting vertex.
    3.  Mark the starting vertex as visited.
    4.  While the queue is not empty:
        *   Dequeue a vertex from the queue.
        *   Process the vertex (e.g., print it).
        *   For each unvisited neighbor of the dequeued vertex:
            *   Enqueue the neighbor.
            *   Mark the neighbor as visited.

*   **Implementation (Python):**

    ```python
    from collections import deque

    def bfs(graph, start_vertex):
        """
        Performs Breadth First Search.

        Args:
            graph: An adjacency list representation of the graph.
            start_vertex: The starting vertex.
        """
        visited = set()
        queue = deque([start_vertex])

        visited.add(start_vertex)

        while queue:
            vertex = queue.popleft()
            print(vertex, end=" ")  # Process the vertex

            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

    # Example Usage:
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }

    print("BFS:")
    bfs(graph, 'A')
    print()
    ```

*   **Time Complexity:** O(V + E), where V is the number of vertices and E is the number of edges.
*   **Space Complexity:** O(V) in the worst case, as the queue might contain all vertices in the graph.
*   **Applications:**
    *   Finding the shortest path in an unweighted graph.
    *   Finding all nodes within a certain distance from a starting node.
    *   Web crawling.
    *   Social network analysis (finding friends of friends).
    *   GPS navigation (finding nearby locations).

## 4. Differences Between DFS and BFS

| Feature          | Depth First Search (DFS)               | Breadth First Search (BFS)               |
| ---------------- | -------------------------------------- | -------------------------------------- |
| Data Structure   | Stack (implicitly or explicitly)      | Queue                                   |
| Exploration      | Explores deeply along each branch      | Explores all neighbors at each level   |
| Path Finding     | May not find the shortest path         | Finds the shortest path (unweighted)   |
| Space Complexity | Can be lower for certain graphs         | Can be higher for certain graphs        |
| Implementation   | Can be implemented recursively or iteratively | Typically implemented iteratively      |
| Use Cases        | Topological sorting, cycle detection     | Shortest path, finding nearest nodes   |

## 5. Examples and Applications

**Example 1: Finding a Path (Maze Solving)**

Imagine a maze represented as a graph where each cell is a vertex, and edges connect adjacent cells that are not walls.

*   DFS can be used to find *any* path out of the maze. It may not be the shortest path.
*   BFS can be used to find the *shortest* path out of the maze (assuming each step has equal cost).

**Example 2: Connected Components**

Given an undirected graph, you want to find the number of connected components.

*   Both DFS and BFS can be used to solve this problem.  You can iterate through each vertex in the graph.  If the vertex has not been visited, run DFS (or BFS) starting from that vertex.  Each time you run DFS/BFS, you have discovered a new connected component.

**Example 3: Topological Sorting**

Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge uv, vertex u comes before vertex v in the ordering.

*   DFS is a natural fit for topological sorting. The algorithm involves visiting each node in the graph and using the finishing times of the nodes as the basis for the sorted order.  Nodes that finish later in the DFS are placed earlier in the topological sort.

**Example 4: Shortest Path in an Unweighted Graph**

BFS is ideal for finding the shortest path between two nodes in an unweighted graph because it explores the graph layer by layer.

## 6. Practice Questions and Exercises

**Question 1:**

Given the following graph represented as an adjacency list:

```
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
```

What is the DFS traversal starting from node 'A'?  What is the BFS traversal starting from node 'A'?  (Assume neighbors are visited in alphabetical order).

**Answer:**

*   DFS (starting from 'A'): A B D E F C
*   BFS (starting from 'A'): A B C D E F

**Question 2:**

Write a function to detect if a cycle exists in a directed graph using DFS.

**Answer (Python):**

```python
def detect_cycle_dfs(graph):
    """
    Detects if a cycle exists in a directed graph using DFS.

    Args:
        graph: An adjacency list representation of the graph.

    Returns:
        True if a cycle exists, False otherwise.
    """
    visited = set()
    recursion_stack = set()

    def dfs(vertex):
        visited.add(vertex)
        recursion_stack.add(vertex)

        for neighbor in graph[vertex]:
            if neighbor in recursion_stack:
                return True  # Cycle detected
            if neighbor not in visited:
                if dfs(neighbor):
                    return True

        recursion_stack.remove(vertex)  # Backtrack
        return False

    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex):
                return True

    return False

# Example Usage:
graph_with_cycle = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
}

graph_without_cycle = {
    'A': ['B'],
    'B': ['C'],
    'C': []
}

print("Cycle in graph_with_cycle:", detect_cycle_dfs(graph_with_cycle)) # True
print("Cycle in graph_without_cycle:", detect_cycle_dfs(graph_without_cycle)) # False
```

**Question 3:**

When would you prefer BFS over DFS, and vice versa?  Explain with examples.

**Answer:**

*   **BFS is preferred when:** You need to find the shortest path in an unweighted graph or find the nearest nodes to a given starting node. For example, finding the closest friends in a social network or the shortest route in a city map (assuming all roads have equal length).
*   **DFS is preferred when:**  You need to explore a deep path quickly or detect cycles in a graph. Also, DFS is suitable for problems like topological sorting in directed acyclic graphs. For example, solving a maze where any path is acceptable, or determining the order of tasks to be completed where certain tasks depend on others. DFS uses less memory if the average path length is low compared to the total number of vertices because DFS only has to store the current path as well as the adjacent unvisited nodes on the stack whereas BFS must store all connected and adjacent unvisited nodes in a queue.

## 7. Important Points to Remember

*   DFS uses a stack (explicitly or implicitly through recursion) to explore deeply along each branch.
*   BFS uses a queue to explore all neighbors at each level before moving to the next level.
*   DFS can be implemented recursively or iteratively.
*   BFS is typically implemented iteratively.
*   The time complexity of both DFS and BFS is O(V + E).
*   BFS finds the shortest path in an unweighted graph.
*   DFS is often used for topological sorting and cycle detection.
*   Choose the algorithm based on the specific problem requirements and graph characteristics.
*   Always consider the space complexity implications, especially for large graphs.
*   Using a 'visited' data structure (set or array) is critical to prevent infinite loops in cyclic graphs.
