---
title: "Graphs :- Definitions"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac44"
status: "completed"
scrapedAt: "2026-05-20T16:23:05.652Z"
---
## DATA STRUCTURES AND ALGORITHMS: Module 3 - Trees and Graphs
### Topic: Graphs - Definitions

**Learning Outcomes:**

*   Define a graph and its components (vertices, edges).
*   Differentiate between directed and undirected graphs.
*   Understand the concepts of weighted and unweighted graphs.
*   Explain various graph representations (adjacency matrix, adjacency list).
*   Define and differentiate between different types of graphs (complete, connected, disconnected, cyclic, acyclic).
*   Understand graph terminology: degree, path, cycle, adjacent vertices.

**1. Introduction to Graphs**

*   **Definition:** A graph is a non-linear data structure consisting of a set of vertices (also called nodes) and a set of edges that connect these vertices.

*   **Formal Definition:** A graph G is defined as G = (V, E), where:
    *   V is a finite set of vertices (nodes).
    *   E is a set of edges connecting pairs of vertices.

*   **Visual Representation:**  Graphs are often represented visually as circles (vertices) connected by lines (edges).

**2. Components of a Graph**

*   **Vertex (Node):** A fundamental unit in a graph.  It represents an object or entity.

    *   **Example:** In a social network graph, a vertex could represent a person. In a map, it could represent a city.

*   **Edge:** A connection between two vertices. It represents a relationship between the objects represented by the connected vertices.

    *   **Example:** In a social network graph, an edge could represent a friendship between two people. In a map, it could represent a road between two cities.

    *   **Endpoint Vertices:**  The two vertices connected by an edge are called the endpoint vertices of that edge.

**3. Types of Graphs: Based on Edge Direction**

*   **Undirected Graph:**  A graph where the edges have no direction.  If there is an edge between vertex A and vertex B, you can traverse it in either direction (from A to B or from B to A).

    *   **Representation:** An edge between vertices A and B is typically represented as (A, B) or (B, A), indicating the same relationship.

    *   **Example:** A Facebook friendship.  If A is friends with B, B is friends with A.

*   **Directed Graph (Digraph):** A graph where the edges have a direction.  An edge from vertex A to vertex B indicates a relationship that only applies in that direction.

    *   **Representation:** An edge from vertex A to vertex B is represented as <A, B>, meaning there is a directed edge from A to B, but not necessarily from B to A.

    *   **Example:** A Twitter follow. A follows B doesn't necessarily mean B follows A.

**4. Types of Graphs: Based on Edge Weight**

*   **Unweighted Graph:**  A graph where the edges have no associated weight or cost.  All edges are considered equal in terms of traversal cost.

    *   **Example:**  A social network graph where we only care about the connections (friendships) and not the strength of those connections.

*   **Weighted Graph:** A graph where each edge has a numerical value (weight) associated with it, representing the cost or distance of traversing that edge.

    *   **Example:** A map where the edges represent roads and the weights represent the distance or travel time between cities.  A network routing graph where the weights represent network latency.

**5. Graph Representations**

*   **Adjacency Matrix:** A 2D array (matrix) that represents the connections between vertices in a graph.

    *   **Characteristics:**
        *   Rows and columns represent vertices.
        *   `matrix[i][j] = 1` (or `true`) if there is an edge from vertex i to vertex j. `0` (or `false`) otherwise.
        *   For weighted graphs, `matrix[i][j]` stores the weight of the edge from vertex i to vertex j.
        *   For undirected graphs, the adjacency matrix is symmetric ( `matrix[i][j] == matrix[j][i]` ).
    *   **Advantages:**  Easy to check if an edge exists between two vertices (O(1) lookup).
    *   **Disadvantages:**  Requires O(V^2) space, regardless of the number of edges.  Inefficient for sparse graphs (graphs with few edges).

    *   **Example:**
        ```
        Graph:
        A -- B
        |    |
        C -- D

        Adjacency Matrix:
           A  B  C  D
        A [0, 1, 1, 0]
        B [1, 0, 1, 1]
        C [1, 1, 0, 1]
        D [0, 1, 1, 0]
        ```

*   **Adjacency List:** A collection of lists, one for each vertex in the graph.  Each list contains the vertices that are adjacent to the corresponding vertex.

    *   **Characteristics:**
        *   Each vertex has a list containing its adjacent vertices.
        *   For weighted graphs, the list can store the vertex and the weight of the edge.
    *   **Advantages:**  Space-efficient for sparse graphs (O(V + E) space).
    *   **Disadvantages:**  Checking if an edge exists between two vertices can take O(V) time in the worst case (if the list is long).

    *   **Example:**
        ```
        Graph:
        A -- B
        |    |
        C -- D

        Adjacency List:
        A: [B, C]
        B: [A, C, D]
        C: [A, B, D]
        D: [B, C]
        ```

**6. Types of Graphs: Based on Connectivity and Structure**

*   **Complete Graph:** A graph where every vertex is directly connected to every other vertex.

    *   **Characteristics:**
        *   Number of edges in an undirected complete graph with 'n' vertices: n(n-1)/2
    *   **Example:**  A small group of people where everyone knows everyone else.

*   **Connected Graph:** A graph where there is a path between every pair of vertices.  You can reach any vertex from any other vertex by traversing the edges.

    *   **Characteristics:** Contains only one connected component.

*   **Disconnected Graph:** A graph where there is at least one pair of vertices that are not connected by a path. It consists of multiple connected components.

    *   **Characteristics:** Contains more than one connected component.

*   **Cyclic Graph:** A graph that contains at least one cycle. A cycle is a path that starts and ends at the same vertex.

*   **Acyclic Graph:** A graph that contains no cycles.  Trees are a special case of acyclic graphs.

    *   **Directed Acyclic Graph (DAG):** A directed graph that contains no cycles.  Used for representing dependencies and scheduling tasks.

**7. Graph Terminology**

*   **Degree:** The degree of a vertex is the number of edges connected to it.
    *   **Undirected Graph:** The degree is simply the number of adjacent vertices.
    *   **Directed Graph:**
        *   **In-degree:** The number of incoming edges (edges pointing to the vertex).
        *   **Out-degree:** The number of outgoing edges (edges originating from the vertex).

*   **Path:** A sequence of vertices and edges that connects two vertices.

    *   **Simple Path:** A path where no vertex is repeated (except possibly the first and last vertex in a cycle).

*   **Cycle:** A path that starts and ends at the same vertex.

*   **Adjacent Vertices (Neighbors):** Two vertices are adjacent if they are connected by an edge.

**8. Important Points to Remember**

*   Graphs are versatile data structures used to model relationships between objects.
*   Choosing the right graph representation (adjacency matrix or adjacency list) depends on the specific problem and the density of the graph.
*   Understanding graph terminology is crucial for designing and analyzing graph algorithms.

**Practice Questions/Exercises**

1.  **Question:**  Consider an undirected graph with vertices A, B, C, D, and edges (A, B), (B, C), (C, D).  Draw the graph and write down its adjacency matrix and adjacency list representations.

    **Answer:**

    *   **Graph:**
        ```
        A -- B -- C -- D
        ```

    *   **Adjacency Matrix:**
        ```
           A  B  C  D
        A [0, 1, 0, 0]
        B [1, 0, 1, 0]
        C [0, 1, 0, 1]
        D [0, 0, 1, 0]
        ```

    *   **Adjacency List:**
        ```
        A: [B]
        B: [A, C]
        C: [B, D]
        D: [C]
        ```

2.  **Question:**  Is the graph in question 1 connected? Is it cyclic?

    **Answer:**

    *   Yes, the graph is connected.  There is a path between any two vertices.
    *   No, the graph is acyclic. There are no cycles.

3.  **Question:**  What is the degree of vertex B in question 1?

    **Answer:** The degree of vertex B is 2 (it's connected to A and C).

4.  **Question:** Give an example scenario where a weighted, directed graph would be a suitable data structure.

    **Answer:**  Representing a city's road network where vertices are intersections, edges are roads, the direction indicates one-way streets, and the weight is the distance or travel time.

5.  **Question:** What are the advantages and disadvantages of using an adjacency matrix compared to an adjacency list?

    **Answer:**
    * **Adjacency Matrix Advantages:**
        * Fast edge lookups (O(1)).
    * **Adjacency Matrix Disadvantages:**
        * High memory usage, especially for sparse graphs (O(V^2)).
        * Adding or removing vertices is expensive.
    * **Adjacency List Advantages:**
        * More space-efficient for sparse graphs (O(V+E)).
        * Easy to add or remove vertices.
    * **Adjacency List Disadvantages:**
        * Edge lookups can be slower (O(V) in the worst case).
