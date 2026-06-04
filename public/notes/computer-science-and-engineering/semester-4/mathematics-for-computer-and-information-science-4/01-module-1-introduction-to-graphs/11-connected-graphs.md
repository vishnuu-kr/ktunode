---
title: "Connected graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af24"
status: "completed"
scrapedAt: "2026-05-20T16:13:25.861Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Connected Graphs

**Learning Outcomes:**

*   Define and identify connected and disconnected graphs.
*   Understand the concept of connected components in a disconnected graph.
*   Define and identify bridges and cut vertices in a connected graph.
*   Determine if a graph is strongly connected or weakly connected (directed graphs).
*   Apply algorithms to determine graph connectivity.

---

**1. Basic Definitions and Concepts**

*   **Graph:** A graph G = (V, E) consists of a set V of vertices (or nodes) and a set E of edges.  Each edge connects two vertices.
*   **Undirected Graph:** Edges have no direction. An edge (u, v) is the same as (v, u).
*   **Directed Graph (Digraph):** Edges have a direction.  An edge (u, v) is different from (v, u). We say (u, v) goes *from* u *to* v.
*   **Path:** A sequence of vertices v1, v2, ..., vk such that (vi, vi+1) is an edge for all i = 1, 2, ..., k-1.  In a directed graph, the path must follow the edge direction.
*   **Walk:**  A sequence of vertices v1, v2, ..., vk such that (vi, vi+1) is an edge for all i = 1, 2, ..., k-1. Unlike a path, vertices and edges can be repeated.
*   **Cycle:** A path that starts and ends at the same vertex.
*   **Simple Path/Cycle:** A path/cycle where no vertex is repeated (except the first and last vertex in a cycle).

**2. Connected Graphs**

*   **Definition:** An undirected graph G is **connected** if there is a path between every pair of distinct vertices in G.  In other words, you can get from any vertex to any other vertex by following the edges.

*   **Disconnected Graph:** An undirected graph G is **disconnected** if it is *not* connected.  This means there exists at least one pair of vertices such that there is no path between them.

*   **Key Idea:** Think of connectivity as being able to "travel" between any two points in the graph.

**3. Connected Components**

*   **Definition:** A **connected component** of an undirected graph G is a maximal connected subgraph. "Maximal" means that you can't add any more vertices or edges from G to the subgraph without making it disconnected from the rest of the graph.  In essence, a connected component is a "piece" of the graph that is connected within itself but disconnected from the other pieces.

*   **Disconnected Graph and Connected Components:** A disconnected graph consists of two or more connected components.  A connected graph has only one connected component (itself).

*   **Example:** Imagine a graph with vertices {A, B, C, D, E, F} and edges {(A, B), (B, C), (D, E), (E, F)}. This graph is disconnected. It has two connected components: {A, B, C} and {D, E, F}.

**4. Bridges and Cut Vertices**

These concepts are meaningful only in *connected* graphs.

*   **Bridge (Cut Edge):** An edge whose removal increases the number of connected components.  In other words, if you remove a bridge, the graph becomes disconnected.  A bridge is a crucial connection point in the graph.

*   **Cut Vertex (Articulation Point):** A vertex whose removal increases the number of connected components. Removing a cut vertex disconnects the graph (or parts of the graph).

*   **Important Note:** A graph can have multiple bridges and cut vertices, or none at all.

*   **Example:** Consider a graph with vertices {A, B, C, D} and edges {(A, B), (B, C), (C, D)}.
    *   All edges (A, B), (B, C), and (C, D) are bridges. If you remove any of them, the graph becomes disconnected.
    *   Vertices B and C are cut vertices. Removing either of them will disconnect the graph. Vertex A and D are not cut vertices.

**5. Connectivity in Directed Graphs (Digraphs)**

*   **Strongly Connected:** A directed graph is **strongly connected** if for every pair of vertices u and v, there is a directed path from u to v *and* a directed path from v to u. This means you can go from any vertex to any other vertex, and back again, following the edge directions.

*   **Weakly Connected:** A directed graph is **weakly connected** if the underlying undirected graph (obtained by ignoring the direction of the edges) is connected.  In simpler terms, if you could ignore the arrows on the edges, the graph would be connected.

*   **Important Note:**  A strongly connected graph is always weakly connected, but the converse is not necessarily true.

*   **Strongly Connected Components:** A maximal strongly connected subgraph of a directed graph.

*   **Example:**
    *   Consider a graph with vertices {A, B, C} and edges {(A, B), (B, C), (C, A)}. This graph is strongly connected.
    *   Consider a graph with vertices {A, B, C} and edges {(A, B), (B, C)}. This graph is weakly connected (the undirected graph would have edges (A, B) and (B, C) and would be connected), but not strongly connected (there is no path from C to A).

**6. Algorithms to Determine Graph Connectivity**

*   **Breadth-First Search (BFS):** Starting from a vertex, BFS explores all the neighbors of the current vertex before moving to the next level of neighbors.  If BFS can visit all vertices from a starting vertex, the graph is connected (if undirected).  For directed graphs, you would need to run BFS from every vertex to confirm strong connectivity (expensive).

*   **Depth-First Search (DFS):** Starting from a vertex, DFS explores as far as possible along each branch before backtracking. Similar to BFS, if DFS can visit all vertices from a starting vertex, the graph is connected (undirected). For directed graphs, DFS, along with identifying strongly connected components using Kosaraju's Algorithm or Tarjan's Algorithm, is used.

*   **Determining Connected Components:** Using BFS or DFS, you can identify connected components.  Start at an unvisited vertex and perform BFS/DFS.  All vertices visited during that traversal belong to the same connected component.  Repeat this process starting from another unvisited vertex until all vertices have been visited.

*   **Finding Bridges and Cut Vertices:** Algorithms based on DFS can efficiently find bridges and cut vertices.  These algorithms track "discovery times" and "low values" during the DFS traversal to determine if an edge is a bridge or a vertex is a cut vertex.  Tarjan's algorithm is a commonly used algorithm for this.

**7. Important Points to Remember**

*   Connectivity is a fundamental property of graphs.
*   Distinguish between connected and disconnected graphs.
*   Understand the concept of connected components in disconnected graphs.
*   Bridges and cut vertices are important for understanding the robustness of a connected graph.
*   Strong connectivity and weak connectivity are important concepts for directed graphs.
*   BFS and DFS are powerful algorithms for exploring graphs and determining connectivity.

**8. Practice Questions/Exercises**

1.  **Question:** Consider the following graph: V = {A, B, C, D, E} and E = {(A, B), (B, C), (A, C), (D, E)}.
    *   Is the graph connected?
    *   If not, what are the connected components?
    *   Are there any bridges?
    *   Are there any cut vertices?

    **Answer:**
    *   No, the graph is not connected.
    *   The connected components are {A, B, C} and {D, E}.
    *   The edge (D, E) is a bridge.
    *   There are no cut vertices in the {A,B,C} component. Vertex D and E are not considered cut vertices as their removal does not increase the number of connected components in the overall graph.

2.  **Question:** Consider the following directed graph: V = {A, B, C, D} and E = {(A, B), (B, C), (C, D), (D, A)}.
    *   Is the graph strongly connected?
    *   Is the graph weakly connected?

    **Answer:**
    *   Yes, the graph is strongly connected. There is a path between every pair of vertices in both directions.
    *   Yes, the graph is weakly connected (since it is strongly connected).

3.  **Question:** Explain the difference between a bridge and a cut vertex. Provide an example.

    **Answer:**
    *   A bridge is an edge whose removal disconnects a graph (or increases the number of connected components). A cut vertex is a vertex whose removal disconnects a graph (or increases the number of connected components).
    *   Example: Consider the graph with vertices {A, B, C} and edges {(A, B), (B, C)}. The edge (A, B) and (B, C) are bridges, and vertex B is a cut vertex.

4.  **Question:** Design an algorithm (pseudocode) to find the connected components of an undirected graph.

    **Answer:**

    ```
    Algorithm FindConnectedComponents(Graph G)
    {
        Initialize Visited array for all vertices to false
        ConnectedComponents = []  // List to store the connected components

        for each vertex v in G.Vertices:
            if Visited[v] is false:
                Component = BFS(G, v, Visited) // Or DFS(G, v, Visited)
                ConnectedComponents.append(Component)

        return ConnectedComponents
    }

    Algorithm BFS(Graph G, Vertex startVertex, Visited array)
    {
        ComponentVertices = []
        Queue = [startVertex]
        Visited[startVertex] = true
        ComponentVertices.append(startVertex)

        while Queue is not empty:
            currentVertex = Queue.dequeue()

            for each neighbor neighborVertex of currentVertex:
                if Visited[neighborVertex] is false:
                    Visited[neighborVertex] = true
                    Queue.enqueue(neighborVertex)
                    ComponentVertices.append(neighborVertex)
        return ComponentVertices
    }

    //DFS Example
   Algorithm DFS(Graph G, Vertex startVertex, Visited array)
    {
        ComponentVertices = []
        Stack = [startVertex]
        Visited[startVertex] = true
        ComponentVertices.append(startVertex)
        
         for each neighbor neighborVertex of startVertex:
                if Visited[neighborVertex] is false:
                    DFS(G,neighborVertex, Visited);

                
    }
    ```
    **Note:** The DFS algorithm provided is a sketch to find reachable vertices from a given starting vertex which can be used to determine the connected components. A full implementation will likely need additional checks and logic for the overall algorithm. The pseudocode primarily demonstrate the use of recursion with DFS.

---
