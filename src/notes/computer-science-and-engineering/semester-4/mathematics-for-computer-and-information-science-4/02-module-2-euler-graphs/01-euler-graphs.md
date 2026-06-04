---
title: "Euler graphs"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af27"
status: "completed"
scrapedAt: "2026-05-20T16:13:27.275Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4
## Module 2: Euler Graphs
### Topic: Euler Graphs

**Description:** This topic covers Euler graphs, a fundamental concept in graph theory with applications in computer science and information science.

**Learning Outcomes:** By the end of this topic, you should be able to:

*   Define an Euler path and an Euler circuit.
*   Determine if a given graph contains an Euler path or an Euler circuit.
*   State and apply necessary and sufficient conditions for the existence of Euler paths and circuits.
*   Construct an Euler path or Euler circuit in a graph, if one exists.
*   Understand the applications of Euler graphs in various problems.

---

### 1. Key Concepts and Definitions

*   **Graph:** A graph G = (V, E) consists of a set of vertices V and a set of edges E, where each edge connects two vertices.
*   **Path:** A sequence of vertices connected by edges.  A path of length n is denoted by v0, e1, v1, e2, v2, ..., en, vn where ei connects vi-1 and vi.
*   **Circuit:** A path that starts and ends at the same vertex.
*   **Euler Path (Euler Trail):** A path in a graph that visits every edge exactly once.
*   **Euler Circuit (Euler Cycle):** A circuit in a graph that visits every edge exactly once.
*   **Connected Graph:** A graph is connected if there is a path between every pair of vertices.
*   **Degree of a Vertex (deg(v)):** The number of edges incident to a vertex *v*.  A loop adds 2 to the degree.
*   **Even Vertex:** A vertex with an even degree.
*   **Odd Vertex:** A vertex with an odd degree.

### 2. Necessary and Sufficient Conditions for Euler Paths and Circuits

**Euler's Theorem (for Euler Circuits):**

*   **Theorem:** A connected graph has an Euler circuit if and only if every vertex has an even degree.
*   **Explanation:**  If every vertex has an even degree, you can always enter and leave a vertex on different edges without repeating any edges, eventually returning to your starting vertex.
*   **Why Necessary:**  If a graph has an Euler circuit, then every time you visit a vertex (entering and leaving), you use two edges. Since you visit every edge exactly once, the total degree of each vertex must be even.
*   **Why Sufficient:** We can build an Euler circuit iteratively.  Start at any vertex. Continue traveling along edges. Since all vertices have even degree, you can always exit a vertex (unless you've used all the edges).  This will create a cycle. If this cycle isn't an Euler circuit, you can find another vertex on the cycle that has unused edges and begin another cycle from there. Combine cycles together until the entire graph is traversed.

**Euler's Theorem (for Euler Paths):**

*   **Theorem:** A connected graph has an Euler path (but not an Euler circuit) if and only if it has exactly two vertices of odd degree.
*   **Explanation:** The Euler path starts at one odd-degree vertex and ends at the other odd-degree vertex.
*   **Why Necessary:** In an Euler path, every time you visit an intermediate vertex (i.e., not the start or end), you use two edges (entering and leaving).  Therefore, all intermediate vertices must have even degree. The start and end vertices are visited one more time leaving/entering respectively and thus are of odd degree.
*   **Why Sufficient:** Add an edge between the two odd-degree vertices. This new graph now has all even-degree vertices and thus has an Euler circuit. Remove the added edge and you have an Euler path.

**Important Notes:**

*   If a graph has more than two vertices of odd degree, it cannot have an Euler path or an Euler circuit.
*   The starting and ending vertices of an Euler path must be the two odd-degree vertices.
*   Isolated vertices (vertices with no edges connected to them) do not affect the existence of Euler paths or circuits in the connected component of the graph containing edges.

### 3. Constructing Euler Paths and Circuits (Fleury's Algorithm)

**Fleury's Algorithm (for finding Euler Circuits or Euler Paths):**

1.  **Check the Conditions:** Ensure that the graph satisfies the conditions for an Euler circuit (all vertices have even degree) or an Euler path (exactly two vertices have odd degree).  Make sure the graph is connected.
2.  **Choose a Starting Vertex:**
    *   If you're looking for an Euler circuit, start at any vertex.
    *   If you're looking for an Euler path, start at one of the odd-degree vertices.
3.  **Traverse Edges:**
    *   At each step, choose an edge to traverse, **being careful not to choose a bridge (a cut edge) unless there is no other option**. A bridge is an edge that, if removed, would disconnect the graph.
    *   Mark the chosen edge as visited (remove it from the graph).
    *   Move to the vertex connected to the chosen edge.
4.  **Repeat Step 3:** Continue traversing edges until you have visited all edges in the graph.

**Example 1: Euler Circuit**

Consider a graph with vertices A, B, C, and D, and edges AB, BC, CD, DA, AC.

1.  **Check Conditions:**
    *   deg(A) = 2, deg(B) = 2, deg(C) = 2, deg(D) = 2. All vertices have even degree.
    *   The graph is connected.
    *   Therefore, it has an Euler circuit.

2.  **Choose Starting Vertex:** Start at A.

3.  **Traverse Edges:**
    *   A -> B (remove edge AB)
    *   B -> C (remove edge BC)
    *   C -> D (remove edge CD)
    *   D -> A (remove edge DA)
    *   A -> C (remove edge AC)

4.  **Result:** The Euler circuit is A-B-C-D-A-C-A.

**Example 2: Euler Path**

Consider a graph with vertices A, B, C, and D, and edges AB, BC, CD, and DA. Add an edge AC. Remove the edge AD.

1.  **Check Conditions:**
    *   deg(A) = 3, deg(B) = 2, deg(C) = 3, deg(D) = 0.  Only two vertices (A and C) have odd degree.
    *   The graph is connected (ignore the isolated vertex D).
    *   Therefore, it has an Euler path.

2.  **Choose Starting Vertex:** Start at A.

3.  **Traverse Edges:**
    *   A -> B (remove edge AB)
    *   B -> C (remove edge BC)
    *   C -> A (remove edge AC)
    *   C -> D (remove edge CD)  *Note that D is an isolated vertex*

4.  **Result:** The Euler path is A-B-C-A-C-D.
    Alternatively, the Euler path can be A-C-B-C-D-A

**Important Considerations for Fleury's Algorithm:**

*   **Choosing Bridges:**  The most challenging aspect is identifying bridges.  If you have a choice between an edge that is a bridge and an edge that is not, always choose the edge that is not a bridge. This helps ensure that you don't prematurely disconnect the graph.
*   **Disconnected Graph:** Fleury's algorithm requires a connected graph. If a graph is not connected, it cannot have an Euler path or an Euler circuit spanning the entire graph.

### 4. Applications of Euler Graphs

*   **The Königsberg Bridge Problem:**  A classic problem solved using Euler's theorem. The problem asks whether it is possible to walk through the city of Königsberg (now Kaliningrad, Russia) and cross each of the seven bridges exactly once.  Euler proved that it was impossible because the graph representing the city had four vertices with odd degree.
*   **DNA Sequencing:**  Eulerian paths can be used to assemble DNA sequences from fragments.
*   **Network Routing:** Finding routes in networks that minimize the number of edges traversed (used in packet routing).
*   **Street Sweeping and Garbage Collection:** Designing efficient routes for street sweepers and garbage trucks to cover every street exactly once.
*   **Circuit Board Testing:** Determining if a circuit board can be tested with a single pass of a testing probe.

### 5. Practice Questions/Exercises

**Question 1:** Does the following graph have an Euler circuit? Vertices: A, B, C, D. Edges: AB, BC, CD, DA, AC, BD.

**Answer:**
1.  Calculate degrees: deg(A) = 3, deg(B) = 3, deg(C) = 3, deg(D) = 3.
2.  Since there are more than two vertices with odd degree, the graph does not have an Euler circuit.

**Question 2:** Does the following graph have an Euler path? Vertices: P, Q, R, S. Edges: PQ, QR, RS, SP.

**Answer:**
1. Calculate degrees: deg(P) = 2, deg(Q) = 2, deg(R) = 2, deg(S) = 2. All vertices have even degree.
2. Since all vertices have even degree, the graph has an Euler circuit (and thus an Euler path).  An example is P-Q-R-S-P.

**Question 3:** Construct an Euler circuit for the graph in Question 2.

**Answer:** As calculated in the previous question, one Euler Circuit is P-Q-R-S-P

**Question 4:** A connected graph has 10 vertices. 8 vertices have degree 4, and 2 vertices have degree 3. Does this graph have an Euler Path or Euler Circuit?

**Answer:**

1.  Check degrees: We are given 2 vertices of degree 3 (odd).
2.  Since there are exactly two vertices of odd degree, the graph has an Euler path but not an Euler circuit.

**Question 5:** Is it possible to draw the following figure without lifting your pen and without going over any line twice? The figure is a square with vertices A, B, C, D and also contains the diagonals AC and BD.

**Answer:** This is essentially asking if there is an Euler path or circuit in the corresponding graph.

1. Calculate degrees:  deg(A)=3, deg(B)=3, deg(C)=3, deg(D)=3.
2. There are 4 vertices of odd degree.
3. Thus it is not possible to draw this figure without lifting your pen or going over any line twice.

### 6. Important Points to Remember

*   Euler's theorems provide a quick way to determine whether an Euler path or circuit exists in a graph.
*   Fleury's algorithm is a practical method for constructing Euler paths and circuits but requires careful attention to bridges.
*   Understanding the concept of vertex degrees and connectivity is crucial for working with Euler graphs.
*   Euler graphs have many practical applications in computer science and other fields.
*   When asked to provide an Euler path/circuit, make sure you explicitly state the path as a sequence of vertices (e.g., A-B-C-D-A).
