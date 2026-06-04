---
title: "Trees and Graphs"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3a"
status: "completed"
scrapedAt: "2026-05-20T16:22:58.238Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Topic: Trees and Graphs

**Learning Outcomes:**

*   Understand the fundamental concepts of trees and graphs.
*   Distinguish between different types of trees (e.g., binary trees, binary search trees, AVL trees, B-trees).
*   Implement basic tree traversal algorithms (e.g., inorder, preorder, postorder, breadth-first).
*   Understand different graph representations (e.g., adjacency matrix, adjacency list).
*   Implement basic graph traversal algorithms (e.g., depth-first search, breadth-first search).
*   Apply tree and graph data structures to solve real-world problems.
*   Analyze the time and space complexity of tree and graph algorithms.

## I. Trees

### A. Key Concepts and Definitions

*   **Tree:** A hierarchical data structure consisting of nodes connected by edges.  It has a root node and zero or more subtrees.
*   **Node:** A fundamental unit in a tree, containing data and pointers to its children.
*   **Edge:** A connection between two nodes in a tree.
*   **Root:** The topmost node in a tree. It has no parent.
*   **Child:** A node directly connected to another node when moving away from the root.
*   **Parent:** The node directly above another node in the hierarchy.
*   **Sibling:** Nodes sharing the same parent.
*   **Leaf:** A node with no children.
*   **Internal Node:** A node that has at least one child.
*   **Path:** A sequence of nodes and edges connecting a node to a descendant.
*   **Depth of a Node:** The number of edges from the root to the node.
*   **Height of a Node:** The number of edges from the node to the deepest leaf.
*   **Height of a Tree:** The height of the root node.
*   **Level:** All nodes at the same depth form a level.  The root is at level 0.
*   **Subtree:** A tree formed by a node and all its descendants.
*   **Binary Tree:** A tree where each node has at most two children, referred to as the left child and the right child.
*   **Binary Search Tree (BST):** A binary tree where for each node:
    *   All nodes in the left subtree have values less than the node's value.
    *   All nodes in the right subtree have values greater than the node's value.
*   **Complete Binary Tree:**  A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
*   **Full Binary Tree:** A binary tree in which every node has either 0 or 2 children.
*   **Perfect Binary Tree:**  A binary tree in which all internal nodes have two children *and* all leaves are at the same level. A perfect binary tree of height `h` has 2^(h+1) - 1 nodes.
*   **AVL Tree:**  A self-balancing binary search tree.  For every node, the height difference between its left and right subtrees is at most 1.
*   **B-Tree:** A self-balancing tree data structure that is commonly used for disk-based storage. It's optimized for read and write operations on large data sets. B-Trees have a minimum and maximum degree, affecting the number of children a node can have.

### B. Types of Trees

*   **Binary Trees:** As defined above.  Commonly used for representing hierarchical relationships and for efficient searching (BSTs).
*   **Binary Search Trees (BSTs):** As defined above. Provide efficient search, insertion, and deletion operations (on average).
*   **AVL Trees:** As defined above. Guaranteed O(log n) search, insert, and delete times due to self-balancing.  Complex to implement.
*   **B-Trees:** As defined above.  Optimized for disk access. Used in databases and file systems.
*   **Heaps (Min-Heap, Max-Heap):**  Tree-based data structures that satisfy the heap property.  In a Min-Heap, the value of each node is less than or equal to the value of its children.  In a Max-Heap, the value of each node is greater than or equal to the value of its children. Not typically discussed under general Trees, but a type of tree.
*   **N-ary Tree (K-ary Tree):**  A tree where each node can have up to N (or K) children.

### C. Tree Traversal Algorithms

*   **Inorder Traversal (Left, Root, Right):**
    1.  Traverse the left subtree.
    2.  Visit the root node.
    3.  Traverse the right subtree.
    *   In BSTs, inorder traversal yields nodes in sorted order.
*   **Preorder Traversal (Root, Left, Right):**
    1.  Visit the root node.
    2.  Traverse the left subtree.
    3.  Traverse the right subtree.
    *   Useful for creating a copy of the tree.
*   **Postorder Traversal (Left, Right, Root):**
    1.  Traverse the left subtree.
    2.  Traverse the right subtree.
    3.  Visit the root node.
    *   Useful for deleting a tree.
*   **Breadth-First Traversal (Level Order Traversal):**
    *   Visit nodes level by level, starting from the root.
    *   Typically implemented using a queue.

**Example (Binary Tree Traversal):**

Consider the following binary tree:

```
      1
     / \
    2   3
   / \
  4   5
```

*   **Inorder:** 4 2 5 1 3
*   **Preorder:** 1 2 4 5 3
*   **Postorder:** 4 5 2 3 1
*   **Breadth-First:** 1 2 3 4 5

**Code Example (Python - Inorder Traversal):**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.data, end=" ")
        inorder_traversal(root.right)

# Example usage:
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Inorder Traversal:")
inorder_traversal(root) # Output: Inorder Traversal: 4 2 5 1 3
print()
```

### D. Applications of Trees

*   **Hierarchical Data Representation:** Organizational charts, file systems.
*   **Searching:** Binary Search Trees, AVL Trees.
*   **Sorting:** Heapsort.
*   **Decision Making:** Decision trees.
*   **Parsing:** Abstract syntax trees in compilers.
*   **Routing:** Routing trees in computer networks.
*   **Databases:** B-trees for indexing.

### E. Time and Space Complexity

*   **Binary Tree Traversal (Inorder, Preorder, Postorder):**
    *   Time Complexity: O(n) – where n is the number of nodes.  Each node is visited once.
    *   Space Complexity: O(h) – where h is the height of the tree (due to the call stack for recursion). In the worst case (skewed tree), h = n, so it can be O(n).
*   **Breadth-First Traversal:**
    *   Time Complexity: O(n) – where n is the number of nodes.
    *   Space Complexity: O(w) – where w is the maximum width of the tree (due to the queue). In the worst case (complete/perfect binary tree), w can be O(n).
*   **BST Operations (Search, Insert, Delete):**
    *   Average Time Complexity: O(log n) – for balanced trees.
    *   Worst-Case Time Complexity: O(n) – for skewed trees.
*   **AVL Tree Operations (Search, Insert, Delete):**
    *   Time Complexity: O(log n) – guaranteed due to self-balancing.
*   **B-Tree Operations:**
    *   Time Complexity: O(log_b n) - where b is the branching factor (degree) of the B-Tree.

## II. Graphs

### A. Key Concepts and Definitions

*   **Graph:** A data structure consisting of a set of vertices (nodes) and a set of edges connecting pairs of vertices.
*   **Vertex (Node):** A fundamental unit in a graph.
*   **Edge:** A connection between two vertices.
*   **Directed Graph (Digraph):** A graph where edges have a direction (represented as arrows). The order of vertices in an edge matters (e.g., (A, B) is different from (B, A)).
*   **Undirected Graph:** A graph where edges have no direction. The order of vertices in an edge does not matter (e.g., (A, B) is the same as (B, A)).
*   **Weighted Graph:** A graph where each edge has a weight (or cost) associated with it.
*   **Unweighted Graph:** A graph where edges have no weight.
*   **Adjacent Vertices:** Two vertices are adjacent if there is an edge connecting them.
*   **Degree of a Vertex (Undirected Graph):** The number of edges incident to the vertex.
*   **In-degree of a Vertex (Directed Graph):** The number of edges coming into the vertex.
*   **Out-degree of a Vertex (Directed Graph):** The number of edges going out of the vertex.
*   **Path:** A sequence of vertices connected by edges.
*   **Simple Path:** A path with no repeated vertices.
*   **Cycle:** A path that starts and ends at the same vertex.
*   **Simple Cycle:** A cycle with no repeated vertices (except the first and last).
*   **Connected Graph:** A graph where there is a path between every pair of vertices.
*   **Disconnected Graph:** A graph that is not connected (has multiple connected components).
*   **Connected Component:** A maximal connected subgraph.
*   **Complete Graph:** A graph where there is an edge between every pair of vertices.
*   **Sparse Graph:** A graph with relatively few edges compared to the maximum possible number of edges.
*   **Dense Graph:** A graph with relatively many edges compared to the maximum possible number of edges.
*   **Adjacency Matrix:** A 2D array representing a graph. `adj_matrix[i][j] = 1` if there is an edge from vertex i to vertex j, and `0` otherwise. For weighted graphs, the weight is stored instead of 1.
*   **Adjacency List:** A data structure that represents a graph as a list of adjacent vertices for each vertex.  Typically implemented using arrays or dictionaries/hashmaps.

### B. Graph Representations

*   **Adjacency Matrix:**
    *   Simple to implement.
    *   Space Complexity: O(V^2), where V is the number of vertices.
    *   Good for dense graphs.
    *   Checking if an edge exists between two vertices is O(1).
    *   Finding all neighbors of a vertex is O(V).
*   **Adjacency List:**
    *   More space-efficient for sparse graphs. Space Complexity: O(V + E), where E is the number of edges.
    *   Finding all neighbors of a vertex is O(degree(v)), where degree(v) is the degree of vertex v.
    *   Checking if an edge exists between two vertices is O(degree(v)) in the worst case.

**Example (Graph Representations):**

Consider the following undirected graph:

```
    A -- B
    |    |
    C -- D
```

*   **Adjacency Matrix:**

    ```
       A  B  C  D
    A  0  1  1  0
    B  1  0  0  1
    C  1  0  0  1
    D  0  1  1  0
    ```

*   **Adjacency List:**

    *   A: [B, C]
    *   B: [A, D]
    *   C: [A, D]
    *   D: [B, C]

**Code Example (Python - Adjacency List):**

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)] # List of lists

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)  # For undirected graph

    def print_graph(self):
        for v in range(self.V):
            print(f"Adjacency list for vertex {v}: {self.adj[v]}")

# Example usage:
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 3)

g.print_graph()
# Output:
# Adjacency list for vertex 0: [1, 2]
# Adjacency list for vertex 1: [0, 3]
# Adjacency list for vertex 2: [0, 3]
# Adjacency list for vertex 3: [1, 2]
```

### C. Graph Traversal Algorithms

*   **Depth-First Search (DFS):**
    *   Explores as far as possible along each branch before backtracking.
    *   Uses a stack (implicitly through recursion or explicitly).
    *   Can be used to find connected components, detect cycles, and perform topological sorting.
    *   Algorithm:
        1.  Mark the current vertex as visited.
        2.  For each unvisited neighbor of the current vertex, recursively call DFS on that neighbor.

*   **Breadth-First Search (BFS):**
    *   Explores all the neighbors of the current vertex before moving to the next level of neighbors.
    *   Uses a queue.
    *   Can be used to find the shortest path in an unweighted graph, find connected components.
    *   Algorithm:
        1.  Enqueue the starting vertex.
        2.  While the queue is not empty:
            a. Dequeue a vertex.
            b. If the vertex has not been visited:
                i. Mark the vertex as visited.
                ii. Enqueue all unvisited neighbors of the vertex.

**Code Example (Python - DFS and BFS):**

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj[u].append(v)

    def dfs(self, start_vertex, visited):
        visited[start_vertex] = True
        print(start_vertex, end=" ")

        for neighbor in self.adj[start_vertex]:
            if not visited[neighbor]:
                self.dfs(neighbor, visited)

    def bfs(self, start_vertex):
        visited = [False] * self.V
        queue = [start_vertex]
        visited[start_vertex] = True

        while queue:
            vertex = queue.pop(0)
            print(vertex, end=" ")

            for neighbor in self.adj[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)


# Example usage:
g = Graph(6)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 4)
g.add_edge(3, 5)

print("DFS (starting from vertex 0):")
visited = [False] * g.V
g.dfs(0, visited)  # Output: DFS (starting from vertex 0): 0 1 3 5 2 4
print()

print("BFS (starting from vertex 0):")
g.bfs(0)  # Output: BFS (starting from vertex 0): 0 1 2 3 4 5
print()
```

### D. Applications of Graphs

*   **Social Networks:** Representing relationships between people.
*   **Web Pages and Links:** Modeling the structure of the web.
*   **Transportation Networks:** Representing roads, railways, and flight routes.
*   **Computer Networks:** Representing network topologies.
*   **Recommendation Systems:** Suggesting products or content based on user preferences.
*   **Mapping and Navigation:** Finding the shortest path between locations.
*   **Project Scheduling:**  Using directed acyclic graphs (DAGs) to represent task dependencies.

### E. Time and Space Complexity

*   **Adjacency Matrix:**
    *   DFS: Time Complexity: O(V^2)
    *   BFS: Time Complexity: O(V^2)
    *   Space Complexity: O(V^2) (for the matrix itself) + O(V) (for visited array/queue in DFS/BFS)
*   **Adjacency List:**
    *   DFS: Time Complexity: O(V + E)
    *   BFS: Time Complexity: O(V + E)
    *   Space Complexity: O(V + E) (for the adjacency list) + O(V) (for visited array/queue in DFS/BFS)

## III. Practice Questions and Exercises

1.  **Tree Traversal:** Given the preorder and inorder traversals of a binary tree, reconstruct the tree.  Example:  Preorder: [A, B, D, E, C, F, G]  Inorder: [D, B, E, A, F, C, G]  (Hint:  The first element in the preorder traversal is the root.  Find the root in the inorder traversal, and the elements to the left are the left subtree, and the elements to the right are the right subtree.  Recurse on the subtrees.)

    *Answer:  (Difficult to represent graphically here, but you can create the tree step by step using the algorithm described in the hint).*

2.  **Binary Search Tree:** Implement the insert, search, and delete operations for a Binary Search Tree. Analyze the time complexity of each operation in the average and worst cases.

    *Answer:* See code examples for BST implementations online.  Average case: O(log n). Worst case (skewed tree): O(n).*

3.  **Graph Representation:** Convert the following graph from an adjacency matrix representation to an adjacency list representation:

    ```
       A  B  C  D
    A  0  1  0  1
    B  1  0  1  0
    C  0  1  0  1
    D  1  0  1  0
    ```

    *Answer:
    A: [B, D]
    B: [A, C]
    C: [B, D]
    D: [A, C]*

4.  **Graph Traversal:** Write a function to detect if a cycle exists in a directed graph using DFS.

    *Answer:* (Conceptual - you can find code implementations online). Use a modified DFS. Keep track of the vertices currently in the recursion stack. If you encounter a vertex that is already in the recursion stack, then there is a cycle.*

5.  **Shortest Path (BFS):**  Given an unweighted graph represented by an adjacency list and a starting vertex, find the shortest distance from the starting vertex to all other vertices using BFS.

    *Answer:* (Conceptual - you can find code implementations online). BFS inherently finds the shortest path in an unweighted graph because it explores level by level. You need to keep track of the distance from the starting vertex to each vertex.  Initialize the distance to all vertices as infinity (or a large number).  Set the distance to the starting vertex to 0.  As you explore neighbors, update their distances to be one more than the distance to the current vertex.*

## IV. Important Points to Remember

*   Trees are a special case of graphs (acyclic connected graphs).
*   The choice of graph representation (adjacency matrix or adjacency list) depends on the density of the graph and the operations you need to perform.
*   Tree traversal algorithms are fundamental for processing and manipulating tree data structures.
*   Graph traversal algorithms are essential for exploring and analyzing graph data structures.
*   Understanding the time and space complexity of tree and graph algorithms is crucial for choosing the right algorithm for a given problem.
*   Self-balancing trees (AVL, Red-Black) guarantee logarithmic time complexity for search, insert, and delete operations, but they are more complex to implement.
*   B-Trees are optimized for disk-based storage and are widely used in databases.
*   DFS is well-suited for problems that involve exploring all possible paths, while BFS is useful for finding the shortest path in unweighted graphs.
