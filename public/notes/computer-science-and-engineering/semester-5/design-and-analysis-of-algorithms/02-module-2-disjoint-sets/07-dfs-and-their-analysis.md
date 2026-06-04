---
title: "DFS and their analysis"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b552"
status: "completed"
scrapedAt: "2026-05-20T16:45:38.116Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 2 - Disjoint Sets: DFS and their Analysis

**Description:** This module delves into Depth-First Search (DFS) and its analysis. DFS is a fundamental graph traversal algorithm frequently used in algorithms related to disjoint sets, connectivity, and cycle detection. This section will cover its implementation, analysis of time and space complexity, and applications within the context of disjoint sets.

**Learning Outcomes:**

*   Understand the concept of Depth-First Search (DFS) and its application in graph traversal.
*   Implement DFS using both recursive and iterative approaches.
*   Analyze the time and space complexity of DFS.
*   Apply DFS to solve problems related to disjoint sets and connectivity.
*   Identify and analyze the applications of DFS, including cycle detection.

---

### 1. Introduction to Depth-First Search (DFS)

*   **Definition:** Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It starts at the root node (or any arbitrarily chosen node) and explores each branch completely before moving on to the next unvisited neighbor.

*   **Key Idea:** DFS explores a graph by going "deep" into the graph whenever possible.  It visits a node and then recursively visits its adjacent nodes that haven't been visited yet.

*   **Analogy:** Imagine exploring a maze. You choose a path and keep going until you reach a dead end. Then, you backtrack to the last point where you had a choice and try a different path.

---

### 2. DFS Implementation

#### 2.1 Recursive Implementation

*   **Algorithm:**
    1.  Mark the current node `v` as visited.
    2.  For each neighbor `w` of `v`:
        *   If `w` is not visited:
            *   Recursively call `DFS(w)`.

*   **Pseudocode:**

    ```
    DFS(Graph G, Vertex v)
      Mark v as visited
      for each neighbor w of v in G:
        if w is not visited:
          DFS(G, w)
    ```

*   **Example (Python):**

    ```python
    def dfs_recursive(graph, node, visited):
        if node not in visited:
            visited.add(node)
            print(node, end=" ")  # Process the node (e.g., print it)
            for neighbor in graph[node]:
                dfs_recursive(graph, neighbor, visited)

    # Example graph (adjacency list representation)
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }

    visited = set()  # To keep track of visited nodes
    print("DFS traversal (recursive):")
    dfs_recursive(graph, 'A', visited) # Starting from node A
    print()
    ```

#### 2.2 Iterative Implementation

*   **Algorithm:**
    1.  Create a stack `S`.
    2.  Push the starting node `v` onto `S`.
    3.  While `S` is not empty:
        *   Pop a node `v` from `S`.
        *   If `v` is not visited:
            *   Mark `v` as visited.
            *   Process `v` (e.g., print it).
            *   Push all unvisited neighbors of `v` onto `S` (in reverse order if you want to maintain a specific traversal order).

*   **Pseudocode:**

    ```
    DFS_Iterative(Graph G, Vertex v)
      Create a stack S
      Push v onto S
      while S is not empty:
        v = S.pop()
        if v is not visited:
          Mark v as visited
          Process v
          for each neighbor w of v in G:
            if w is not visited:
              S.push(w)
    ```

*   **Example (Python):**

    ```python
    def dfs_iterative(graph, start_node):
        visited = set()
        stack = [start_node]  # Initialize stack with starting node
        result = []

        while stack:
            node = stack.pop()  # Get the last element from the stack

            if node not in visited:
                visited.add(node)
                result.append(node)
                # Push unvisited neighbors onto the stack in reverse order to maintain DFS order
                for neighbor in reversed(graph[node]):
                    if neighbor not in visited:
                        stack.append(neighbor)

        print("DFS traversal (iterative):", ' '.join(result))

    # Example graph (adjacency list representation)
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }

    dfs_iterative(graph, 'A') # Starting from node A
    ```

#### 2.3 Choosing Between Recursive and Iterative DFS

*   **Recursion:**  Easier to understand and implement, especially for simple tasks.  However, recursion can lead to stack overflow errors for very large graphs due to the depth of the call stack.

*   **Iteration:**  Avoids the stack overflow issue.  Can be slightly more complex to implement but is generally preferred for large graphs or when memory efficiency is critical.

---

### 3. Analysis of DFS

#### 3.1 Time Complexity

*   **Adjacency List Representation:** O(V + E), where V is the number of vertices and E is the number of edges.  This is because we visit each vertex once (O(V)) and explore all edges originating from each vertex (O(E)).

*   **Adjacency Matrix Representation:** O(V<sup>2</sup>), where V is the number of vertices.  This is because, for each vertex, we need to iterate through all other vertices to find its neighbors.

#### 3.2 Space Complexity

*   **Recursive DFS:** O(V) in the worst case (for a skewed tree or graph). This is due to the maximum depth of the call stack, which can be V.

*   **Iterative DFS:** O(V) in the worst case. This is due to the maximum size of the stack, which can hold all vertices in the graph if they are all connected. This also includes the space for the `visited` set/array.

---

### 4. Applications of DFS in Disjoint Sets and Connectivity

#### 4.1 Connected Components

*   **Finding Connected Components:** DFS can be used to find the connected components of an undirected graph. A connected component is a subgraph where every vertex is reachable from every other vertex.
    *   Run DFS starting from each unvisited vertex. Each DFS traversal will explore one connected component.
    *   The number of times DFS is called from outside the recursion is equal to the number of connected components.

*   **Example:** Imagine a social network represented as a graph, where vertices are people and edges represent friendships. Using DFS, you can identify distinct groups of people who are connected to each other, forming connected components.

#### 4.2 Cycle Detection

*   **Cycle Detection in Directed Graphs:** DFS can be used to detect cycles in directed graphs. The idea is to maintain two sets: `visited` and `recursion_stack`.
    1.  If a node is visited and already present in the `recursion_stack`, then a cycle is present.
    2.  After processing the node and its neighbors, remove the node from the `recursion_stack`.

*   **Cycle Detection in Undirected Graphs:** While simpler than the directed case, DFS can also be used for undirected graphs. The key is to keep track of the parent node during traversal. If you encounter a neighbor that is visited and is not the parent of the current node, then a cycle exists.

*   **Example (Directed Graph - Python):**

    ```python
    def detect_cycle_directed(graph):
        visited = set()
        recursion_stack = set()

        def dfs(node):
            visited.add(node)
            recursion_stack.add(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    if dfs(neighbor):
                        return True
                elif neighbor in recursion_stack:
                    return True

            recursion_stack.remove(node)
            return False

        for node in graph:
            if node not in visited:
                if dfs(node):
                    return True

        return False

    graph = {
        'A': ['B', 'C'],
        'B': ['C'],
        'C': ['A']  # Cycle: A -> B -> C -> A
    }

    if detect_cycle_directed(graph):
        print("Cycle detected in directed graph")
    else:
        print("No cycle detected in directed graph")

    graph2 = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }
    if detect_cycle_directed(graph2):
        print("Cycle detected in directed graph")
    else:
        print("No cycle detected in directed graph")

    ```

#### 4.3 Topological Sorting

*   **Topological Sorting (Directed Acyclic Graph - DAG):**  A topological sort is a linear ordering of vertices in a DAG such that for every directed edge `u -> v`, vertex `u` comes before vertex `v` in the ordering. DFS can be used to compute a topological sort.

*   **Algorithm:**
    1.  Perform DFS on the graph.
    2.  For each vertex, when the DFS traversal finishes for that vertex (i.e., you're about to backtrack), add the vertex to the beginning of a list.
    3.  The list, when reversed, gives a topological ordering.

*   **Example Application:** Dependency resolution in software build systems or task scheduling.

#### 4.4 Path Finding

*   **Finding a Path:** DFS can find a path between two given vertices, if one exists.  By modifying the DFS algorithm to return `True` when the target vertex is found, and `False` otherwise, you can efficiently search for a path.

---

### 5. Disjoint Set Application of DFS: Connected Components

DFS provides a straightforward approach to find connected components which are essential in disjoint-set data structure contexts. We utilize the property that a DFS traversal visits all nodes reachable from a starting node.

*   **Algorithm**
    1.  Initialize a `visited` set to keep track of visited nodes
    2.  Initialize a `components` list to store each identified connected component
    3.  Iterate through each node in the graph:
        *   If the node is not yet visited:
            *   Create a new component list
            *   Perform DFS starting from that node and add all visited nodes to the new component list
            *   Add the new component list to `components` list

*   **Python Example:**

    ```python
    def find_connected_components(graph):
        visited = set()
        components = []

        def dfs(node, component):
            visited.add(node)
            component.append(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    dfs(neighbor, component)

        for node in graph:
            if node not in visited:
                component = []
                dfs(node, component)
                components.append(component)

        return components

    graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D'],
        'C': ['A'],
        'D': ['B'],
        'E': ['F'],
        'F': ['E']
    }

    connected_components = find_connected_components(graph)
    print("Connected Components:", connected_components)
    ```

---

### 6. Practice Questions/Exercises

1.  **Implement DFS (Recursive) in Python:**  Write a function that takes a graph (represented as an adjacency list) and a starting node and performs a recursive DFS traversal, printing each node visited.
    *   **Answer:** See the example Python code under "2.1 Recursive Implementation."

2.  **Implement DFS (Iterative) in Java:** Write a function that takes a graph (represented as an adjacency list) and a starting node and performs an iterative DFS traversal, printing each node visited.
    *   **Answer (Conceptual Java Code):**

        ```java
        import java.util.*;

        public class DFS {

            public static void dfsIterative(Map<String, List<String>> graph, String startNode) {
                Set<String> visited = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(startNode);

                while (!stack.isEmpty()) {
                    String node = stack.pop();
                    if (!visited.contains(node)) {
                        visited.add(node);
                        System.out.print(node + " ");

                        List<String> neighbors = graph.get(node);
                        if (neighbors != null) {
                            for (int i = neighbors.size() - 1; i >= 0; i--) { // Reverse order for DFS
                                String neighbor = neighbors.get(i);
                                if (!visited.contains(neighbor)) {
                                    stack.push(neighbor);
                                }
                            }
                        }
                    }
                }
            }

            public static void main(String[] args) {
                // Example graph
                Map<String, List<String>> graph = new HashMap<>();
                graph.put("A", Arrays.asList("B", "C"));
                graph.put("B", Arrays.asList("D", "E"));
                graph.put("C", Arrays.asList("F"));
                graph.put("D", new ArrayList<>());
                graph.put("E", Arrays.asList("F"));
                graph.put("F", new ArrayList<>());

                System.out.println("DFS traversal (iterative):");
                dfsIterative(graph, "A"); // Starting from node A
                System.out.println();
            }
        }
        ```

3.  **Cycle Detection in Undirected Graph:** Implement a function to detect cycles in an undirected graph using DFS.  The graph is represented as an adjacency list.
    *   **Answer (Python):**

        ```python
        def detect_cycle_undirected(graph):
            visited = set()

            def dfs(node, parent):
                visited.add(node)
                for neighbor in graph[node]:
                    if neighbor not in visited:
                        if dfs(neighbor, node):
                            return True
                    elif neighbor != parent:
                        return True
                return False

            for node in graph:
                if node not in visited:
                    if dfs(node, None):
                        return True
            return False

        graph = {
            'A': ['B', 'C'],
            'B': ['A', 'D'],
            'C': ['A'],
            'D': ['B'] # A-B-D cycle
        }

        if detect_cycle_undirected(graph):
            print("Cycle detected in undirected graph")
        else:
            print("No cycle detected in undirected graph")
        ```

4.  **Find Connected Components:** Given the adjacency list of a graph, find all the connected components.

    *   **Answer:** See example code under "5. Disjoint Set Application of DFS: Connected Components"

5.  **What is the time complexity of DFS when using an adjacency matrix?**
    *   **Answer:** O(V<sup>2</sup>), where V is the number of vertices.

---

### 7. Important Points to Remember

*   **Visited Set:**  Crucial to prevent infinite loops when traversing graphs with cycles.  Always maintain a `visited` set (or array) to track visited nodes.

*   **Graph Representation:** The choice of graph representation (adjacency list vs. adjacency matrix) significantly impacts the time complexity of DFS. Adjacency lists are generally preferred for sparse graphs (graphs with fewer edges) because they offer better performance (O(V + E)).

*   **Recursive vs. Iterative:** Understand the trade-offs between recursive and iterative implementations. Choose the appropriate implementation based on the size of the graph and memory constraints.

*   **Applications:**  DFS is a versatile algorithm with applications in many areas of computer science. Be familiar with its applications in connectivity, cycle detection, topological sorting, and path finding.

*   **Backtracking:** Understand the concept of backtracking inherent in DFS.  The algorithm explores deeply along a path and then backtracks to explore alternative paths.
