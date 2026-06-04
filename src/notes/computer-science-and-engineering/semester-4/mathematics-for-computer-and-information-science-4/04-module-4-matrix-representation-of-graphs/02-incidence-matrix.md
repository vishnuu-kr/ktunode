---
title: "Incidence Matrix"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 4: Matrix representation of graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af3c"
status: "completed"
scrapedAt: "2026-05-20T16:13:40.723Z"
---
## Mathematics for Computer and Information Science-4
## Module 4: Matrix Representation of Graphs
## Topic: Incidence Matrix

### Learning Outcomes:

*   Understand the concept of an incidence matrix.
*   Construct the incidence matrix of a given graph.
*   Relate the incidence matrix to graph properties such as degree of a vertex.
*   Apply incidence matrices to solve problems related to graphs.

### 1. Key Concepts and Definitions:

*   **Graph:** A graph G = (V, E) consists of a set of vertices (or nodes) V and a set of edges E, where each edge connects two vertices.

*   **Incidence Matrix:** The incidence matrix of a graph G = (V, E) with *n* vertices and *m* edges is an *n* × *m* matrix, denoted by B = [b<sub>ij</sub>], where:

    *   b<sub>ij</sub> = 1 if vertex *v<sub>i</sub>* is incident to edge *e<sub>j</sub>*.  This means *v<sub>i</sub>* is one of the endpoints of *e<sub>j</sub>*.
    *   b<sub>ij</sub> = 0 if vertex *v<sub>i</sub>* is not incident to edge *e<sub>j</sub>*.

*   **Directed Graph:** A directed graph (or digraph) is a graph where the edges have a direction associated with them. The incidence matrix for a directed graph is slightly different.

    *   b<sub>ij</sub> = 1 if vertex *v<sub>i</sub>* is the start vertex of edge *e<sub>j</sub>*.
    *   b<sub>ij</sub> = -1 if vertex *v<sub>i</sub>* is the end vertex of edge *e<sub>j</sub>*.
    *   b<sub>ij</sub> = 0 otherwise.

*   **Self-Loop:** An edge that connects a vertex to itself.

*   **Parallel Edges:** Two or more edges that connect the same pair of vertices.

*   **Degree of a Vertex:**  The number of edges incident to a vertex (in undirected graphs).  In directed graphs, we have in-degree (number of incoming edges) and out-degree (number of outgoing edges).

### 2. Constructing the Incidence Matrix:

**Undirected Graph:**

1.  Label the vertices *v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>*.
2.  Label the edges *e<sub>1</sub>, e<sub>2</sub>, ..., e<sub>m</sub>*.
3.  Create an *n* x *m* matrix.
4.  For each entry b<sub>ij</sub>:
    *   If edge *e<sub>j</sub>* is incident to vertex *v<sub>i</sub>*, then b<sub>ij</sub> = 1.
    *   Otherwise, b<sub>ij</sub> = 0.

**Directed Graph:**

1.  Label the vertices *v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>*.
2.  Label the edges *e<sub>1</sub>, e<sub>2</sub>, ..., e<sub>m</sub>*.
3.  Create an *n* x *m* matrix.
4.  For each entry b<sub>ij</sub>:
    *   If edge *e<sub>j</sub>* starts at vertex *v<sub>i</sub>*, then b<sub>ij</sub> = 1.
    *   If edge *e<sub>j</sub>* ends at vertex *v<sub>i</sub>*, then b<sub>ij</sub> = -1.
    *   Otherwise, b<sub>ij</sub> = 0.

### 3. Examples:

**Example 1: Undirected Graph**

Consider the following undirected graph:

```
   v1 ---- e1 ---- v2
   |                |
   e2              e3
   |                |
   v3 ---- e4 ---- v4
```

*   V = {v1, v2, v3, v4}
*   E = {e1, e2, e3, e4}

The incidence matrix B is:

```
     e1  e2  e3  e4
v1  [ 1   1   0   0 ]
v2  [ 1   0   1   0 ]
v3  [ 0   1   0   1 ]
v4  [ 0   0   1   1 ]
```

**Example 2: Directed Graph**

Consider the following directed graph:

```
   v1 --e1--> v2
   ^        /
   |       / e3
  e2      /
   |     /
   v3 --e4--> v4
```

*   V = {v1, v2, v3, v4}
*   E = {e1, e2, e3, e4}

The incidence matrix B is:

```
     e1  e2  e3  e4
v1  [ 1   -1  0   0 ]
v2  [ -1  0   -1  0 ]
v3  [ 0   1   1   1 ]
v4  [ 0   0   0   -1 ]
```

**Example 3: Graph with Self-Loop and Parallel Edges**

Consider an undirected graph with vertices {v1, v2, v3} and edges e1 (v1-v2), e2 (v1-v2, parallel edge), e3 (v2-v2, self loop), e4 (v1-v3).

The incidence matrix B is:

```
     e1  e2  e3  e4
v1  [ 1   1   0   1 ]
v2  [ 1   1   2   0 ]
v3  [ 0   0   0   1 ]
```

*Note:* The entry for the self-loop (e3) connected to v2 is '2' because the edge connects v2 to itself, making v2 incident twice to that edge.

### 4. Relating the Incidence Matrix to Graph Properties:

*   **Degree of a vertex (Undirected Graph):** The degree of a vertex *v<sub>i</sub>* is equal to the sum of the entries in the *i*-th row of the incidence matrix.

*   **Sum of each column (Undirected Graph):** In an undirected graph, each column of the incidence matrix sums to 2 (because each edge connects two vertices).

*   **Sum of each column (Directed Graph):** In a directed graph, each column of the incidence matrix sums to 0 (because each edge starts at one vertex (+1) and ends at another (-1)).

*   **Detecting Isolated Vertices:** A row of zeros in the incidence matrix indicates an isolated vertex (a vertex with no incident edges).

### 5. Applications of Incidence Matrices:

*   **Network Analysis:**  Incidence matrices can be used to represent and analyze networks, such as transportation networks or electrical circuits.

*   **Linear Programming:** The incidence matrix can be used to formulate graph problems as linear programs.

*   **Database Management:**  Representing relationships between entities in a database.

### 6. Practice Questions/Exercises:

**Question 1:**

Construct the incidence matrix for the following undirected graph:

```
    v1 ---- e1 ---- v2
    |                |
    e3              e2
    |                |
    v3 ---- e4 ---- v2
```

**Answer 1:**

```
     e1  e2  e3  e4
v1  [ 1   0   1   0 ]
v2  [ 1   1   0   1 ]
v3  [ 0   0   1   1 ]
```

**Question 2:**

Construct the incidence matrix for the following directed graph:

```
    v1 --> e1 --> v2
    ^        |
    |        | e2
    |        v
    e3       v3
    |
    v4
```

**Answer 2:**

```
     e1  e2  e3
v1  [ 1   0   0 ]
v2  [ -1  1   0 ]
v3  [ 0   -1  0 ]
v4  [ 0   0   1 ]
```

**Question 3:**

Given the following incidence matrix for an undirected graph, draw the graph:

```
     e1  e2  e3  e4
v1  [ 1   0   1   0 ]
v2  [ 1   1   0   0 ]
v3  [ 0   1   1   1 ]
v4  [ 0   0   0   1 ]
```

**Answer 3:**

The graph has 4 vertices (v1, v2, v3, v4) and 4 edges (e1, e2, e3, e4).  From the matrix, we can deduce the following edges:

*   e1 connects v1 and v2
*   e2 connects v2 and v3
*   e3 connects v1 and v3
*   e4 connects v3 and v4

The graph looks like this:

```
    v1 ---- e1 ---- v2
    |                |
    e3              e2
    |                |
    v3 ---- e4 ---- v4
```

**Question 4:**

What is the degree of each vertex in the graph represented by the incidence matrix in Question 1?

**Answer 4:**

*   Degree of v1 = 1 + 0 + 1 + 0 = 2
*   Degree of v2 = 1 + 1 + 0 + 1 = 3
*   Degree of v3 = 0 + 0 + 1 + 1 = 2

### 7. Important Points to Remember:

*   The incidence matrix is a way to represent the relationship between vertices and edges in a graph.
*   The representation is different for undirected and directed graphs.
*   Incidence matrices can be used to analyze graph properties and solve graph-related problems.
*   For undirected graphs, the sum of the entries in any row of an incidence matrix is the degree of the corresponding vertex.
*   For undirected graphs, the sum of the entries in each column is always 2. For directed graphs, it is always 0.
*   An incidence matrix represents *which* edges are connected to which vertices, but does not inherently represent the presence or absence of *all* edges (e.g. if you have a complete graph, the incidence matrix does *not* explicitly state that every possible connection exists).
