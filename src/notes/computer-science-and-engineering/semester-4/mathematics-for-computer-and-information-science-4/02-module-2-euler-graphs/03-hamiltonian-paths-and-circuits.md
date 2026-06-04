---
title: "Hamiltonian paths and circuits"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af29"
status: "completed"
scrapedAt: "2026-05-20T16:13:28.709Z"
---
## Mathematics for Computer and Information Science-4: Module 2 - Hamiltonian Paths and Circuits

**Topic:** Hamiltonian Paths and Circuits

**Description:**  This module focuses on Hamiltonian paths and circuits within the context of graph theory, a fundamental area in mathematics relevant to computer science. We'll explore the definitions, properties, and applications of Hamiltonian paths and circuits.

**Learning Outcomes:**

*   Understand the definitions of Hamiltonian paths and Hamiltonian circuits.
*   Distinguish between Euler paths/circuits and Hamiltonian paths/circuits.
*   Determine whether a given graph contains a Hamiltonian path or circuit.
*   Apply relevant theorems (Dirac's Theorem, Ore's Theorem) to determine the existence of Hamiltonian circuits.
*   Apply Hamiltonian paths and circuits to solve real-world problems (e.g., the Traveling Salesperson Problem).
*   Understand the limitations of algorithms for finding Hamiltonian paths and circuits.

---

### 1. Key Concepts and Definitions

*   **Path:** A sequence of vertices and edges in a graph such that no vertex is repeated.
*   **Circuit:** A path that starts and ends at the same vertex.
*   **Hamiltonian Path:** A path in a graph that visits every vertex exactly once.
*   **Hamiltonian Circuit (or Cycle):** A circuit in a graph that visits every vertex exactly once, except for the starting vertex which is visited twice (at the beginning and end).
*   **Hamiltonian Graph:** A graph that contains a Hamiltonian circuit.

**Formal Definitions:**

*   **Hamiltonian Path:** A path *v1, e1, v2, e2, ..., vk-1, ek-1, vk* in a graph G = (V, E) is a Hamiltonian path if V = {v1, v2, ..., vk} and vi ≠ vj for all i ≠ j.
*   **Hamiltonian Circuit:** A circuit *v1, e1, v2, e2, ..., vk-1, ek-1, vk, e, v1*  in a graph G = (V, E) is a Hamiltonian circuit if V = {v1, v2, ..., vk} and vi ≠ vj for all i ≠ j.

### 2. Distinguishing Between Euler Paths/Circuits and Hamiltonian Paths/Circuits

This is a crucial distinction. Here's a table summarizing the key differences:

| Feature        | Euler Path/Circuit                          | Hamiltonian Path/Circuit                    |
|----------------|---------------------------------------------|---------------------------------------------|
| **Focus**      | Edges                                       | Vertices                                      |
| **Requirement**| Visits every edge exactly once.              | Visits every vertex exactly once (except the start/end for circuits). |
| **Vertex Visit**| Vertices can be visited multiple times.     | Each vertex visited only once (except start/end for circuits).|
| **Existence Condition**| Can be easily determined (connected graph with <=2 vertices of odd degree). | Determining existence is a computationally difficult problem (NP-complete). |

**Example:**

Consider a graph with vertices A, B, C, and D, and edges: AB, BC, CD, DA.

*   This graph has a Hamiltonian circuit (A-B-C-D-A).
*   This graph also has an Euler circuit (A-B-C-D-A).

Now consider a graph with vertices A, B, C, D, and edges: AB, BC, CD, and AC.

* It has a Hamiltonian Path (B-C-A-D)
* It does not have a Hamiltonian Circuit.
* It does not have an Euler path or circuit as vertices B and D have degree 1, vertex A has degree 2, and vertex C has degree 2.

**Important Note:** A graph can have an Euler circuit but no Hamiltonian circuit, a Hamiltonian circuit but no Euler circuit, both, or neither.

### 3. Determining Whether a Given Graph Contains a Hamiltonian Path or Circuit

*   **No General Algorithm:**  Unlike Euler paths/circuits, there is no efficient algorithm to determine whether a graph contains a Hamiltonian path or circuit.  The problem is NP-complete. This means that there is no known polynomial-time algorithm to solve it.
*   **Brute-Force Approach:**  One way to check is to list all possible paths/circuits and see if any satisfy the Hamiltonian conditions. However, this is highly inefficient for larger graphs.
*   **Heuristics:**  Heuristics are strategies that provide a "good enough" solution, but don't guarantee finding a Hamiltonian path/circuit or confirming its absence.
*   **Theorems:**  Certain theorems provide sufficient conditions for the existence of Hamiltonian circuits. They *do not* provide necessary conditions (meaning that a graph might have a Hamiltonian circuit even if the theorems don't apply).

### 4. Relevant Theorems for Hamiltonian Circuits

These theorems provide sufficient conditions.  If they hold, you *know* the graph has a Hamiltonian circuit.

*   **Dirac's Theorem:** If a simple graph G with *n* vertices (*n* ≥ 3) has the property that the degree of every vertex is at least *n*/2, then G has a Hamiltonian circuit.
*   **Ore's Theorem:** If a simple graph G with *n* vertices (*n* ≥ 3) has the property that for every pair of non-adjacent vertices *u* and *v*, deg(u) + deg(v) ≥ *n*, then G has a Hamiltonian circuit.

**Examples:**

*   **Example 1 (Dirac's Theorem):** Consider a complete graph K5 (5 vertices, every vertex connected to every other vertex).  Each vertex has degree 4. Since 4 ≥ 5/2, by Dirac's Theorem, K5 has a Hamiltonian circuit.
*   **Example 2 (Ore's Theorem):** Consider a graph with 6 vertices A, B, C, D, E, F. Edges: AB, BC, CD, DE, EF, FA, AC, DF. The graph is not complete. deg(A) = 3, deg(B) = 2, deg(C) = 3, deg(D) = 3, deg(E) = 2, deg(F) = 3. Consider non-adjacent vertices B and F. deg(B) + deg(F) = 2 + 3 = 5. 5 < 6. Therefore, Ore's theorem doesn't apply.
Consider non-adjacent vertices B and D. deg(B) + deg(D) = 2 + 3 = 5. 5 < 6. Therefore, Ore's theorem doesn't apply.
Consider non-adjacent vertices B and E. deg(B) + deg(E) = 2 + 2 = 4. 4 < 6. Therefore, Ore's theorem doesn't apply.
Consider non-adjacent vertices A and E. deg(A) + deg(E) = 3 + 2 = 5. 5 < 6. Therefore, Ore's theorem doesn't apply.
Since the condition isn't met for all non-adjacent vertices, Ore's Theorem cannot be used to prove this graph has a Hamiltonian Circuit. However, the graph *does* have a Hamiltonian circuit: A-B-C-D-E-F-A.  This shows that the theorem is a *sufficient* but not *necessary* condition.

**Important Points:**

*   If Dirac's or Ore's Theorem apply, you *know* there's a Hamiltonian circuit.
*   If they *don't* apply, it *doesn't mean* there isn't a Hamiltonian circuit.  You just can't prove it with these theorems.

### 5. Applications of Hamiltonian Paths and Circuits

*   **Traveling Salesperson Problem (TSP):**  A classic problem where a salesperson needs to visit a set of cities and return to the starting city, minimizing the total distance traveled.  Finding an optimal solution is NP-hard, and solutions often involve heuristics.
*   **Route Planning:** Finding optimal routes for delivery trucks, buses, or other vehicles.
*   **Network Design:**  Designing networks (e.g., computer networks) with efficient connections.
*   **Genome Sequencing:**  Reconstructing the sequence of DNA fragments.
*   **VLSI Design:** Routing wires in integrated circuits.

**Example: Traveling Salesperson Problem**

Imagine a delivery driver needing to visit cities A, B, C, and D, starting and ending at city A.  The distances between cities are:

*   AB = 10
*   AC = 15
*   AD = 20
*   BC = 35
*   BD = 25
*   CD = 30

We need to find the Hamiltonian circuit with the smallest total distance. One approach is to list all possible circuits and calculate their lengths:

*   A-B-C-D-A: 10 + 35 + 30 + 20 = 95
*   A-B-D-C-A: 10 + 25 + 30 + 15 = 80
*   A-C-B-D-A: 15 + 35 + 25 + 20 = 95
*   A-C-D-B-A: 15 + 30 + 25 + 10 = 80
*   A-D-B-C-A: 20 + 25 + 35 + 15 = 95
*   A-D-C-B-A: 20 + 30 + 35 + 10 = 95

In this small example, the Hamiltonian circuits A-B-D-C-A and A-C-D-B-A have the shortest total distance (80).

### 6. Limitations of Algorithms for Finding Hamiltonian Paths and Circuits

*   **NP-Completeness:**  The problem of finding Hamiltonian paths and circuits is NP-complete.  This means that no polynomial-time algorithm is known to exist.
*   **Computational Complexity:**  Brute-force approaches have factorial time complexity (O(n!)), making them impractical for even moderately sized graphs.
*   **Heuristics vs. Optimal Solutions:** Heuristics can provide good solutions, but they don't guarantee finding the *best* solution (e.g., in the Traveling Salesperson Problem).
*   **Approximation Algorithms:** Some approximation algorithms provide solutions that are within a certain factor of the optimal solution, but these also have limitations and complexities.

### 7. Practice Questions/Exercises

**Question 1:**

Which of the following statements is true?

a)  Every graph with an Euler circuit also has a Hamiltonian circuit.
b)  Every graph with a Hamiltonian circuit also has an Euler circuit.
c)  A graph can have both an Euler circuit and a Hamiltonian circuit.
d)  If a graph has no vertices of odd degree, it must have a Hamiltonian circuit.

**Answer:** c) A graph can have both an Euler circuit and a Hamiltonian circuit.

**Question 2:**

Does the following graph have a Hamiltonian circuit?  Vertices: A, B, C, D. Edges: AB, BC, CD, DA, AC.

**Answer:** Yes. A-B-C-D-A.

**Question 3:**

A simple graph G has 6 vertices.  The degrees of the vertices are: 3, 3, 3, 3, 3, 3. Does G have a Hamiltonian circuit according to Dirac's Theorem?

**Answer:** Yes. n = 6, so n/2 = 3.  Each vertex has degree 3, which is ≥ n/2. Therefore, by Dirac's Theorem, G has a Hamiltonian circuit.

**Question 4:**

Consider a graph G with 5 vertices (A, B, C, D, E) and the following edges: AB, BC, CD, DE, EA. Does this graph have an Euler circuit? Does this graph have a Hamiltonian circuit?

**Answer:** Each vertex has degree 2.  The graph is connected. Therefore, it has an Euler circuit (e.g., A-B-C-D-E-A).  It also has a Hamiltonian circuit (A-B-C-D-E-A).

**Question 5:**

Describe the Traveling Salesperson Problem (TSP) and explain why finding an optimal solution is computationally challenging.

**Answer:** The Traveling Salesperson Problem (TSP) involves finding the shortest possible route that visits each city in a given list exactly once and returns to the starting city.  It's computationally challenging because it's an NP-hard problem, meaning that there is no known polynomial-time algorithm to find the optimal solution.  Brute-force approaches have factorial time complexity, which becomes infeasible for even moderately sized lists of cities. Therefore, heuristic or approximation algorithms are often used.

### 8. Important Points to Remember

*   Euler paths/circuits focus on edges; Hamiltonian paths/circuits focus on vertices.
*   Finding Hamiltonian paths/circuits is computationally difficult (NP-complete).
*   Dirac's and Ore's Theorems provide *sufficient* (but not necessary) conditions for the existence of Hamiltonian circuits.
*   The Traveling Salesperson Problem (TSP) is a classic application of Hamiltonian circuits.
*   Heuristics and approximation algorithms are often used to find "good enough" solutions when optimal solutions are too computationally expensive to find.
