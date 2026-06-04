---
title: "Incidence and Degree"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 1: Introduction to Graphs "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af1d"
status: "completed"
scrapedAt: "2026-05-20T16:13:21.131Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 1: Introduction to Graphs
### Topic: Incidence and Degree

**Learning Outcomes:**

*   Define graphs, vertices, and edges.
*   Explain the concept of incidence between vertices and edges.
*   Calculate the degree of a vertex in a graph.
*   Differentiate between isolated, pendant, and adjacent vertices.
*   Understand and apply the Handshaking Lemma.
*   Distinguish between directed and undirected graphs in terms of incidence and degree.
*   Apply the concepts of incidence and degree to represent real-world scenarios.

---

**1. Fundamental Definitions:**

*   **Graph:** A graph G is an ordered pair (V, E), where:
    *   V is a non-empty set of *vertices* (also called nodes).
    *   E is a set of *edges*.  Each edge is a connection between two vertices.

*   **Vertices (Nodes):** The fundamental units of a graph.  Represented by points.

*   **Edges:** Connections between vertices.  Represented by lines or curves. Edges can be:
    *   **Undirected:** Represent a two-way relationship between vertices.
    *   **Directed:** Represent a one-way relationship between vertices.  A directed edge is called an *arc*.

*   **Adjacent Vertices:** Two vertices are *adjacent* if there exists an edge connecting them.  If an edge *e* connects vertices *u* and *v*, then *u* and *v* are adjacent.

*   **Example:** Consider a graph G = (V, E) where V = {A, B, C, D} and E = {(A, B), (B, C), (C, D), (D, A), (A, C)}.
    *   The vertices are A, B, C, and D.
    *   The edges are (A, B), (B, C), (C, D), (D, A), and (A, C).
    *   A and B are adjacent.  A and C are adjacent. A and D are adjacent. B and C are adjacent. C and D are adjacent.

**2. Incidence:**

*   **Definition:** An edge *e* is *incident* on a vertex *v* if *v* is one of the endpoints of *e*.  In other words, the edge *e* "touches" the vertex *v*.

*   **Example (using the graph from above):**
    *   Edge (A, B) is incident on vertices A and B.
    *   Edge (B, C) is incident on vertices B and C.
    *   Edge (A, C) is incident on vertices A and C.

**3. Degree of a Vertex:**

*   **Definition:** The *degree* of a vertex *v*, denoted as deg(v), is the number of edges incident on *v*. Loops (edges connecting a vertex to itself) are counted twice.

*   **Formula:**  deg(v) = number of edges incident on v.

*   **Directed Graphs:**
    *   *In-degree* (deg<sup>-</sup>(v)): The number of edges entering vertex *v*.
    *   *Out-degree* (deg<sup>+</sup>(v)): The number of edges leaving vertex *v*.
    *   deg(v) = deg<sup>-</sup>(v) + deg<sup>+</sup>(v)

*   **Example (using the undirected graph from above):**
    *   deg(A) = 3 (Edges (A,B), (A,C), and (D,A) are incident on A)
    *   deg(B) = 2 (Edges (A,B) and (B,C) are incident on B)
    *   deg(C) = 3 (Edges (B,C), (C,D) and (A,C) are incident on C)
    *   deg(D) = 2 (Edges (C,D) and (D,A) are incident on D)

*   **Example (Directed Graph):** Let V = {A, B, C}, E = {(A, B), (B, A), (A, C)}.
    *   deg<sup>+</sup>(A) = 2 (Edges (A, B) and (A, C) leave A)
    *   deg<sup>-</sup>(A) = 1 (Edge (B, A) enters A)
    *   deg(A) = 3
    *   deg<sup>+</sup>(B) = 1 (Edge (B, A) leaves B)
    *   deg<sup>-</sup>(B) = 1 (Edge (A, B) enters B)
    *   deg(B) = 2
    *   deg<sup>+</sup>(C) = 0
    *   deg<sup>-</sup>(C) = 1 (Edge (A,C) enters C)
    *   deg(C) = 1

**4. Special Types of Vertices:**

*   **Isolated Vertex:** A vertex with a degree of 0.  It has no edges incident on it.

*   **Pendant Vertex (Leaf Vertex):** A vertex with a degree of 1.  It has only one edge incident on it.

*   **Example:**  Consider a graph with vertices {A, B, C, D, E}.
    *   If deg(A) = 0, then A is an isolated vertex.
    *   If deg(B) = 1, then B is a pendant vertex.

**5. Handshaking Lemma:**

*   **Statement:** For any undirected graph G = (V, E), the sum of the degrees of all vertices is equal to twice the number of edges.

    *   ∑<sub>v∈V</sub> deg(v) = 2|E|

*   **Explanation:**  Each edge contributes to the degree of two vertices (its endpoints).  Therefore, when summing the degrees of all vertices, each edge is counted twice.

*   **Implication:** The sum of the degrees of all vertices in a graph is *always* an even number. This also implies that the number of vertices with odd degree is always even.

*   **Example (using the undirected graph from above):**
    *   V = {A, B, C, D}, E = {(A, B), (B, C), (C, D), (D, A), (A, C)}
    *   deg(A) = 3, deg(B) = 2, deg(C) = 3, deg(D) = 2
    *   ∑ deg(v) = 3 + 2 + 3 + 2 = 10
    *   |E| = 5
    *   2|E| = 2 * 5 = 10
    *   Therefore, the Handshaking Lemma holds.

**6.  Incidence and Degree in Real-World Scenarios:**

*   **Social Networks:**  Vertices represent people, and edges represent friendships. The degree of a vertex represents the number of friends a person has.
*   **Transportation Networks:** Vertices represent cities, and edges represent roads or flight paths. The degree of a vertex represents the number of roads or flight paths connected to that city.  Directed edges can represent one-way streets.
*   **Computer Networks:** Vertices represent computers, and edges represent network connections. The degree of a vertex represents the number of other computers a computer is directly connected to.  In-degree and out-degree can represent incoming and outgoing network traffic.
*   **Website Link Analysis:** Vertices are webpages, and directed edges represent links from one page to another.  In-degree and out-degree can indicate a page's popularity (number of incoming links) and how much it refers to other pages.

**7. Important Points to Remember:**

*   Graphs are defined by their vertices and edges.
*   Incidence describes the relationship between vertices and edges.
*   The degree of a vertex quantifies the number of connections it has.
*   The Handshaking Lemma provides a fundamental relationship between the degrees of vertices and the number of edges.
*   The concepts of incidence and degree are crucial for analyzing the structure and properties of graphs.

---

**Practice Questions/Exercises:**

1.  **Graph Representation:** Draw a graph with vertices V = {1, 2, 3, 4, 5} and edges E = {(1, 2), (1, 3), (2, 4), (3, 5), (4, 5)}.

2.  **Incidence Identification:**  In the graph from question 1, which vertices are incident on the edge (2, 4)?

3.  **Degree Calculation:**  Calculate the degree of each vertex in the graph from question 1.

4.  **Directed Graph Degree Calculation:** Consider a directed graph with vertices V = {A, B, C, D} and edges E = {(A, B), (B, C), (C, A), (D, A)}. Calculate the in-degree and out-degree of each vertex.  Also, calculate the total degree.

5.  **Handshaking Lemma Verification:** A graph has 6 vertices with degrees 2, 2, 3, 3, 4, and 4. How many edges does the graph have? Verify your answer using the Handshaking Lemma.

6.  **Isolated and Pendant Vertices:** Draw a graph with 5 vertices.  Include one isolated vertex and one pendant vertex.

7. **Application Scenario:** Model the relationship between social media users using a graph. Assume that friendships form edges.  What does a high-degree vertex represent in this context? What does an isolated vertex represent?

**Answers:**

1.  *[Graph drawing omitted for text-based format - visualize 5 numbered points.  Connect 1 to 2, 1 to 3, 2 to 4, 3 to 5, and 4 to 5]*

2.  2 and 4

3.  deg(1) = 2, deg(2) = 2, deg(3) = 2, deg(4) = 2, deg(5) = 2

4.  *   A: deg<sup>+</sup>(A) = 1, deg<sup>-</sup>(A) = 2, deg(A) = 3
    *   B: deg<sup>+</sup>(B) = 1, deg<sup>-</sup>(B) = 1, deg(B) = 2
    *   C: deg<sup>+</sup>(C) = 1, deg<sup>-</sup>(C) = 1, deg(C) = 2
    *   D: deg<sup>+</sup>(D) = 1, deg<sup>-</sup>(D) = 0, deg(D) = 1

5.  Sum of degrees = 2 + 2 + 3 + 3 + 4 + 4 = 18.
    According to the Handshaking Lemma, 2|E| = 18.
    Therefore, |E| = 9. The graph has 9 edges.

6.  *[Graph drawing omitted for text-based format - visualize 5 points. One point should have no connecting edges (isolated). One point should have only one connecting edge (pendant). The remaining vertices can have any valid configuration that connects them together.]*

7.  *   A high-degree vertex represents a user with many friends (a popular user).
    *   An isolated vertex represents a user with no friends (in the context of the graph's representation of friendships on the social media platform).
